import vue from '@vitejs/plugin-vue';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

const path = require('path');

export default {
  root: path.resolve(__dirname, '../components'),
  mode: 'production',
  plugins: [
    vue(),
    viteCommonjs(),
  ],
  build: {
    rollupOptions: {
      output: {
        format: 'cjs',
        globals: {
          vue: 'Vue',
        }
      },
    },
    lib: {
      entry: path.join(__dirname, '../components/index.js'),
      name: 'wk_ui',
      formats: ['es'],
    },
    outDir: path.join(__dirname, '../dist'),
    cssCodeSplit: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
};
