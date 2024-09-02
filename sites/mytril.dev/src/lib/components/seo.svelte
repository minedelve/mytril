<script lang="ts">
	export let formatTitle = true;
	export let title = '';
	export let description =
		'Mytril is a Svelte library component for rapidly building modern websites based on Svelte and Sveltekit';

	$: formattedTitle = formatTitle ? (title ? `${title} | Mytril` : `Mytril | Svelte Component Library`) : title;
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />
</svelte:head>
