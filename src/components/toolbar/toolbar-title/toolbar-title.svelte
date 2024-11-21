<script lang="ts">
	import { className } from '$lib/utils/dom.js';
	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' = 'div';
</script>

<svelte:element this={tag} class={className('myt-toolbar-title', _class)} {...$$restProps}>
	<div class="myt-toolbar-title--placeholder">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>
</svelte:element>
