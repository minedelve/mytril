<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'div' | 'hr' = 'hr';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let inset: boolean = false;
	export let thickness: string | number | undefined = undefined;
	export let vertical: boolean = false;
	export let opacity: string | number | undefined = undefined;
	export let color: string | undefined = undefined;

	$: styled = formatStyleProperties({
		borderColor: color,
		borderTopWidth: !vertical ? thickness : undefined,
		borderRightWidth: vertical ? thickness : undefined,
		opacity: opacity
	});
</script>

<svelte:element
	this={tag}
	class={className('myt-divider', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-divider--inset={inset}
	class:myt-divider--vertical={vertical}
	aria-orientation={vertical ? 'vertical' : 'horizontal'}
	role="separator"
	{...$$restProps}
/>
