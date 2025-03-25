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
		density = 'default',
		disabled,
		rounded,
		color,
		background,
		onclick,
		clickable,
		...rest
	}: CardProps = $props();

	const assets = getAssets();
	let isClickable = href || !!onclick || clickable;

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
		variant && `myt-card--variant-${variant}`,
		density && `myt-card--density-${density}`,
		disabled && 'myt-card--disabled',
		isClickable && 'myt-card--clickable',
		rounded && assets.shape(rounded),
		rest.class
	]}
	{disabled}
	{onclick}
	style:--background-color={assets.color(background)}
	style:--color={assets.color(color)}
>
	{@render children?.()}
</svelte:element>
