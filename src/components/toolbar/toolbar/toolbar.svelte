<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let contentClass: string | undefined = undefined;
	export let tag: 'div' | 'header' | 'nav' = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let floating: boolean = false;
	export let outlined: boolean = false;
	export let text: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;
	export let height: string | number | undefined = '64px';
	export let absolute: boolean = false;
	export let dense: boolean = false;

	$: styled = formatStyleProperties({
		background: !outlined && !text ? color : undefined,
		color: outlined || text ? color : colorText,
		rounded: rounded
	});
</script>

<svelte:element
	this={tag}
	class={className('myt-toolbar', _class)}
	style={styleName(styled, _style)}
	class:myt-toolbar--outline={outlined}
	class:myt-toolbar--text={text}
	class:myt-toolbar--floating={floating}
	class:absolute
	class:light
	class:dark
	{...$$restProps}
>
	<div
		class={className('myt-toolbar--content', contentClass)}
		style={`height: ${dense ? '48px' : height};`}
	>
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>
</svelte:element>
