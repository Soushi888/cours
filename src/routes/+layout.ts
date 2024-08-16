import { createKitDocsLoader } from '@svelteness/kit-docs';

export const prerender = true;

export const load = createKitDocsLoader({
	sidebar: {
		'/html-css': '/html-css',
		'/js-ts': '/js-ts'
	}
});
