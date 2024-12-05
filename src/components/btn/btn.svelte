<script lang="ts">
	import { className } from '$lib/utils/dom.js';
	import { formatClassSizeElement } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: 'button' | 'a' | 'input' = 'button';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let disabled: boolean = false;
	export let square: boolean = false;
	export let circle: boolean = false;
	export let outline: boolean = false;
	export let rounded: boolean = false;
	export let text: boolean = false;
	export let link: boolean = false;
	export let info: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;
	export let error: boolean = false;
	export let wide: boolean = false;
	export let block: boolean = false;
	export let active: boolean = false;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeXs: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeSm: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeMd: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeLg: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeXl: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeXsL: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;

	$: {
		if ($$props.href) tag = 'a';
		if ($$props.value) tag = 'input';
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

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
			xl: sizeXl,
			xxl: sizeXsL
		})
	)}
	class:light
	class:dark
	class:myt-btn-active={active}
	class:myt-btn-square={square}
	class:myt-btn-outline={outline}
	class:myt-btn-rounded={rounded}
	class:myt-btn-circle={circle}
	class:myt-btn-text={text}
	class:myt-btn-link={link}
	class:myt-btn-disabled={disabled}
	class:myt-btn-info={info}
	class:myt-btn-success={success}
	class:myt-btn-warning={warning}
	class:myt-btn-error={error}
	class:myt-btn-wide={wide}
	class:myt-btn-block={block}
	disabled={$$props.disabled}
	aria-label={$$props.ariaLabel}
	on:click
	on:dblclick
	{...$$restProps}
>
	<span class="myt-btn--content">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</span>
</svelte:element>
