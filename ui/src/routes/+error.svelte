<script>
	import Slide from '$lib/deck/slide.svelte';
	import Reveal from 'reveal.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { languages } from '$lib/store';

	onMount(() => {
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			controls: true
		});

		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides text-red-500">
		<Slide>
			<p class="text-8xl">{$page.status}</p>
			<p>{$page.error?.message}</p>

			{#if $page.error?.message === 'Invalid language'}
				<p>Valid languages : {languages.join(', ')}</p>
			{/if}
		</Slide>
	</div>
</div>
