<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { CardProps } from '$lib/types/index.js';

	let {
		children,
		is = 'div',
		href,
		dark,
		light,
		active,
		variant,
		disabled,
		rounded,
		color,
		background,
		...rest
	}: CardProps = $props();

	const assets = getAssets();

	$effect(() => {
		if (href) is = 'a';
	});
</script>

<svelte:element
	this={is}
	{...rest}
	{href}
	class={[
		'myt-card',
		light && 'light',
		dark && 'dark',
		active && 'myt-card--active',
		variant && `myt-card--${variant}`,
		disabled && 'myt-card--disabled',
		rounded && assets.shape(rounded),
		rest.class
	]}
	{disabled}
	style:--bg={assets.color(background)}
	style:--c={assets.color(color)}
>
	{@render children?.()}
</svelte:element>
