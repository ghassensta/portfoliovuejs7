// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';          // npm i -D vite-svg-loader
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),                                  //  <-- supprime si tu n’en as pas besoin
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),        //  @  =  /src
    },
  },

  /* (facultatif) : taille d’alerte des chunks, etc. */
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
