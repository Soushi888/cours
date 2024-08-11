import { createKitDocsLoader } from '@svelteness/kit-docs';

export const prerender = true;

export const load = createKitDocsLoader({
	sidebar: {
		'/html-css': '/html-css',
		'/js-ts': '/js-ts'
	}
});

let temperature = 32;
let message =
	temperature < 0
		? "It's freezing!"
		: temperature < 15
			? "It's cold!"
			: temperature < 25
				? "It's mild!"
				: "It's warm!";
console.log(message); // Output: It's mild!
