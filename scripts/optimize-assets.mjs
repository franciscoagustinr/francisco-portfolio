#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import ttf2woff2 from 'ttf2woff2';
import { optimizeHDR } from './lib/hdr.mjs';

const ROOT = process.cwd();
const IMAGES_DIR = path.join(ROOT, 'src/assets/images');
const FONTS_DIR = path.join(ROOT, 'src/assets/fonts');
const HDR_DIR = path.join(ROOT, 'public/hdr');
const HDR_BACKUP_DIR = path.join(ROOT, 'src/assets/_originals/hdr');

const MAX_WIDTH = 1024;
const WEBP_QUALITY = 80;
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} kB`;

const isFresh = (source, output) =>
  fs.existsSync(output) &&
  fs.statSync(output).mtimeMs >= fs.statSync(source).mtimeMs;

async function optimizeImages() {
  if (!fs.existsSync(IMAGES_DIR)) return { files: 0, saved: 0 };

  const entries = fs
    .readdirSync(IMAGES_DIR)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name)));

  let before = 0;
  let after = 0;

  for (const name of entries) {
    const source = path.join(IMAGES_DIR, name);
    const output = path.join(IMAGES_DIR, `${path.parse(name).name}.webp`);

    const sourceSize = fs.statSync(source).size;
    if (isFresh(source, output)) {
      before += sourceSize;
      after += fs.statSync(output).size;
      continue;
    }

    await sharp(source)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(output);

    const outputSize = fs.statSync(output).size;
    before += sourceSize;
    after += outputSize;
    console.log(
      `  ${name} -> ${path.basename(output)}   ${kb(sourceSize)} -> ${kb(outputSize)}`
    );
  }

  return { files: entries.length, saved: before - after };
}

async function optimizeFonts() {
  if (!fs.existsSync(FONTS_DIR)) return { files: 0, saved: 0 };

  const entries = fs
    .readdirSync(FONTS_DIR)
    .filter((name) => path.extname(name).toLowerCase() === '.ttf');

  let before = 0;
  let after = 0;

  for (const name of entries) {
    const source = path.join(FONTS_DIR, name);
    const output = path.join(FONTS_DIR, `${path.parse(name).name}.woff2`);

    const sourceSize = fs.statSync(source).size;
    if (isFresh(source, output)) {
      before += sourceSize;
      after += fs.statSync(output).size;
      continue;
    }

    const convert = ttf2woff2.default ?? ttf2woff2;
    fs.writeFileSync(output, convert(fs.readFileSync(source)));

    const outputSize = fs.statSync(output).size;
    before += sourceSize;
    after += outputSize;
    console.log(
      `  ${name} -> ${path.basename(output)}   ${kb(sourceSize)} -> ${kb(outputSize)}`
    );
  }

  return { files: entries.length, saved: before - after };
}

function optimizeHDRs() {
  if (!fs.existsSync(HDR_DIR)) return { files: 0, saved: 0 };
  fs.mkdirSync(HDR_BACKUP_DIR, { recursive: true });

  const entries = fs
    .readdirSync(HDR_DIR)
    .filter((name) => name.toLowerCase().endsWith('.hdr'));

  let before = 0;
  let after = 0;

  for (const name of entries) {
    const output = path.join(HDR_DIR, name);
    const backup = path.join(HDR_BACKUP_DIR, name);
    const firstRun = !fs.existsSync(backup);
    if (firstRun) fs.copyFileSync(output, backup);

    const sourceSize = fs.statSync(backup).size;
    if (!firstRun && isFresh(backup, output)) {
      before += sourceSize;
      after += fs.statSync(output).size;
      continue;
    }

    const { buffer, srcStats, dstStats } = optimizeHDR(backup);
    fs.writeFileSync(output, buffer);

    const outputSize = fs.statSync(output).size;
    before += sourceSize;
    after += outputSize;
    console.log(
      `  ${name}: ${kb(sourceSize)} -> ${kb(outputSize)} (1024x512 -> 512x256, luz p50 ${srcStats.p50.toFixed(3)} -> ${dstStats.p50.toFixed(3)})`
    );
  }

  return { files: entries.length, saved: before - after };
}

const started = Date.now();

console.log('Optimizando imágenes (WebP)...');
const images = await optimizeImages();

console.log('Optimizando fuentes (WOFF2)...');
const fonts = await optimizeFonts();

console.log('Optimizando entorno HDR...');
const hdrs = optimizeHDRs();

const totalSaved = images.saved + fonts.saved + hdrs.saved;
console.log(
  `\nListo: ${images.files} imágenes, ${fonts.files} fuentes y ${hdrs.files} HDR en ${
    Date.now() - started
  } ms. Ahorro total: ${kb(Math.max(totalSaved, 0))}.`
);
