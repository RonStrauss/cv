import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind()],
  publicDir: 'public',
  site: 'https://ronstrauss.dev',
});
// output: '',
// adapter: cloudflare()