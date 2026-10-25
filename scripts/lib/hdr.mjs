import fs from 'node:fs';
import path from 'node:path';

export function parseHDR(buf) {
  let off = 0;
  const readLine = () => {
    const start = off;
    while (off < buf.length && buf[off] !== 0x0a) off++;
    const line = buf.subarray(start, off).toString('latin1');
    off++;
    return line;
  };

  const header = {};
  for (;;) {
    const line = readLine();
    if (line.trim() === '') break;
    const eq = line.indexOf('=');
    if (line.startsWith('#') || eq < 0) continue;
    header[line.slice(0, eq)] = line.slice(eq + 1);
  }

  const res = readLine();
  const m = res.match(/([+-]?)Y\s+(\d+)\s+([+-]?)X\s+(\d+)/);
  if (!m) throw new Error(`Resolución no reconocida: ${JSON.stringify(res)}`);
  const height = Number(m[2]);
  const width = Number(m[4]);
  const yDir = m[1] || '-';
  const xDir = m[3] || '+';

  const px = new Uint8Array(width * height * 4);
  let p = 0;
  const row = new Uint8Array(width * 4);

  for (let y = 0; y < height; y++) {
    const b0 = buf[off++];
    const b1 = buf[off++];
    const b2 = buf[off++];
    const b3 = buf[off++];

    if (b0 === 2 && b1 === 2 && ((b2 << 8) | b3) === width) {
      for (let c = 0; c < 4; c++) {
        let x = 0;
        while (x < width) {
          const code = buf[off++];
          if (code > 128) {
            const count = code - 128;
            const value = buf[off++];
            for (let i = 0; i < count; i++, x++) row[x * 4 + c] = value;
          } else {
            for (let i = 0; i < code; i++, x++) row[x * 4 + c] = buf[off++];
          }
        }
      }
      px.set(row, p);
      p += width * 4;
    } else {
      px[p++] = b0;
      px[p++] = b1;
      px[p++] = b2;
      px[p++] = b3;
      for (let i = 1; i < width * 4; i++) px[p++] = buf[off++];
    }
  }

  return { width, height, header, px, yDir, xDir };
}

export function encodeHDR(width, height, px, header = {}, yDir = '-', xDir = '+') {
  const parts = ['#?RADIANCE\n'];
  for (const [k, v] of Object.entries(header)) parts.push(`${k}=${v}\n`);
  if (!header.FORMAT) parts.push('FORMAT=32-bit_rle_rgbe\n');
  parts.push(`\n${yDir}Y ${height} ${xDir}X ${width}\n`);

  const chunks = [Buffer.from(parts.join(''), 'latin1')];
  const row = Buffer.alloc(width * 4);
  const rle = width >= 8 && width <= 32767;

  for (let y = 0; y < height; y++) {
    row.set(px.subarray(y * width * 4, (y + 1) * width * 4));
    const line = Buffer.alloc(width * 4 + 512);
    let o = 0;

    if (rle) {
      line[o++] = 2;
      line[o++] = 2;
      line[o++] = (width >> 8) & 0xff;
      line[o++] = width & 0xff;
      for (let c = 0; c < 4; c++) {
        let x = 0;
        while (x < width) {
          const value = row[x * 4 + c];
          let run = 1;
          while (x + run < width && row[(x + run) * 4 + c] === value && run < 127) run++;
          if (run >= 4) {
            line[o++] = 128 + run;
            line[o++] = value;
            x += run;
          } else {
            const start = x;
            let literal = 0;
            while (
              x < width &&
              literal < 127 &&
              !(
                x + 4 < width &&
                row[(x + 1) * 4 + c] === row[x * 4 + c] &&
                row[(x + 2) * 4 + c] === row[x * 4 + c] &&
                row[(x + 3) * 4 + c] === row[x * 4 + c]
              )
            ) {
              x++;
              literal++;
            }
            const len = x - start;
            line[o++] = len;
            for (let i = 0; i < len; i++) line[o++] = row[(start + i) * 4 + c];
          }
        }
      }
    } else {
      for (let i = 0; i < width * 4; i++) line[o++] = row[i];
    }
    chunks.push(line.subarray(0, o));
  }

  return Buffer.concat(chunks);
}

export function downsample2x(width, height, px) {
  const w = width >> 1;
  const h = height >> 1;
  const out = new Uint8Array(w * h * 4);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0;
      let g = 0;
      let b = 0;
      for (let dy = 0; dy < 2; dy++) {
        for (let dx = 0; dx < 2; dx++) {
          const i = ((y * 2 + dy) * width + (x * 2 + dx)) * 4;
          const s = Math.pow(2, px[i + 3] - 136);
          r += px[i] * s;
          g += px[i + 1] * s;
          b += px[i + 2] * s;
        }
      }
      r /= 4;
      g /= 4;
      b /= 4;

      const o = (y * w + x) * 4;
      const max = Math.max(r, g, b);
      if (max < 1e-32) {
        out[o] = out[o + 1] = out[o + 2] = out[o + 3] = 0;
        continue;
      }
      const e = Math.ceil(Math.log2(max)) + 1; // E = e + 128, escala 2^(8-e)
      const scale = Math.pow(2, 8 - e);
      out[o] = Math.min(255, Math.max(0, Math.round(r * scale)));
      out[o + 1] = Math.min(255, Math.max(0, Math.round(g * scale)));
      out[o + 2] = Math.min(255, Math.max(0, Math.round(b * scale)));
      out[o + 3] = Math.min(255, Math.max(0, e + 128));
    }
  }
  return { width: w, height: h, px: out };
}

export function stats(width, height, px) {
  const lum = new Float64Array(width * height);
  let max = 0;
  let over1 = 0;
  for (let j = 0, i = 0; j < lum.length; j++, i += 4) {
    const s = Math.pow(2, px[i + 3] - 136);
    const l = 0.2126 * px[i] * s + 0.7152 * px[i + 1] * s + 0.0722 * px[i + 2] * s;
    lum[j] = l;
    if (l > max) max = l;
    if (l > 1) over1++;
  }
  const sorted = Float64Array.from(lum).sort();
  const q = (p) => sorted[Math.floor((p / 100) * (sorted.length - 1))];
  return {
    p50: q(50),
    p90: q(90),
    p99: q(99),
    max,
    pctOver1: (100 * over1) / lum.length,
  };
}

export function optimizeHDR(input, { downscale = true } = {}) {
  const buf = fs.readFileSync(input);
  const parsed = parseHDR(buf);
  const { width, height, header, px, yDir, xDir } = parsed;

  const target = downscale
    ? { ...downsample2x(width, height, px) }
    : { width, height, px };

  const out = encodeHDR(target.width, target.height, target.px, header, yDir, xDir);
  return { before: buf.length, after: out.length, buffer: out, srcStats: stats(width, height, px), dstStats: stats(target.width, target.height, target.px) };
}
