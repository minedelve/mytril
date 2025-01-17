<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ListSubHeaderProps } from '../types/index.js';

	let {
		children,
		is = 'div',
		light,
		dark,
		color,
		inset,
		sticky,
		...rest
	}: ListSubHeaderProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-list-item-title',
		light && 'light',
		dark && 'dark',
		inset && 'myt-list-subheader--inset',
		sticky && 'myt-list-subheader--sticky',
		rest.class
	]}
	style:--color={assets.color(color)}
>
	<div class="myt-list-subheader--text">
		{@render children?.()}
	</div>
</svelte:element>
