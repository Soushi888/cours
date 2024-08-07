<main class="container flex flex-col justify-center items-center h-full gap-10">
	<h1 class="text-xl">Hello World !</h1>
	<p>Soushi courses list :</p>
	<ul class="flex flex-col gap-4">
		<li class="underline"><a href="/html-css">HTML-CSS</a></li>
		<li class="underline"><a href="/js-ts">JS-TS</a></li>
		<li class="underline"><a href="/svelte">Svele/SvelteKit</a></li>
		<li class="underline"><a href="/rust">Rust</a></li>
	</ul>
</main>

<style>
	.underline {
		font-weight: bold;
		text-decoration: underline 0.15em rgba(255, 255, 255, 0);
		text-underline-offset: 0.3em;
		transition: text-decoration-color 300ms;

		&:hover {
			text-decoration-color: rgba(255, 255, 255, 1);
		}
	}
</style>
