<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let icon: string;
	export let size: string = '1em';

	const isIconifyAvailable = writable(false);
	let IconifyComponent: any = null;

	onMount(() => {
		try {
			// Teste si Iconify est disponible via globalThis
			const Iconify = globalThis.require ? globalThis.require('@iconify/svelte') : null;

			if (Iconify) {
				IconifyComponent = Iconify.default;
				isIconifyAvailable.set(true);
			} else {
				throw new Error('Iconify non disponible');
			}
		} catch (error) {
			console.warn(
				'[Mytril Icon Component] @iconify/svelte non trouvé. Installez-le avec "npm install @iconify/svelte" si vous souhaitez utiliser les icônes.'
			);
			isIconifyAvailable.set(false);
		}
	});
</script>

{#if $isIconifyAvailable && IconifyComponent}
	<svelte:component this={IconifyComponent} {icon} style={`font-size: ${size};`} />
{:else}
	<span style={`font-size: ${size};`}>⚠️</span> <!-- Fallback si Iconify n'est pas dispo -->
{/if}
