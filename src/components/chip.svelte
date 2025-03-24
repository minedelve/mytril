<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ChipProps } from '../types/index.js';

	let {
		children,
		is = 'span',
		light,
		dark,
		href,
		variant,
		active,
		density = 'default',
		disabled,
		rounded,
		color,
		background,
		square,
		tile,
		size = 'md',
		sizeXs,
		sizeSm,
		sizeMd,
		sizeLg,
		sizeXl,
		sizeXxl,
		...rest
	}: ChipProps = $props();

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
		'myt-chip',
		light && 'light',
		dark && 'dark',
		active && 'myt-chip--active',
		tile && 'myt-chip--tile',
		square && 'myt-chip--square',
		variant && `myt-chip--variant-${variant}`,
		rounded && assets.shape(rounded),
		density && `myt-chip--${density}`,
		disabled && 'myt-chip--disabled',
		size && `myt-chip--size-${size}`,
		sizeXs && `xs:myt-chip--size-${sizeXs}`,
		sizeSm && `sm:myt-chip--size-${sizeSm}`,
		sizeMd && `md:myt-chip--size-${sizeMd}`,
		sizeLg && `lg:myt-chip--size-${sizeLg}`,
		sizeXl && `xl:myt-chip--size-${sizeXl}`,
		sizeXxl && `2xl:myt-chip--size-${sizeXxl}`,
		rest.class
	]}
	{disabled}
	style:--color={assets.color(color)}
	style:--background-color={assets.color(background)}
>
	{@render children?.()}
</svelte:element>
