<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { DividerProps } from '../types/index.js';

	let {
		is = 'hr',
		light,
		dark,
		inset,
		thickness,
		vertical,
		opacity,
		color,
		...rest
	}: DividerProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-divider',
		light && 'light',
		dark && 'dark',
		inset && 'myt-divider--inset',
		vertical && 'myt-divider--vertical',
		rest.class
	]}
	aria-orientation={vertical ? 'vertical' : 'horizontal'}
	role="separator"
	style:--border-color={assets.color(color)}
	style:--border-top-width={!vertical ? thickness : undefined}
	style:--border-right-width={vertical ? thickness : undefined}
	style:--opacity={opacity}
/>
