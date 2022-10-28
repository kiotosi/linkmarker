import { defineConfig, ProxyOptions } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { config } from 'dotenv';

// ---- SASS ----
const ADDITIONAL_SCSS = ['_colors', '_fonts'];

// ---- Express proxy ----
// Start server with pnpm dev in root of workspaces to make it work
config();
const getExpressAddress = () =>
  `http://localhost:${process.env['PORT'] || 4000}`;

const expressApi: string[] = ['/meta'];
const proxyOptions: Record<string, ProxyOptions> = {};

expressApi.forEach(uri => {
  proxyOptions[uri] = {
    target: getExpressAddress(),
    changeOrigin: true,
  };
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // Root alias
  resolve: {
    alias: {
      '@workspace': path.resolve(__dirname),
    },
  },

  // Global SCSS files
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: ADDITIONAL_SCSS.map(
          path => `@import "@workspace/src/styles/${path}.scss";`
        ).join(''),
      },
    },
  },

  // Proxy for Express
  server: {
    proxy: proxyOptions,
  },

  build: {
    outDir: '../../dist-client',
  },
});
