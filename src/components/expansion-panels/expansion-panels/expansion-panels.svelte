<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';
	import { uniqueID } from '$lib/utils/uid.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: string = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;
	export let multiple: boolean = false;
	export let expansion: boolean = false;
	export let spacer: boolean = false;
	export let readonly: boolean = false;
	export let hideIcon: boolean = false;

	let openIndexes: (number | string)[] = [];
	const dispatch = createEventDispatcher<{ change: { openIndexes: (number | string)[] } }>();

	$: id = uniqueID();
	let ref: HTMLElement | null = null;

	function toggle(index: number | string) {
		if (!readonly) {
			if (multiple) {
				if (openIndexes.includes(index)) {
					openIndexes = openIndexes.filter((i) => i !== index);
				} else {
					openIndexes = [...openIndexes, index];
				}
			} else {
				openIndexes = openIndexes.includes(index) ? [] : [index];
			}
			dispatch('change', { openIndexes });
		}
	}

	$: styled = formatStyleProperties({
		background: color,
		color: colorText,
		rounded: rounded
	});
</script>

<svelte:element
	this={tag}
	{id}
	bind:this={ref}
	class={className('myt-expansion-panels', _class)}
	style={styleName(styled, _style)}
	class:myt-expansion-panels--expansion={expansion}
	class:myt-expansion-panels--spacer={spacer}
	class:myt-expansion-panels--readonly={readonly}
	class:myt-expansion-panels--hide-icon={hideIcon}
	class:light
	class:dark
	{...$$restProps}
>
	<!-- slot: default -->
	<slot {openIndexes} {toggle} />
	<!-- /slot: default -->
</svelte:element>
