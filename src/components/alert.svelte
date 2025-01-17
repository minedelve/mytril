<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { AlertProps } from '../types/index.js';

	// components
	import Icon from './icon.svelte';

	//  assets
	import closeSvg from '../assets/close.svg';

	let {
		children,
		append,
		prepend,
		close,
		is = 'div',
		light,
		dark,
		variant,
		density = 'default',
		rounded,
		warning,
		info,
		success,
		error,
		closable,
		color,
		background,
		...rest
	}: AlertProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-alert',
		light && 'light',
		dark && 'dark',
		variant && `myt-alert--${variant}`,
		rounded && assets.shape(rounded),
		density && `myt-alert--density-${density}`,
		warning && 'myt-alert--warning',
		info && 'myt-alert--info',
		success && 'myt-alert--success',
		error && 'myt-alert--error',
		rest.class
	]}
	role="alert"
	style:--color={assets.color(color)}
	style:--background={assets.color(background)}
>
	{#if prepend}
		<div class="myt-alert--prepend">
			{@render prepend?.()}
		</div>
	{/if}
	<span class="myt-alert--content">
		{@render children?.()}
	</span>
	{#if append}
		<div class="myt-alert--append">
			{@render append?.()}
		</div>
	{/if}

	{#if closable}
		<button class="myt-alert--close" type="button" aria-label="close">
			{#if close}
				{@render close?.()}
			{:else}
				<Icon icon={`svg:${closeSvg}`} />
			{/if}
		</button>
	{/if}
</svelte:element>
