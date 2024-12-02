<script lang="ts">
	import Icon from '$lib/components/icon/icon.svelte';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let open: boolean = false;
	export let text: string | undefined = undefined;
	export let tag: string = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;

	import arrowUp from './icons/arrow-up.svg';
	import arrowDown from './icons/arrow-down.svg';

	$: styled = formatStyleProperties({
		background: color,
		color: colorText,
		rounded: rounded
	});
</script>

<svelte:element
	this={tag}
	class={className('myt-expansion-panel', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-expansion-panel--active={open}
	{...$$restProps}
>
	<button
		class="myt-expansion-panel--title"
		aria-expanded={open}
		type="button"
		on:click={() => (open = open ? false : true)}
	>
		{#if $$slots.title}
			<!-- slot: title -->
			<slot name="title" />
			<!-- /slot: title -->
		{:else}
			{text}
		{/if}

		<span class="myt-expansion-panel--icon">
			{#if open}
				<Icon icon={`svg:${arrowUp}`} />
			{:else}
				<Icon icon={`svg:${arrowDown}`} />
			{/if}
		</span>
	</button>
	<div class="myt-expansion-panel--text" style={styleName(open ? undefined : 'display: none;')}>
		<div class="myt-expansion-panel--text-wrapper">
			<!-- slot: default -->
			<slot />
			<!-- /slot: default -->
		</div>
	</div>
</svelte:element>
