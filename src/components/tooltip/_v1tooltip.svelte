<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let text: string | undefined = undefined;

	$: styled = formatStyleProperties({
		borderColor: undefined
	});
</script>

<span
	class={className('myt-tooltip', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	data-title={text}
	aria-label={text}
	role="tooltip"
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- </slot: default -->
</span>
