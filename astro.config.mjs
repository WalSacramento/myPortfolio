// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque pela URL pública final do site (usada em canonical, sitemap e Open Graph).
const SITE_URL = 'https://seu-dominio.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
