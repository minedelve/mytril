<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ExpansionPanelsProps } from '../types/index.js';

	let {
		children,
		is = 'div',
		dark,
		light,
		rounded,
		color,
		background,
		multiple,
		expansion,
		spacer,
		readonly,
		hideIcon,
		...rest
	}: ExpansionPanelsProps = $props();

	const assets = getAssets();

	// state
	let openIndexes: (number | string)[] = $state([]);
	let ref: HTMLElement | null = $state(null);

	let model = {
		get open() {
			return openIndexes;
		},
		close: (id: string | number) => openIndexes.slice().filter((i) => i !== id),
		toggle: (id: string | number) => handleToggle(id)
	};

	const handleToggle = (id: string | number) => {
		{
			if (!readonly) {
				if (multiple) {
					if (openIndexes.includes(id)) {
						openIndexes = openIndexes.filter((i) => i !== id);
					} else {
						openIndexes = [...openIndexes, id];
					}
				} else {
					openIndexes = openIndexes.includes(id) ? [] : [id];
				}
			}
		}
	};
</script>

<svelte:element
	this={is}
	bind:this={ref}
	{...rest}
	class={[
		'myt-expansion-panels',
		expansion && 'myt-expansion-panels--expansion',
		spacer && 'myt-expansion-panels--spacer',
		readonly && 'myt-expansion-panels--readonly',
		hideIcon && 'myt-expansion-panels--hide-icon',
		light && 'light',
		dark && 'dark',
		rounded && assets.shape(rounded),
		rest.class
	]}
	style:--background={assets.color(background)}
	style:--color={assets.color(color)}
>
	{@render children?.(model)}
</svelte:element>
