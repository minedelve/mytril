<script lang="ts">
	import { getColors } from '$lib/composables/colors.js';
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: 'a' | 'button' | 'div' = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let active: boolean = false;
	export let outline: boolean = false;
	export let text: boolean = false;
	export let disabled: boolean = false;
	export let color: string | undefined = undefined;

	$: {
		if ($$props.href) tag = 'a';
	}

	const colors = getColors(color);
	$: {
		console.log('resultat', $colors);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={tag}
	class={className('myt-card', _class)}
	class:myt-card--active={active}
	class:myt-card--outline={outline}
	class:myt-card--text={text}
	class:myt-card--disabled={disabled}
	class:light
	class:dark
	disabled={$$props.disabled}
	on:change
	on:click
	{...$$restProps}
	{...$$restProps}
	style={`--background-color: ${$colors};`}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
