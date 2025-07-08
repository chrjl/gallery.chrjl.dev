// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import markdownIntegration from '@astropub/md';
import externalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdownIntegration()],
  markdown: {
    rehypePlugins: [[externalLinks, { rel: ['noreferrer'], target: '_blank' }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
