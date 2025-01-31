<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ToolbarProps } from '$lib/types/index.js';

	let {
		children,
		is = 'div',
		light,
		dark,
		floating,
		variant,
		absolute,
		rounded,
		background,
		color,
		height = '4rem',
		dense,
		classContent,
		...rest
	}: ToolbarProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-toolbar',
		light && 'light',
		dark && 'dark',
		rounded && assets.shape(rounded),
		variant && `myt-toolbar--${variant}`,
		floating && `myt-toolbar--floating`,
		absolute && 'myt-toolbar--absolute',
		rest.class
	]}
	style:--bg={assets.color(background)}
	style:--c={assets.color(color)}
>
	<div class={['myt-toolbar--content', classContent]} style={`height: ${dense ? '3rem' : height};`}>
		{@render children?.()}
	</div>
</svelte:element>
