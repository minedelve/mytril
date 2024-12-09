<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'div' | 'header' | 'nav' = 'header';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let grow: boolean = false;
	export let shift: boolean = false;
	export let height: string | number | undefined = '56px';
	export let absolute: boolean = false;
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
	class={className('myt-bottom-navigation', _class)}
	style={styleName(styled, _style)}
	class:myt-bottom-navigation--shift={shift}
	class:myt-bottom-navigation--grow={grow}
	class:absolute
	class:light
	class:dark
	{...$$restProps}
>
	<div class="myt-bottom-navigation--content" style={`height: ${height};`}>
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>
</svelte:element>
