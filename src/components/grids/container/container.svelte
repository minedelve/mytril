<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: 'div' | 'section' | 'header' = 'div';
</script>

<svelte:element this={tag} class={className('myt-container', _class)} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
