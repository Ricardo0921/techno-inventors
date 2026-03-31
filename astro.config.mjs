import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://technoinventors.com',
  output: 'static',
  build: {
    assets: '_astro',
  },
});
