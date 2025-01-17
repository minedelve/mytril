<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ListGroupProps } from '../types/index.js';

	let {
		children,
		is = 'div',
		dark,
		light,
		activator,
		color,
		open,
		...rest
	}: ListGroupProps = $props();

	const assets = getAssets();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-list-group',
		light && 'light',
		dark && 'dark',
		open && 'myt-list-group--open',
		rest.class
	]}
	style:--color={assets.color(color)}
>
	{@render activator?.()}

	<div
		class={['myt-list-group--items']}
		style:display={open ? undefined : 'none'}
		role="group"
		aria-labelledby={`myt-list-group`}
	>
		<div class="myt-list-group--text-wrapper">
			{@render children?.()}
		</div>
	</div>
</svelte:element>
