import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const VENDOR_CHUNKS = {
  firebase: /node_modules\/(@firebase\/|firebase\/)/,
  three: /node_modules\/(three|three-stdlib|@react-three\/|@react-spring\/|troika-three-text|maath|meshoptimizer)\//,
  gsap: /node_modules\/gsap\//,
  howler: /node_modules\/howler\//,
  confetti: /node_modules\/react-confetti-explosion\//,
  react: /node_modules\/(react|react-dom|scheduler)\//,
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: false,
      workbox: {
        globPatterns: ["**/*.{js,css,html,woff2,svg,ico}"],
        globIgnores: ["**/Inter-*.woff2"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: /\/(models|hdr)\/.*$/,
            handler: "CacheFirst",
            options: {
              cacheName: "heavy-assets",
              expiration: { maxEntries: 8, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\/fonts\/.*$/,
            handler: "CacheFirst",
            options: {
              cacheName: "fonts-legacy",
              expiration: { maxEntries: 8, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\/assets\/.*$/,
            handler: "CacheFirst",
            options: {
              cacheName: "hashed-assets",
              expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 90 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/api\.open-meteo\.com\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "weather",
              expiration: { maxEntries: 6, maxAgeSeconds: 60 * 30 },
              networkTimeoutSeconds: 6,
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  base: '/',
  build: {
    target: 'es2019',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          for (const [name, pattern] of Object.entries(VENDOR_CHUNKS)) {
            if (pattern.test(id)) return name;
          }
          return undefined;
        },
      },
    },
  },
});
