<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

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
	export let towline: boolean = false;
	export let threeline: boolean = false;
	export let dense: boolean = false;
	export let disabled: boolean = false;
	export let nav: boolean = false;
	export let multiple: boolean = false;

	let openIndexes: (number | string)[] = [];
	const dispatch = createEventDispatcher<{ change: { openIndexes: (number | string)[] } }>();

	function toggle(index: number | string) {
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

	$: styled = formatStyleProperties({
		background: color,
		color: colorText,
		rounded: rounded
	});
</script>

<svelte:element
	this={tag}
	class={className('myt-list', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-list--tow-line={towline}
	class:myt-list--three-line={threeline}
	class:myt-list--dense={dense}
	class:myt-list--disabled={disabled}
	class:myt-list--nav={nav}
	role="list"
	tabindex={disabled ? -1 : 0}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot {openIndexes} {toggle} />
	<!-- /slot: default -->
</svelte:element>
