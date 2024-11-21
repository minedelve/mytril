<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	//components
	import ToolbarTitle from '$lib/components/toolbar/toolbar-title/toolbar-title.svelte';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' = 'div';
</script>

<ToolbarTitle {tag} class={className('myt-app-bar-title', _class)} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</ToolbarTitle>
