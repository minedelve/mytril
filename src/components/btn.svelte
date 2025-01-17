<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { BtnProps } from '../types/index.js';

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
		variant,
		error,
		info,
		success,
		warning,
		icon,
		wide,
		density,
		disabled,
		rounded,
		link,
		color,
		background,
		size,
		sizeXs,
		sizeSm,
		sizeMd,
		sizeLg,
		sizeXl,
		sizeXxl,
		ariaLabel,
		...rest
	}: BtnProps = $props();

	const assets = getAssets();

	$effect(() => {
		if (href) is = 'a';
	});
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-btn',
		light && 'light',
		dark && 'dark',
		block && 'myt-btn--block',
		active && 'myt-btn--active',
		square && 'myt-btn--square',
		circle && 'myt-btn--circle',
		variant && `myt-btn--${variant}`,
		error && 'myt-btn--error',
		info && 'myt-btn--info',
		success && 'myt-btn--success',
		warning && 'myt-btn--warning',
		icon && 'myt-btn--icon',
		wide && 'myt-btn--wide',
		disabled && 'myt-btn--disabled',
		link && 'myt-btn--link',
		density && `myt-btn--density-${density}`,
		rounded && assets.shape(size),
		sizeXs && `xs:myt-btn--size-${sizeXs}`,
		sizeSm && `sm:myt-btn--size-${sizeSm}`,
		sizeMd && `md:myt-btn--size-${sizeMd}`,
		sizeLg && `lg:myt-btn--size-${sizeLg}`,
		sizeXl && `xl:myt-btn--size-${sizeXl}`,
		sizeXxl && `xxl:myt-btn--size-${sizeXxl}`,
		rest.class
	]}
	{disabled}
	aria-label={ariaLabel}
	type="button"
	style:--background={assets.color(background)}
	style:--color={assets.color(color)}
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
