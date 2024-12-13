<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatClassSizeElement, formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'a' | 'button' | 'input' = 'button';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let block: boolean = false;
	export let active: boolean = false;
	export let square: boolean = false;
	export let circle: boolean = false;
	export let outlined: boolean = false;
	export let error: boolean = false;
	export let warning: boolean = false;
	export let info: boolean = false;
	export let success: boolean = false;
	export let text: boolean = false;
	export let icon: boolean = false;
	export let wide: boolean = false;
	export let density: 'compact' | 'comfortable' | 'default' = 'default';
	export let disabled: boolean = false;
	export let rounded: string | boolean | undefined = undefined;
	export let link: boolean = false;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = 'md';
	export let sizeXs: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeSm: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeMd: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeLg: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeXl: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;

	$: styled = formatStyleProperties({
		background: !outlined && !text ? color : undefined,
		color: outlined || text ? color : colorText,
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
		'myt-btn',
		_class,
		formatClassSizeElement('btn', {
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
	class:myt-btn--wide={wide}
	class:myt-btn--active={active}
	class:myt-btn--outlined={outlined}
	class:myt-btn--text={text}
	class:myt-btn--icon={icon}
	class:myt-btn--disabled={disabled}
	class:myt-btn--link={link}
	class:myt-btn--block={block}
	class:myt-btn--success={success}
	class:myt-btn--error={error}
	class:myt-btn--info={info}
	class:myt-btn--warning={warning}
	class:myt-btn--rounded={typeof rounded === 'boolean' && rounded}
	class:myt-btn--square={square}
	class:myt-btn--circle={circle}
	class:myt-btn--density-comfortable={density === 'comfortable'}
	class:myt-btn--density-compact={density === 'compact'}
	class:myt-btn--density-default={density === 'default'}
	disabled={$$props.disabled}
	aria-label={$$props.ariaLabel}
	type="button"
	on:change
	on:click
	{...$$restProps}
>
	{#if $$slots.prepend}
		<span class="myt-btn--prepend">
			<!-- slot: prepend -->
			<slot name="prepend" />
			<!-- /slot: prepend -->
		</span>
	{/if}
	<span class="myt-btn--content">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</span>
	{#if $$slots.append}
		<span class="myt-btn--append">
			<!-- slot: append -->
			<slot name="append" />
			<!-- /slot: append -->
		</span>
	{/if}
</svelte:element>
