<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { BottomNavigationProps } from '$lib/types/index.js';

	let {
		children,
		is = 'header',
		dark,
		light,
		grow,
		shift,
		height = '3.5rem',
		absolute,
		rounded,
		active,
		color,
		background,
		...rest
	}: BottomNavigationProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-bottom-navigation',
		dark && 'dark',
		light && 'light',
		grow && 'myt-bottom-navigation--grow',
		shift && 'myt-bottom-navigation--shift',
		absolute && 'myt-bottom-navigation--absolute',
		active && 'myt-bottom-navigation--hidden',
		rounded && assets.shape(rounded),
		rest.class
	]}
	style:--bg={assets.color(background)}
	style:--c={assets.color(color)}
>
	<div class="myt-bottom-navigation--content" style:height>
		{@render children?.()}
	</div>
</svelte:element>
