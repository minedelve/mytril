<script lang="ts">
	import { innerHeight, innerWidth, scrollY } from '$lib/composables/display.js';

	export let text: string | undefined = undefined;
	export let bottom: boolean = false;
	export let left: boolean = false;
	export let top: boolean = false;
	export let right: boolean = false;

	let ref: HTMLElement | null = null;
	let refTooltip: HTMLElement | null = null;

	let openTooltip = false;
	$: position = { x: 0, y: 0 };

	function handleMouseEnter() {
		openTooltip = true;
	}

	function handleMouseLeave() {
		openTooltip = false;
	}

	$: {
		if (ref && refTooltip && $scrollY) {
			let display = top ? 'top' : left ? 'left' : right ? 'right' : bottom ? 'bottom' : 'bottom';
			let axis = { x: 0, y: 0 };

			// element
			const x = ref.getBoundingClientRect().x;
			const y = ref.getBoundingClientRect().y;
			const h = ref.getBoundingClientRect().height;
			const w = ref.getBoundingClientRect().width;

			// tooltip
			// const ty = refTooltip.getBoundingClientRect().y;
			const th = refTooltip.getBoundingClientRect().height;
			const tw = refTooltip.getBoundingClientRect().width;

			if (right) {
				display = x + w + tw + 10 >= $innerWidth ? 'left' : 'right';
			} else if (top) {
				display = y - (h + th) + 10 <= 0 ? 'bottom' : 'top';
			} else if (left) {
				display = x - (tw + 10) <= 0 ? 'right' : 'left';
			} else {
				display = y + (h + th) + 10 >= $innerHeight ? 'top' : 'bottom';
			}

			const diffWidth = w - tw < 0 ? (tw - w) / 2 : (w - tw) / 2;
			const diffHeight = h - th < 0 ? (th - h) / 2 : (h - th) / 2;

			if (display === 'top') {
				if (w - tw < 0) {
					axis = { x: x - diffWidth, y: y - th };
				} else {
					axis = { x: x + diffWidth, y: y - th };
				}
			} else if (display === 'left') {
				if (h - th < 0) {
					axis = { x: x - tw, y: y - diffHeight };
				} else {
					axis = { x: x - tw, y: y + diffHeight };
				}
			} else if (display === 'right') {
				if (h - th < 0) {
					axis = { x: x + w, y: y - diffHeight };
				} else {
					axis = { x: x + w, y: y + diffHeight };
				}
			} else {
				if (w - tw < 0) {
					axis = { x: x - diffWidth, y: y + h };
				} else {
					axis = { x: x + diffWidth, y: y + h };
				}
			}
			if (axis.x < 0) {
				axis = { x: x, y: axis.y };
			}
			if (x + diffWidth > $innerWidth) {
				axis = { x: x + w - tw, y: axis.y };
			}

			console.log('scroll', $scrollY);

			position = axis;
		}

		// if (ref && refTooltip) {
		// 	const rect = ref.getBoundingClientRect();
		// 	const tooltipRect = refTooltip.getBoundingClientRect();
		// 	const { x, y, width: w, height: h } = rect;
		// 	const { width: tw, height: th } = tooltipRect;

		// 	let display = bottom ? 'bottom' : top ? 'top' : left ? 'left' : right ? 'right' : 'bottom';

		// 	if (right && x + w + tw + 10 >= $innerWidth) display = 'left';
		// 	else if (top && y - th - 10 <= 0) display = 'bottom';
		// 	else if (left && x - tw - 10 <= 0) display = 'right';
		// 	else if (bottom && y + h + th + 10 >= $innerHeight) display = 'top';

		// 	const diffWidth = (w - tw) / 2;
		// 	const diffHeight = (h - th) / 2;

		// 	switch (display) {
		// 		case 'top':
		// 			position = { x: x + diffWidth, y: y - th };
		// 			break;
		// 		case 'left':
		// 			position = { x: x - tw, y: y + diffHeight };
		// 			break;
		// 		case 'right':
		// 			position = { x: x + w, y: y + diffHeight };
		// 			break;
		// 		case 'bottom':
		// 			position = { x: x + diffWidth, y: y + h };
		// 			break;
		// 	}

		// 	position.x = Math.max(0, Math.min(position.x, $innerWidth - tw));
		// 	position.y = Math.max(0, Math.min(position.y, $innerHeight - th));
		// }
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span bind:this={ref} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
	<slot />
</span>

<!-- style={`top: ${position.y}px; left: ${position.x}px;`} -->

{#if openTooltip}
	<div
		bind:this={refTooltip}
		class="tooltip-example"
		style={`transform: translate(${position.x}px, ${position.y}px);`}
	>
		{#if text}
			{text}
		{:else}
			<slot name="tooltip-area" />
		{/if}
	</div>
{/if}
