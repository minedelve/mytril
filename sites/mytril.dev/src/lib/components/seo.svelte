<script lang="ts">
	import { PUBLIC_PROD } from '$env/static/public';
	import { page } from '$app/stores';  
	
	export let formatTitle = true;
	export let title = '';
	export let description =
		'Mytril is a Svelte library component for rapidly building modern websites based on Svelte and Sveltekit';

	$: formattedTitle = formatTitle ? (title ? `${title} | Mytril` : `Mytril | Svelte Component Library`) : title;


</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={PUBLIC_PROD === "true" ? "index,follow" : "noindex,nofollow"}>
	<link rel="canonical" href={`https://mytril.dev${$page.url.pathname === "/" ? '' : $page.url.pathname}`}>
</svelte:head>
