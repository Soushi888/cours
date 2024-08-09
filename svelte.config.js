import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	vitePlugin: {
		inspector: true
	},

	kit: {
		adapter: adapter(),

		prerender: {
			entries: ['*'],
			handleMissingId: 'warn'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
