// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ⚠️ CAMBIAR A DOMINIO FINAL cuando se configure DNS:
  // site: 'https://todocasa.cl',
  // site: 'https://todocasaconstrucciones.cl',
  site: 'https://todocasa-construcciones.netlify.app',

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false,
  },

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
});
