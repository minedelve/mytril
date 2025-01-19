<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { ListProps } from '$lib/types/index.js';

	let {
		children,
		is = 'div',
		dark,
		light,
		rounded,
		towline,
		threeline,
		dense,
		disabled,
		nav,
		color,
		background,
		...rest
	}: ListProps = $props();

	const assets = getAssets();

	let openRef: (number | string)[] = $state([]);

	let model = {
		get open() {
			return openRef;
		},
		toggle: (index: number | string) => {
			if (openRef.includes(index)) {
				openRef = openRef.filter((i) => i !== index);
			} else {
				openRef = [...openRef, index];
			}
		}
	};
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-list',
		light && 'light',
		dark && 'dark',
		towline && 'myt-list--tow-line',
		threeline && 'myt-list--three-line',
		dense && 'myt-list--dense',
		disabled && 'myt-list--disabled',
		nav && 'myt-list--nav',
		rounded && assets.shape(rounded),
		rest.class
	]}
	role="list"
	tabindex={disabled ? -1 : 0}
	style:--background={assets.color(background)}
	style:--color={assets.color(color)}
>
	{@render children?.(model)}
</svelte:element>
