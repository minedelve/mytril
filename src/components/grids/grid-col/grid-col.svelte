<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: string = 'div';

	// props cols
	export let cols: string | number | undefined = undefined;
	export let xs: string | number | undefined = undefined;
	export let sm: string | number | undefined = undefined;
	export let md: string | number | undefined = undefined;
	export let lg: string | number | undefined = undefined;
	export let xl: string | number | undefined = undefined;
	export let xxl: string | number | undefined = undefined;
	// props offset
	export let offset: string | number | undefined = undefined;
	export let offsetXs: string | number | undefined = undefined;
	export let offsetSm: string | number | undefined = undefined;
	export let offsetMd: string | number | undefined = undefined;
	export let offsetLg: string | number | undefined = undefined;
	export let offsetXl: string | number | undefined = undefined;
	export let offsetXxl: string | number | undefined = undefined;
	// props order
	export let order: string | number | undefined = undefined;
	export let orderXs: string | number | undefined = undefined;
	export let orderSm: string | number | undefined = undefined;
	export let orderMd: string | number | undefined = undefined;
	export let orderLg: string | number | undefined = undefined;
	export let orderXl: string | number | undefined = undefined;
	export let orderXxl: string | number | undefined = undefined;
	// props align self
	export let alignSelf: string | undefined = undefined;

	type PropertyKeys = '_default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
	type PropertyValues = {
		_default?: string | number;
		xs?: string | number;
		sm?: string | number;
		md?: string | number;
		lg?: string | number;
		xl?: string | number;
		xxl?: string | number;
	};

	$: propertiesCss = '';

	$: {
		const propertiesList: Record<string, PropertyValues> = {
			col: {
				_default: cols,
				xs: xs,
				sm: sm,
				md: md,
				lg: lg,
				xl: xl,
				xxl: xxl
			},
			offset: {
				_default: offset,
				xs: offsetXs,
				sm: offsetSm,
				md: offsetMd,
				lg: offsetLg,
				xl: offsetXl,
				xxl: offsetXxl
			},
			order: {
				_default: order,
				xs: orderXs,
				sm: orderSm,
				md: orderMd,
				lg: orderLg,
				xl: orderXl,
				xxl: orderXxl
			},
			'align-self': {
				_default: alignSelf
			}
		};

		let css = '';
		for (const [key, values] of Object.entries(propertiesList)) {
			for (const property of Object.keys(values) as PropertyKeys[]) {
				if (values[property]) {
					css += `${property !== '_default' ? property + ':' : ''}${key}-${values[property]} `;
				}
			}
		}

		propertiesCss = css;
	}
</script>

<svelte:element this={tag} class={className('myt-grid', _class, propertiesCss)} {...$$restProps}>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
