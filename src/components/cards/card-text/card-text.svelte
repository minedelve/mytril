<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';
	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' = 'div';
	export let opacity: number | string | undefined = undefined;

	$: styled = formatStyleProperties({
		opacity: opacity
	});
</script>

<svelte:element
	this={tag}
	class={className('myt-card-text', _class)}
	style={styleName(styled, _style)}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
