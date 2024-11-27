<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';
	import { uniqueID } from '$lib/utils/uid.js';

	// Props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let text: string | undefined = undefined;

	$: id = uniqueID();
	$: open = false;

	$: styled = formatStyleProperties({
		borderColor: undefined
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
	aria-describedby={id}
	class={className('myt-tooltip', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	on:mouseenter={() => (open = true)}
	on:mouseleave={() => (open = false)}
	{...$$restProps}
>
	{open}
	<!-- slot: default -->
	<slot />
	<!-- </slot: default -->

	<!-- Contenu de la tooltip -->
	{#if $$slots.tooltip || text}
		<span
			{id}
			class="tooltip-content"
			class:myt-tooltip-content--display={open}
			aria-label={text}
			role="tooltip"
		>
			{#if $$slots.tooltip}
				<slot name="tooltip" />
			{:else if text}
				{text}
			{/if}
		</span>
	{/if}
</span>
