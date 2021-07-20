import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

const path = require('path');

const base = process.env.NODE_ENV === 'production' ? '/' : './';
export default {
  root: path.join(__dirname, '../site'),
  base: base,
  mode: 'development',
  envDir: path.join(__dirname, '..'),
  plugins: [
    vue(),
    legacy(),
    viteCommonjs(),
  ],
  build: {
    outDir: path.join(__dirname, '../site/dist')
  },
  resolve: {
    alias: {
      '@components': path.join(__dirname, '../components'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
}
