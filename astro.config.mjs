import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://shashanksmayya.dev',
  integrations: [mdx(), sitemap({
    // Leave the blog out of the sitemap until it has posts
    filter: (page) => !page.includes('/blog'),
  }), tailwind()]
});