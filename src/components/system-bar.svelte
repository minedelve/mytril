<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { SystemBarProps } from '../types/index.js';

	let {
		is = 'div',
		light,
		dark,
		window,
		fixed,
		absolute,
		rounded,
		background,
		color,
		children,
		...rest
	}: SystemBarProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-system-bar',
		light && 'light',
		dark && 'dark',
		window && 'myt-system-bar--window',
		fixed && 'myt-system-bar--fixed',
		absolute && 'myt-system-bar--absolute',
		rounded && assets.shape(rounded),
		rest.class
	]}
	style:--background={assets.color(background)}
	style:--color={assets.color(color)}
>
	{@render children?.()}
</svelte:element>
