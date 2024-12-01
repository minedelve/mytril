<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: string = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;

	$: styled = formatStyleProperties({
		background: color,
		color: colorText,
		rounded: rounded
	});
</script>

<svelte:element
	this={tag}
	class={className('myt-expansion-panels', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
