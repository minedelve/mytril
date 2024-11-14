<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'a' | 'button' | 'div' = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let active: boolean = false;
	export let outlined: boolean = false;
	export let text: boolean = false;
	export let disabled: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;

	$: styled = formatStyleProperties({
		background: !outlined && !text ? color : undefined,
		color: outlined || text ? color : colorText,
		rounded: rounded
	});

	$: {
		if ($$props.href) tag = 'a';
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={tag}
	class={className('myt-card', _class)}
	style={styleName(styled, _style)}
	class:myt-card--active={active}
	class:myt-card--outline={outlined}
	class:myt-card--text={text}
	class:myt-card--disabled={disabled}
	class:light
	class:dark
	disabled={$$props.disabled}
	on:change
	on:click
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
