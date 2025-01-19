<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ChipProps } from '../types/index.js';

	// components
	import Icon from './icon.svelte';

	//  assets
	import closeSvg from '../icons/close.svg';

	let {
		children,
		append,
		prepend,
		close,
		is = 'span',
		light,
		dark,
		href,
		variant,
		active,
		density = 'default',
		disabled,
		rounded,
		closable,
		link,
		color,
		background,
		value,
		size,
		sizeXs,
		sizeSm,
		sizeMd,
		sizeLg,
		sizeXl,
		sizeXxl,
		ariaLabel,
		...rest
	}: ChipProps = $props();

	const assets = getAssets();

	$effect(() => {
		if (href) is = 'a';
		if (href) link = true;
	});
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-chip',
		light && 'light',
		dark && 'dark',
		link && 'myt-chip--link',
		active && 'myt-chip--active',
		variant && `myt-chip--${variant}`,
		rounded && assets.shape(rounded),
		density && `myt-chip--density-${density}`,
		disabled && 'myt-chip--disabled',
		closable && 'myt-chip--closable',
		size && `myt-chip--size-${size}`,
		sizeXs && `xs:myt-chip--size-${sizeXs}`,
		sizeSm && `sm:myt-chip--size-${sizeSm}`,
		sizeMd && `md:myt-chip--size-${sizeMd}`,
		sizeLg && `lg:myt-chip--size-${sizeLg}`,
		sizeXl && `xl:myt-chip--size-${sizeXl}`,
		sizeXxl && `xxl:myt-chip--size-${sizeXxl}`,
		rest.class
	]}
	{disabled}
	aria-label={ariaLabel}
	{value}
	style:--color={assets.color(color)}
	style:--background={assets.color(background)}
>
	{#if prepend}
		<div class="myt-chip--prepend">
			{@render prepend?.()}
		</div>
	{/if}
	<span class="myt-chip--content">
		{@render children?.()}
	</span>
	{#if append}
		<div class="myt-chip--append">
			{@render append?.()}
		</div>
	{/if}

	{#if closable}
		<button class="myt-chip--close" type="button" aria-label="close">
			{#if close}
				{@render close?.()}
			{:else}
				<Icon icon={`svg:${closeSvg}`} />
			{/if}
		</button>
	{/if}
</svelte:element>
