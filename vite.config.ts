import { fileURLToPath, URL } from 'node:url';

// import federation from '@originjs/vite-plugin-federation';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import { resolve } from 'path';
import { defineConfig } from 'vite';

const PORT = 5001;
// const LIB_NAME = 'qvant-components-library';
// const LIB_FILE_NAME = 'QvantComponentsLibrary';

export default defineConfig({
  base: process.env.MODE === 'deploy' ? 'dist/' : '/',
  server: {
    https: false,
    host: '127.0.0.1',
    port: PORT,
  },
  preview: {
    host: '127.0.0.1',
    port: PORT,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // build: {
  //   minify: false,
  //   cssCodeSplit: false,
  //   target: 'esnext',
  //   // ** Build package (conflict mf split-code)
  //   // lib: {
  //   //   entry: resolve(__dirname, 'lib/main.ts'),
  //   //   name: LIB_FILE_NAME,
  //   //   fileName: LIB_NAME,
  //   //   formats: ['es', 'umd'],
  //   // },
  //   rollupOptions: {
  //     external: ['vue'],
  //     output: {
  //       inlineDynamicImports: false,
  //       sourcemap: false,
  //       globals: {
  //         vue: 'Vue',
  //       },
  //       // ** Build package (conflict mf split-code)
  //       // manualChunks: {
  //       //   vendor: ['Vue'],
  //       // },
  //     },
  //   },
  // },
  plugins: [
    vue(),
    vueJsx(),
    // ** Exclude when building a package (conflict mf split-code)
    // federation({
    //   name: LIB_NAME,
    //   filename: `${LIB_FILE_NAME}.js`,
    //   exposes: {
    //     './App': './src/App.vue',
    //   },
    //   shared: {
    //     vue: { requiredVersion: '^3.2.47' },
    //   },
    // }),
  ],
});
