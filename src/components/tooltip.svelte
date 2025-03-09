<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import { getPositions } from '$lib/state/positions.svelte.js';
	import type { TooltipProps } from '$lib/types/index.js';

	let {
		children,
		tooltip,
		label,
		dark,
		light,
		rounded,
		color,
		background,
		position = 'bottom',
		...rest
	}: TooltipProps = $props();

	const positionAxis = getPositions();
	const assets = getAssets();

	let ref: HTMLElement | null = $state(null);
	let refTooltip: HTMLElement | null = $state(null);
	let open = $state(false);
	let axis = $state({ x: 0, y: 0 });
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let scrollX = $state(0);
	let scrollY = $state(0);

	axis = positionAxis?.values;

	$effect(() => {
		if (
			open &&
			ref &&
			refTooltip &&
			(scrollX > 0 || scrollY > 0 || innerHeight > 0 || innerWidth > 0)
		) {
			positionAxis.update(ref, refTooltip, position, true);
		}
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollX bind:scrollY />

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span bind:this={ref} onmouseenter={() => (open = true)} onmouseleave={() => (open = false)}>
	{@render children?.()}
</span>

{#if open}
	<div
		bind:this={refTooltip}
		{...rest}
		class={[
			'myt-tooltip-content',
			light && 'light',
			dark && 'dark',
			rounded && assets.shape(rounded),
			rest.class
		]}
		role="tooltip"
		aria-label={label}
		style={`transform: translate(${axis.x}px, ${axis.y}px);`}
		style:--bg={assets.color(background)}
		style:--c={assets.color(color)}
	>
		{#if tooltip}
			{@render tooltip?.()}
		{:else}
			{label}
		{/if}
	</div>
{/if}
