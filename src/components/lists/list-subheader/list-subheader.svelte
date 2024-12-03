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
	export let color: string | undefined = undefined;
	export let inset: boolean = false;
	export let sticky: boolean = false;

	$: styled = formatStyleProperties({
		color: color
	});
</script>

<svelte:element
	this={tag}
	class={className('myt-list-subheader', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-list-subheader--inset={inset}
	class:myt-list-subheader--sticky={sticky}
	{...$$restProps}
>
	<div class="myt-list-subheader--text">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>
</svelte:element>
