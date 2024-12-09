<script lang="ts">
	import { onMount } from 'svelte';

	let files: string[] = [];

	async function getFiles() {
		const res = await fetch('/api/uploads');
		const data = await res.json();
		files = data;
	}

	onMount(async () => {
		await getFiles();
	});
</script>

<form action="/" method="post" enctype="multipart/form-data">
	<div>
		<textarea
			name="text"
			id="text"
			rows="10"
			class="h-full w-full rounded-md border border-orange-500 p-2"
		></textarea>
	</div>
	<div>
		<button type="submit" class="w-full rounded-md bg-orange-500 px-4 py-2 text-white"
			>Upload</button
		>
	</div>
	<div>
		<p class="mb-2 mt-4 text-lg font-bold">Files</p>
		{#each files as file}
			<a href={`/api/upload?file=${file}`} class="block py-1 text-blue-500">Download {file}</a>
		{/each}
		{#if files.length === 0}
			<p class="py-1 text-gray-500">No files generated yet</p>
		{/if}
	</div>
</form>
