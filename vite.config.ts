/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@':  path.resolve('./src')
    }
  }
});
