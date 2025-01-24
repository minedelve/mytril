<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ExpansionPanelProps } from '../types/index.js';

	// components
	import Icon from './icon.svelte';

	//  assets
	import arrowUp from '../icons/arrow-up.svg';
	import arrowDown from '../icons/arrow-down.svg';

	let {
		activator,
		children,
		text,
		is = 'div',
		dark,
		light,
		rounded,
		color,
		background,
		index,
		open,
		toggle,
		disabled,
		...rest
	}: ExpansionPanelProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-expansion-panel',
		light && 'light',
		dark && 'dark',
		rounded && assets.shape(rounded),
		open && 'myt-expansion-panel--active',
		rest.class
	]}
	style:--bg={assets.color(background)}
	style:--c={assets.color(color)}
>
	<button
		class={[
			'myt-expansion-panel--title',
			disabled && 'myt-expansion-panel--disabled=',
			dark && 'dark',
			rounded && assets.shape(rounded),
			open && 'myt-expansion-panel--active',
			rest.class
		]}
		onclick={() => toggle && toggle(index as never)}
		aria-expanded={open}
		type="button"
		{disabled}
	>
		{#if activator}
			{@render activator?.()}
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
	<div class="myt-expansion-panel--text" style:display={!open ? 'none' : ''}>
		<div class="myt-expansion-panel--text-wrapper">
			{@render children?.()}
		</div>
	</div>
</svelte:element>
