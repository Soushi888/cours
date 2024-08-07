import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  vitePlugin: {
    inspector: true,
  },

  kit: {
    adapter: adapter(),

    prerender: {
      entries: ['*'],
      handleMissingId: 'warn',
    },
  },
};

export default config;
