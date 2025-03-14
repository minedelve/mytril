<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import { getPositions } from '$lib/state/positions.svelte.js';
	import type { PositionElement, TooltipProps } from '$lib/types/index.js';
	import { onMount } from 'svelte';

	let {
		children,
		tooltip,
		open = $bindable(),
		label,
		dark,
		light,
		rounded,
		color,
		background,
		location = 'bottom',
		delayDuration = 850,
		density = 'default',
		variant,
		disabled,
		avoidCollisions = true,
		...rest
	}: TooltipProps = $props();

	const positionAxis = getPositions();
	const assets = getAssets();

	let ref: HTMLElement | null = $state(null);
	let refTooltip: HTMLElement | null = $state(null);
	let timer: ReturnType<typeof setTimeout> | null = $state(null);
	let axis: PositionElement = $state({ x: 0, y: 0, location: null });
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let scrollX = $state(0);
	let scrollY = $state(0);

	axis = positionAxis?.values;

	onMount(() => {
		if (ref && refTooltip && (scrollX > 0 || scrollY > 0 || innerHeight > 0 || innerWidth > 0)) {
			positionAxis.update(ref, refTooltip, location, true, 'tooltip', avoidCollisions);
		}
	});

	$effect(() => {
		if (
			open &&
			ref &&
			refTooltip &&
			(scrollX > 0 || scrollY > 0 || innerHeight > 0 || innerWidth > 0)
		) {
			positionAxis.update(ref, refTooltip, location, true, 'tooltip', avoidCollisions);
		}
	});

	const handleMouse = (state: string) => {
		if (disabled) return (open = false);
		if (state === 'enter') {
			timer = setTimeout(() => {
				open = true;
			}, delayDuration);
		} else if (state === 'leave') {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			open = false;
		}
	};
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollX bind:scrollY />

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
	bind:this={ref}
	onmouseenter={() => handleMouse('enter')}
	onmouseleave={() => handleMouse('leave')}
>
	{@render children?.()}
</span>

{#if open}
	<div
		bind:this={refTooltip}
		class={['myt-tooltip']}
		role="tooltip"
		aria-label={label}
		style={`transform: translate(${axis.x}px, ${axis.y}px);`}
	>
		<div
			class={[
				'myt-tooltip-content animate-in',
				light && 'light',
				dark && 'dark',
				rounded && assets.shape(rounded),
				axis?.location && `myt-tooltip-content--${axis?.location}`,
				variant && `myt-tooltip-content--${variant}`,
				density && `myt-tooltip-content--${density}`,
				rest.class
			]}
			style:--background-color={assets.color(background)}
			style:--color={assets.color(color)}
		>
			{#if tooltip}
				{@render tooltip?.()}
			{:else}
				{label}
			{/if}
		</div>
	</div>
{/if}
