<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';
	import ListItemTitle from '../list-item-title/list-item-title.svelte';
	import ListItemSubtitle from '../list-item-subtitle/list-item-subtitle.svelte';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'a' | 'button' | 'div' = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let text: string | undefined = undefined;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;
	export let link: boolean = false;
	export let active: boolean = false;

	$: styled = formatStyleProperties({
		background: color,
		color: colorText,
		rounded: rounded
	});

	$: {
		if ($$props.href) tag = 'a';
		if ($$props.href) link = true;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={tag}
	class={className('myt-list-item', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-list-item--link={link}
	class:myt-list-item--active={active}
	on:click
	on:change
	{...$$restProps}
>
	{#if $$slots.prepend}
		<div class="myt-list-item--prepend">
			<!-- slot: prepend -->
			<slot name="prepend" />
			<!-- /slot: prepend -->
		</div>
	{/if}

	<div class="myt-list-item--content">
		{#if text}
			<ListItemTitle>
				{text}
			</ListItemTitle>
		{:else}
			<!-- slot: default -->
			<slot />
			<!-- /slot: default -->
		{/if}
		{#if $$slots.description}
			<ListItemSubtitle>
				<slot name="description" />
			</ListItemSubtitle>
		{/if}
	</div>

	{#if $$slots.append}
		<div class="myt-list-item--append">
			<!-- slot: prepend -->
			<slot name="append" />
			<!-- /slot: prepend -->
		</div>
	{/if}
	{#if $$slots.activator && $$props.activator}
		<div class="myt-list-item--activator">
			<!-- slot: activator -->
			<slot name="activator" />
			<!-- /slot: activator -->
		</div>
	{/if}
</svelte:element>
