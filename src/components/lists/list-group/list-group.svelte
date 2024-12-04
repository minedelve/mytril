<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';
	import { uniqueID } from '$lib/utils/uid.js';
	import ListItem from '../list-item/list-item.svelte';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let value: number | string | undefined = undefined;
	export let open: boolean = false;
	export let toggle: (index: number) => void;
	export let tag: string = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let color: string | undefined = undefined;

	import arrowUp from './icons/arrow-up.svg';
	import arrowDown from './icons/arrow-down.svg';
	import Icon from '$lib/components/icon/icon.svelte';

	$: id = uniqueID();

	$: styled = formatStyleProperties({
		color: color
	});
</script>

<svelte:element
	this={tag}
	class={className('myt-list-group', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-list-group--open={open}
	{...$$restProps}
>
	<ListItem
		id={`myt-list-group-${id}`}
		class={className('myt-list-group--activator', open ? 'myt-list-group--active' : '')}
		aria-selected={open}
		link
		on:click={() => toggle(value as never)}
		tabindex="-2"
		activator
	>
		<svelte:fragment slot="prepend">
			<!-- slot: prepend-activator -->
			<slot name="prepend-activator" />
			<!-- /slot: prepend-activator -->
		</svelte:fragment>

		<!-- slot: activator -->
		<slot name="activator" />
		<!-- /slot: activator -->

		<svelte:fragment slot="append">
			<!-- slot: append-activator -->
			<slot name="append-activator" />
			<!-- /slot: append-activator -->
		</svelte:fragment>

		<svelte:fragment slot="activator">
			{#if open}
				<Icon icon={`svg:${arrowUp}`} />
			{:else}
				<Icon icon={`svg:${arrowDown}`} />
			{/if}
		</svelte:fragment>
	</ListItem>

	<div
		class="myt-list-group--items"
		style={styleName(open ? undefined : 'display: none;')}
		role="group"
		aria-labelledby={`myt-list-group-${id}`}
	>
		<div class="myt-list-group--text-wrapper">
			<!-- slot: default -->
			<slot />
			<!-- /slot: default -->
		</div>
	</div>
</svelte:element>
