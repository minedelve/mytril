<script lang="ts">
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatClassSizeElement, formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let dark: boolean = false;
	export let light: boolean = false;
	export let value: boolean = false;
	export let right: boolean = false;
	export let disabled: boolean = false;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = 'md';
	export let sizeXs: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeSm: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeMd: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeLg: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;
	export let sizeXl: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined = undefined;

	$: styled = formatStyleProperties({
		background: color,
		color: colorText
	});

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = target.checked;
	};
</script>

{#if $$slots.default || $$slots.before || $$slots.after}
	<div class="myt-switch-area" class:myt-switch-area--disabled={disabled}>
		<label class="label">
			{#if ($$slots.before || $$slots.after) && $$slots.before}
				<slot name="before" />
			{:else if $$slots.default && !right}
				<slot />
			{/if}

			<input
				class={className(
					'myt-switch',
					_class,
					formatClassSizeElement('switch', {
						_default: size,
						xs: sizeXs,
						sm: sizeSm,
						md: sizeMd,
						lg: sizeLg,
						xl: sizeXl
					})
				)}
				style={styleName(styled, _style)}
				type="checkbox"
				class:light
				class:dark
				{disabled}
				checked={value}
				on:change={(e) => handleChange(e)}
				{...$$restProps}
			/>

			{#if ($$slots.before || $$slots.after) && $$slots.after}
				<slot name="after" />
			{:else if $$slots.default && right}
				<slot />
			{/if}
		</label>
	</div>
{:else}
	<input
		class={className(
			'myt-switch',
			_class,
			formatClassSizeElement('switch', {
				_default: size,
				xs: sizeXs,
				sm: sizeSm,
				md: sizeMd,
				lg: sizeLg,
				xl: sizeXl
			})
		)}
		style={styleName(styled, _style)}
		type="checkbox"
		class:light
		class:dark
		class:myt-switch--disabled={disabled}
		checked={value}
		{disabled}
		on:change={(e) => handleChange(e)}
		{...$$restProps}
	/>
{/if}
