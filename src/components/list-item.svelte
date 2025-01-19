<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ListItemProps } from '$lib/types/index.js';

	let {
		children,
		prepend,
		append,
		is = 'div',
		href,
		dark,
		light,
		rounded,
		color,
		background,
		activator,
		link,
		active,
		...rest
	}: ListItemProps = $props();

	const assets = getAssets();

	$effect(() => {
		if (href) is = 'a';
		if (href) link = true;
	});
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-list-item',
		light && 'light',
		dark && 'dark',
		link && 'myt-list-item--link',
		active && 'myt-list-item--active',
		rounded && assets.shape(rounded),
		rest.class
	]}
	style:--background={assets.color(background)}
	style:--color={assets.color(color)}
>
	{#if prepend}
		<div class="myt-list-item--prepend">
			{@render prepend?.()}
		</div>
	{/if}

	<div class="myt-list-item--content">
		{@render children?.()}
	</div>

	{#if append}
		<div class="myt-list-item--append">
			{@render append?.()}
		</div>
	{/if}
	{#if activator}
		<div class="myt-list-item--activator">
			{@render activator?.()}
		</div>
	{/if}
</svelte:element>
