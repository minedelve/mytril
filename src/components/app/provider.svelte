<script lang="ts">
	import { setContext, getAllContexts } from 'svelte';

	let displayTooltip:
		| { id: string; content: string | undefined; screen: { x: number; y: number } }
		| undefined = undefined;

	const contexts = getAllContexts();

	// Fonction pour gérer l'affichage
	const showTooltip = (display?: {
		id: string;
		content: string | undefined;
		screen: { x: number; y: number };
	}) => {
		console.log('showTooltip', display);
		displayTooltip = display;
	};

	setContext('showTooltip', showTooltip);

	$: {
		console.log('contexts', contexts);
	}
</script>

{#if displayTooltip && displayTooltip.content}
	<div class="tooltip-example">
		{#if $$slots['tooltip-area']}
			<slot name="tooltip-area"></slot>
		{:else}
			{displayTooltip.content}
		{/if}
	</div>
{/if}

<slot />
