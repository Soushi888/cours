<script lang="ts">
	import { languageStore } from '$lib/store';
	import Code from './code.svelte';
	import Markdown from './markdown.svelte';
	import Notes from './notes.svelte';
	import Slide from './slide.svelte';
</script>

<Slide>
	{#if $languageStore === 'fr'}
		<p>Bonjour Monde !</p>
	{:else}
		<p>Hello World !</p>
	{/if}
</Slide>

<Slide>
	<p>Slide 2</p>
</Slide>
