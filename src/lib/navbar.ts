import type { NavbarConfig } from '@svelteness/kit-docs';

export const navbar: NavbarConfig = {
	links: [
		{ title: 'HTML/CSS', slug: '/html-css', match: /\/html-css/ },
		{ title: 'JS/TS', slug: '/js-ts', match: /\/js-ts/ },
		{ title: 'Svelte/SvelteKit', slug: '/svelte', match: /\/svelte/ },
		{ title: 'Rust', slug: '/rust', match: /\/rust/ }
	]
};
