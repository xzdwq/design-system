import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const PORT = 5001;

export default defineConfig({
  build: {
    minify: false,
    cssCodeSplit: false,
    target: 'esnext',
  },
  server: {
    port: PORT,
  },
  preview: {
    port: PORT,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'design-system',
      filename: 'designSystem.js',
      exposes: {
        './App': './src/App.vue',
      },
      shared: ['vue'],
    }),
  ],
});
