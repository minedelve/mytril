<script lang="ts">
	import Icon from '$lib/components/icon/icon.svelte';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	import iconClose from './close.svg';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'a' | 'button' | 'div' = 'div';
	export let density: 'compact' | 'comfortable' | 'default' = 'default';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let outlined: boolean = false;
	export let closable: boolean = false;
	export let error: boolean = false;
	export let warning: boolean = false;
	export let info: boolean = false;
	export let success: boolean = false;
	export let tonal: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;

	$: styled = formatStyleProperties({
		background: color,
		color: colorText,
		rounded: rounded
	});

	$: {
		if ($$props.href) tag = 'a';
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<svelte:element
	this={tag}
	class={className('myt-alert', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-alert--variant-tonal={tonal}
	class:myt-alert--success={success}
	class:myt-alert--error={error}
	class:myt-alert--info={info}
	class:myt-alert--warning={warning}
	class:myt-alert--outlined={outlined}
	class:myt-alert--closable={closable}
	class:myt-alert--density-comfortable={density === 'comfortable'}
	class:myt-alert--density-compact={density === 'compact'}
	class:myt-alert--density-default={density === 'default'}
	role="alert"
	on:click
	{...$$restProps}
>
	{#if tonal}
		<div class="myt-alert--border"></div>
	{/if}
	{#if !outlined}
		<span class="myt-alert--underlay"></span>
	{/if}

	{#if $$slots.prepend}
		<div class="myt-alert--prepend">
			<!-- slot: prepend -->
			<slot name="prepend" />
			<!-- /slot: prepend -->
		</div>
	{/if}

	<div class="myt-alert--content">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>

	{#if closable}
		<button class="myt-alert--close" type="button" aria-label="close">
			{#if $$slots.close}
				<!-- slot: close -->
				<slot name="close" />
				<!-- /slot: close -->
			{:else}
				<Icon icon={`svg:${iconClose}`} />
			{/if}
		</button>
	{/if}
</svelte:element>
