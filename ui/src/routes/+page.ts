import { languageStore, languages } from '$lib/store';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

export const load: PageLoad = async ({ url }) => {
	const lang = url.searchParams.get('lang') || 'en';

	if (!languages.includes(lang)) {
		throw error(400, 'Invalid language');
	}

	languageStore.set(lang);
};
