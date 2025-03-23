<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { BtnProps } from '$lib/types/index.js';

	let {
		children,
		prepend,
		append,
		is = 'button',
		href,
		dark,
		light,
		block,
		active,
		square,
		circle,
		variant, // text | outline | dash | link
		error,
		info,
		success,
		warning,
		icon,
		wide,
		density = 'default',
		disabled,
		rounded,
		color,
		background,
		size = 'md',
		sizeXs,
		sizeSm,
		sizeMd,
		sizeLg,
		sizeXl,
		sizeXxl,
		ariaLabel,
		type, // radio | checkbox | button
		...rest
	}: BtnProps = $props();

	const assets = getAssets();

	$effect(() => {
		if (href) is = 'a';
		if (type === 'radio') is = 'input';
		if (type === 'checkbox') is = 'input';
	});
</script>

<svelte:element
	this={is}
	{...rest}
	{href}
	class={[
		'myt-btn',
		light && 'light',
		dark && 'dark',
		block && 'myt-btn--block',
		active && 'myt-btn--active',
		square && 'myt-btn--square',
		circle && 'myt-btn--circle',
		error && 'myt-btn--error',
		info && 'myt-btn--info',
		success && 'myt-btn--success',
		warning && 'myt-btn--warning',
		icon && 'myt-btn--icon',
		wide && 'myt-btn--wide',
		disabled && 'myt-btn--disabled',
		variant && `myt-btn--${variant}`,
		density && `myt-btn--${density}`,
		rounded && assets.shape(rounded),
		size && `myt-btn--size-${size}`,
		sizeXs && `xs:myt-btn--size-${sizeXs}`,
		sizeSm && `sm:myt-btn--size-${sizeSm}`,
		sizeMd && `md:myt-btn--size-${sizeMd}`,
		sizeLg && `lg:myt-btn--size-${sizeLg}`,
		sizeXl && `xl:myt-btn--size-${sizeXl}`,
		sizeXxl && `2xl:myt-btn--size-${sizeXxl}`,
		rest.class
	]}
	{disabled}
	aria-label={ariaLabel}
	{type}
	style:--bg={assets.color(background)}
	style:--c={assets.color(color)}
>
	{#if prepend}
		<span class="myt-btn--prepend">
			{@render prepend?.()}
		</span>
	{/if}

	<span class="myt-btn--content">
		{@render children?.()}
	</span>

	{#if append}
		<span class="myt-btn--append">
			{@render append?.()}
		</span>
	{/if}
</svelte:element>
