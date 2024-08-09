import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function load() {
	throw redirect(307, '/js-ts/basics/variables-comments-and-math-operators');
}
