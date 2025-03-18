<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ToolbarProps } from '$lib/types/index.js';

	let {
		children,
		is = 'div',
		light,
		dark,
		variant,
		rounded,
		background,
		color,
		density = 'default',
		orientation = 'horizontal',
		...rest
	}: ToolbarProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	role="toolbar"
	class={[
		'myt-toolbar',
		light && 'light',
		dark && 'dark',
		rounded && assets.shape(rounded),
		variant && `myt-toolbar--${variant}`,
		density && `myt-toolbar--${density}`,
		orientation && `myt-toolbar--${orientation}`,
		rest.class
	]}
	style:--background-color={assets.color(background)}
	style:--color={assets.color(color)}
>
	{@render children?.()}
</svelte:element>
