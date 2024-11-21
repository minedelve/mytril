<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	//components
	import Toolbar from '$lib/components/toolbar/toolbar/toolbar.svelte';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: 'div' | 'header' | 'nav' = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let floating: boolean = false;
	export let outlined: boolean = false;
	export let text: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;
	export let height: string | number | undefined = undefined;
	export let absolute: boolean = false;
	export let dense: boolean = false;
	export let location: 'top' | 'bottom' | undefined = undefined;
</script>

<Toolbar
	{tag}
	class={className(
		'myt-app-bar',
		_class,
		location === 'bottom' ? 'myt-app-bar--bottom' : 'myt-app-bar--top'
	)}
	{dense}
	{absolute}
	{height}
	{colorText}
	{color}
	{rounded}
	{text}
	{floating}
	{outlined}
	{light}
	{dark}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</Toolbar>
