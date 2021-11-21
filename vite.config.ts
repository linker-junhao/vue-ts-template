/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    VitePWA()
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
});
