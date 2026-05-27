// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://novatum.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'fr', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()],
});