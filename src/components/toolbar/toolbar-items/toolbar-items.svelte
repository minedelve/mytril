<script lang="ts">
	import { className } from '$lib/utils/dom.js';
	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: 'nav' | 'div' = 'div';
</script>

<svelte:element this={tag} class={className('myt-toolbar-items', _class)} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
