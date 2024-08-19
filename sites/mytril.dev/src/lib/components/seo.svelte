<script lang="ts">
	// import favicon from '$lib/assets/images/favicon.ico';

	export let formatTitle = true;
	export let title = '';
	export let desc =
		'Mytril is a Svelte library component for rapidly building modern websites based on Svelte and Sveltekit';

	$: formattedTitle = formatTitle ? (title ? `${title} | Mytril` : `Mytril`) : title;
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
	<title>{formattedTitle}</title>
	<meta name="description" content={desc} />
</svelte:head>
