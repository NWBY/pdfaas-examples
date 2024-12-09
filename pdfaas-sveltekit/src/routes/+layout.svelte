<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="mx-auto max-w-3xl">
	<div class="py-20">
		<h1 class="mb-4 text-2xl font-bold">PDFaaS SvelteKit</h1>
		{@render children()}
	</div>
</main>
