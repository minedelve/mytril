<script lang="ts">
	import { useTooltip } from './useTooltip.js';
	import { uniqueID } from '$lib/utils/uid.js';
	import { getAllContexts, setContext } from 'svelte';
	export let text: string | undefined = undefined;

	$: id = uniqueID();

	// Récupérer la fonction via le contexte
	const handleTooltip = useTooltip();

	const contexts = getAllContexts();

	let customTooltip:
		| { id: string; content: string | undefined; screen: { x: number; y: number } }
		| undefined = undefined;

	// Fonction pour gérer l'affichage

	const demoTooltip = (display?: unknown) => {
		console.log('demoTooltip', display);
	};

	setContext('showTooltip', demoTooltip);

	$: {
		console.log('contexts component', contexts);
		console.log('customTooltip', customTooltip);
	}
</script>

<!-- Appeler la fonction récupérée lors du clic -->
<button
	on:mouseenter={() =>
		handleTooltip({
			id: id,
			content: text,
			screen: {
				x: 0,
				y: 0
			}
		})}
	on:mouseleave={() => handleTooltip(undefined)}
>
	<slot />
</button>

{#if text}
	<!-- Contenu de la tooltip -->
	<span aria-describedby={id} class="tooltip-content" role="tooltip">
		{text}
	</span>
{/if}
