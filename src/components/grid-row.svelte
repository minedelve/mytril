<script lang="ts">
	import type { GridRowProps } from '$lib/types/index.js';
	let { children, is = 'div', noGutters, dense, ...rest }: GridRowProps = $props();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-grid-row',
		noGutters && 'myt-grid-row--no-gutters',
		dense && 'myt-grid-row--dense',
		rest.class
	]}
>
	{@render children?.()}
</svelte:element>
