<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import { getPositions } from '$lib/state/positions.svelte.js';
	import type { MenuProps } from '$lib/types/index.js';

	let {
		children,
		activator,
		dark,
		light,
		rounded,
		position,
		closeOnClick,
		openOnHover,
		color,
		background,
		...rest
	}: MenuProps = $props();

	const positionAxis = getPositions();
	const assets = getAssets();

	let ref: HTMLElement | null = $state(null);
	let refActivator: HTMLElement | PointerEvent | null = $state(null);
	let open = $state(false);
	let axis = $state({ x: 0, y: 0 });
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let scrollX = $state(0);
	let scrollY = $state(0);
	let timeoutId: ReturnType<typeof setTimeout> | null = $state(null);

	axis = positionAxis?.values;

	let model = {
		get open() {
			return open;
		},
		close: () => (open = false),
		toggle: (element: HTMLElement | PointerEvent) => handleToggle(element)
	};

	const handleToggle = (element: HTMLElement | PointerEvent) => {
		refActivator = element;
		open = !open;
	};

	const handleClose = () => {
		if (closeOnClick && open) open = false;
	};

	const handleMouseEvent = (state: string) => {
		if (openOnHover && state === 'over') {
			if (timeoutId) {
				clearTimeout(timeoutId);
				timeoutId = null;
			}
			open = true;
		}

		if (openOnHover && state === 'leave') {
			timeoutId = setTimeout(() => {
				open = false;
				timeoutId = null;
			}, 100);
		}
	};

	$effect(() => {
		if (
			open &&
			ref &&
			refActivator &&
			(scrollX > 0 || scrollY > 0 || innerHeight > 0 || innerWidth > 0)
		) {
			positionAxis.update(refActivator, ref, position);
		}
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollX bind:scrollY />

{@render activator?.(model, handleMouseEvent)}

{#if open}
	<!-- svelte-ignore a11y_interactive_supports_focus -->
	<!-- svelte-ignore a11y_mouse_events_have_key_events -->
	<div
		bind:this={ref}
		{...rest}
		role="menu"
		class={[
			'myt-menu-content',
			light && 'light',
			dark && 'dark',
			rounded && assets.shape(rounded),
			rest.class
		]}
		style={`transform: translate(${axis.x}px, ${axis.y}px);`}
		onmouseover={() => handleMouseEvent('over')}
		onmouseleave={() => handleMouseEvent('leave')}
		onclick={(e) => {
			e.stopPropagation();
			handleClose();
		}}
		style:--bg={assets.color(background)}
		style:--c={assets.color(color)}
	>
		{@render children?.()}
	</div>
{/if}
