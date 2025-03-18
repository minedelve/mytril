<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { AppBarProps } from '$lib/types/index.js';

	let {
		children,
		is = 'header',
		light,
		dark,
		variant,
		rounded,
		background,
		color,
		density = 'default',
		orientation = 'horizontal',
		classContent,
		location,
		...rest
	}: AppBarProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	role="toolbar"
	class={[
		'myt-app-bar',
		light && 'light',
		dark && 'dark',
		rounded && assets.shape(rounded),
		variant && `myt-app-bar--${variant}`,
		density && `myt-app-bar--${density}`,
		orientation && `myt-app-bar--${orientation}`,
		location && `myt-app-bar--${location}`,
		rest.class
	]}
	style:--background-color={assets.color(background)}
	style:--color={assets.color(color)}
>
	<div class={['myt-app-bar--wrapper', classContent]}>
		{@render children?.()}
	</div>
</svelte:element>
