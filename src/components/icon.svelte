<script lang="ts">
	import type { IconProps } from '../types/index.js';
	import { getAssets } from '$lib/state/assets.svelte.js';

	let {
		children,
		is = 'i',
		alt = 'icon', //only for img tag
		dark,
		light,
		disabled,
		color,
		icon,
		size,
		sizeXs,
		sizeSm,
		sizeMd,
		sizeLg,
		sizeXl,
		sizeXxl,
		...rest
	}: IconProps = $props();

	const assets = getAssets();
	let isImage = $state(false);

	$effect(() => {
		if (icon && icon.includes('/')) {
			isImage = true;
		} else {
			isImage = false;
		}
		console.log('string', icon, children);
	});
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-icon',
		light && 'light',
		dark && 'dark',
		disabled && 'myt-icon--disabled',
		size && `myt-icon--size-${size}`,
		sizeXs && `xs:myt-icon--size-${sizeXs}`,
		sizeSm && `sm:myt-icon--size-${sizeSm}`,
		sizeMd && `md:myt-icon--size-${sizeMd}`,
		sizeLg && `lg:myt-icon--size-${sizeLg}`,
		sizeXl && `xl:myt-icon--size-${sizeXl}`,
		sizeXxl && `2xl:myt-icon--size-${sizeXxl}`,
		!isImage && icon
	]}
	style:--color={assets.color(color)}
>
	{#if children}
		{@render children?.()}
	{:else if isImage}
		<img src={icon} {alt} />
	{/if}
</svelte:element>
