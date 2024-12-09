<script lang="ts">
	import Icon from '../icon/icon.svelte';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatClassSizeElement, formatStyleProperties } from '$lib/utils/formater.js';

	import iconClose from './close.svg';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'a' | 'button' | 'span' = 'span';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let outlined: boolean = false;
	export let active: boolean = false;
	export let label: boolean = false;
	export let density: 'compact' | 'comfortable' | 'default' = 'default';
	export let disabled: boolean = false;
	export let rounded: string | boolean | undefined = undefined;
	export let closable: boolean = false;
	export let link: boolean = false;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let value: any = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = 'md';
	export let sizeXs: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeSm: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeMd: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeLg: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeXl: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;

	$: styled = formatStyleProperties({
		background: !outlined ? color : undefined,
		color: outlined ? color : colorText,
		rounded: typeof rounded === 'string' ? rounded : undefined
	});

	$: {
		if ($$props.href) tag = 'a';
		if ($$props.href) link = true;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={tag}
	class={className(
		'myt-chip',
		_class,
		formatClassSizeElement('chip', {
			_default: size,
			xs: sizeXs,
			sm: sizeSm,
			md: sizeMd,
			lg: sizeLg,
			xl: sizeXl
		})
	)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-chip--active={active}
	class:myt-chip--outlined={outlined}
	class:myt-chip--disabled={disabled}
	class:myt-chip--link={link}
	class:myt-chip--rounded={typeof rounded === 'boolean' && rounded}
	class:myt-chip--density-comfortable={density === 'comfortable'}
	class:myt-chip--density-compact={density === 'compact'}
	class:myt-chip--density-default={density === 'default'}
	class:myt-chip--label={label}
	class:myt-chip--closable={closable}
	disabled={$$props.disabled}
	aria-label={$$props.ariaLabel}
	{value}
	on:change
	on:click
	{...$$restProps}
>
	{#if $$slots.prepend}
		<span class="myt-chip--prepend">
			<!-- slot: prepend -->
			<slot name="prepend" />
			<!-- /slot: prepend -->
		</span>
	{/if}
	<span class="myt-chip--content">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</span>
	{#if $$slots.append}
		<span class="myt-chip--append">
			<!-- slot: append -->
			<slot name="append" />
			<!-- /slot: append -->
		</span>
	{/if}
	{#if closable}
		<button class="myt-chip--close" type="button" aria-label="close">
			{#if $$slots.closable}
				<!-- slot: closable -->
				<slot name="closable" />
				<!-- /slot: closable -->
			{:else}
				<Icon icon={`svg:${iconClose}`} />
			{/if}
		</button>
	{/if}
</svelte:element>
