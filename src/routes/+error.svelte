<script>
	import { page } from '$app/stores';
</script>

<main class="container flex flex-col justify-center items-center h-full gap-10">
	<div class="space-y-4">
		<h1 class="text-xl text-red-600">Error: {$page.status}</h1>
		<p class="font-bold">{$page.error?.message}</p>
	</div>
</main>
