<script lang="ts">
	import type { IconProps } from '../types/index.js';
	import { getAssets } from '$lib/state/assets.svelte.js';
	import { iconifyAvailable, IconifyComponent } from '$lib/store/index.js';

	let {
		is = 'i',
		dark,
		light,
		disabled,
		start,
		end,
		color,
		icon,
		size = 'md',
		sizeXs,
		sizeSm,
		sizeMd,
		sizeLg,
		sizeXl,
		sizeXxl,
		...rest
	}: IconProps = $props();

	const assets = getAssets();

	// state
	let svgNode: HTMLElement | null = $state(null);
	let Component = $state();

	$effect(async () => {
		if (typeof icon === 'string' && icon.endsWith('.svg') && svgNode) {
			try {
				const response = await fetch(icon.replace('svg:', ''));
				const svgText = await response.text();
				const parser = new DOMParser();
				const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
				const svgElement = svgDoc.querySelector('svg');

				if (svgElement) {
					svgNode.innerHTML = '';
					svgNode.appendChild(svgElement);
				}
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (error) {
				/* empty */
			}
		}
	});

	$effect(() => {
		if (iconifyAvailable && IconifyComponent) Component = IconifyComponent;
	});
</script>

<svelte:element
	this={is}
	bind:this={svgNode}
	{...rest}
	class={[
		'myt-icon',
		light && 'light',
		dark && 'dark',
		start && 'myt-icon--start',
		end && 'myt-icon--end',
		disabled && 'myt-icon--disabled',
		size && `myt-icon--size-${size}`,
		sizeXs && `xs:myt-icon--size-${sizeXs}`,
		sizeSm && `sm:myt-icon--size-${sizeSm}`,
		sizeMd && `md:myt-icon--size-${sizeMd}`,
		sizeLg && `lg:myt-icon--size-${sizeLg}`,
		sizeXl && `xl:myt-icon--size-${sizeXl}`,
		sizeXxl && `xxl:myt-icon--size-${sizeXxl}`,
		icon.startsWith('font:') || icon.startsWith('fa:')
			? icon.replace('font:', '').replace('fa:', '')
			: ''
	]}
	style:--color={assets.color(color)}
>
	{#if iconifyAvailable && IconifyComponent && !(icon.startsWith('font:') || icon.startsWith('fa:'))}
		<Component {icon} />
	{/if}
</svelte:element>
