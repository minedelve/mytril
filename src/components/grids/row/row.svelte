<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: string = 'div';
	export let noGutters: boolean = false;
	export let dense: boolean = false;
</script>

<svelte:element
	this={tag}
	class={className('myt-row', _class)}
	class:row-no-gutters={noGutters}
	class:row-dense={dense}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
