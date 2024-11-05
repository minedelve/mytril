<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: string = 'div';

	export let cols: string | number | undefined = undefined;
	export let xs: string | number | undefined = undefined;
	export let sm: string | number | undefined = undefined;
	export let md: string | number | undefined = undefined;
	export let lg: string | number | undefined = undefined;
	export let xl: string | number | undefined = undefined;
	export let xxl: string | number | undefined = undefined;

	export let offset: string | number | undefined = undefined;
	export let offsetXs: string | number | undefined = undefined;
	export let offsetSm: string | number | undefined = undefined;
	export let offsetMd: string | number | undefined = undefined;
	export let offsetLg: string | number | undefined = undefined;
	export let offsetXl: string | number | undefined = undefined;
	export let offsetXxl: string | number | undefined = undefined;

	export let order: string | number | undefined = undefined;
	export let orderXs: string | number | undefined = undefined;
	export let orderSm: string | number | undefined = undefined;
	export let orderMd: string | number | undefined = undefined;
	export let orderLg: string | number | undefined = undefined;
	export let orderXl: string | number | undefined = undefined;
	export let orderXxl: string | number | undefined = undefined;

	$: propertiesCSS = '';
</script>

{propertiesCSS}

<svelte:element this={tag} class={className('myt-col', _class)} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
