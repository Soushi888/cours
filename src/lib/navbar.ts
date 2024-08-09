import type { NavbarConfig } from '@svelteness/kit-docs';

export const navbar: NavbarConfig = {
	links: [
		{ title: 'HTML/CSS', slug: '/html-css', match: /\/html-css/ },
		{ title: 'JavaScript/TypeScript', slug: '/js-ts', match: /\/js-ts/ }
		// { title: 'Svelte/SvelteKit', slug: '/svelte', match: /\/svelte/ },
		// { title: 'Rust/WebAssembly', slug: '/rust-wasm', match: /\/rust-wasm/ },
		// { title: 'Holochain', slug: '/holochain', match: /\/holochain/ }
	]
};
