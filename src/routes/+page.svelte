<script>
	import { Button } from '@svelteness/kit-docs';
</script>

<main class="container flex flex-col justify-center items-center h-full gap-10">
	<h1 class="h1">Hello Student !</h1>
	<Button type="raised" href="https://framatalk.org/soushi-school" target="_blank"
		>Soushi School reunion</Button
	>
	<div class="space-y-4">
		<p class="text-2xl">Courses list :</p>
		<ul class="flex flex-col gap-4 items-center disc">
			<li class="underline-hover-effect font-bold"><a href="/html-css">HTML-CSS</a></li>
			<li class="underline-hover-effect font-bold"><a href="/js-ts">JS-TS</a></li>
		</ul>
	</div>
</main>
