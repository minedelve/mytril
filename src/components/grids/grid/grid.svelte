<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: 'div' | 'section' | 'header' = 'div';
	export let fluid: boolean = false;
	export let fillHeight: boolean = false;
</script>

<svelte:element
	this={tag}
	class={className('myt-grid', _class)}
	class:myt-grid--fluid={fluid}
	class:fill-height={fillHeight}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
