<script lang="ts">
	import { innerHeight, innerWidth, scrollY } from '$lib/composables/display.js';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';
	import { uniqueID } from '$lib/utils/uid.js';

	// Props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let text: string | undefined = undefined;
	export let bottom: boolean = false;
	export let left: boolean = false;
	export let top: boolean = false;
	export let right: boolean = false;
	export let open: boolean = false;
	export let dense: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;

	let ref: HTMLElement | null = null;
	let refTooltip: HTMLElement | null = null;

	let openTooltip = open;
	$: position = { x: 0, y: 0 };
	$: id = uniqueID();

	$: styled = formatStyleProperties({
		background: color,
		color: colorText,
		rounded: rounded
	});

	function handleMouseEnter() {
		openTooltip = true;
	}

	function handleMouseLeave() {
		openTooltip = false;
	}

	$: {
		if (ref && refTooltip && openTooltip && $scrollY !== undefined) {
			let display = top ? 'top' : left ? 'left' : right ? 'right' : bottom ? 'bottom' : 'bottom';
			let axis = { x: 0, y: 0 };

			// element
			const x = ref.getBoundingClientRect().x;
			const y = ref.getBoundingClientRect().y;
			const h = ref.getBoundingClientRect().height;
			const w = ref.getBoundingClientRect().width;

			// tooltip
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

			position = axis;
		}
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
	bind:this={ref}
	aria-describedby={id}
	class={className('myt-tooltip', _class)}
	class:light
	class:dark
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	{...$$restProps}
>
	<slot />
</span>

{#if openTooltip && (text || $$slots.tooltip)}
	<div
		{id}
		bind:this={refTooltip}
		class="myt-tooltip-content"
		class:myt-tooltip-content--dense={dense}
		aria-label={text}
		role="tooltip"
		style={styleName(styled, _style, `transform: translate(${position.x}px, ${position.y}px);`)}
	>
		{#if $$slots.tooltip}
			<!-- slot: tooltip -->
			<slot name="tooltip" />
			<!-- /slot: tooltip -->
		{:else if text}
			{text}
		{/if}
	</div>
{/if}
