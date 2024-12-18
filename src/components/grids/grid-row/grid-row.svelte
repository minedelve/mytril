<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let tag: string = 'div';
	export let noGutters: boolean = false;
	export let dense: boolean = false;

	// props align
	export let align: string | undefined = undefined;
	export let alignXs: string | undefined = undefined;
	export let alignSm: string | undefined = undefined;
	export let alignMd: string | undefined = undefined;
	export let alignLg: string | undefined = undefined;
	export let alignXl: string | undefined = undefined;
	export let alignXxl: string | undefined = undefined;
	// props align content
	export let alignContent: string | undefined = undefined;
	export let alignContentXs: string | undefined = undefined;
	export let alignContentSm: string | undefined = undefined;
	export let alignContentMd: string | undefined = undefined;
	export let alignContentLg: string | undefined = undefined;
	export let alignContentXl: string | undefined = undefined;
	export let alignContentXxl: string | undefined = undefined;
	// props justify
	export let justify: string | undefined = undefined;
	export let justifyXs: string | undefined = undefined;
	export let justifySm: string | undefined = undefined;
	export let justifyMd: string | undefined = undefined;
	export let justifyLg: string | undefined = undefined;
	export let justifyXl: string | undefined = undefined;
	export let justifyXxl: string | undefined = undefined;

	type PropertyKeys = '_default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
	type PropertyValues = {
		_default?: string;
		xs?: string;
		sm?: string;
		md?: string;
		lg?: string;
		xl?: string;
		xxl?: string;
	};

	$: propertiesCss = '';

	$: {
		const propertiesList: Record<string, PropertyValues> = {
			align: {
				_default: align,
				xs: alignXs,
				sm: alignSm,
				md: alignMd,
				lg: alignLg,
				xl: alignXl,
				xxl: alignXxl
			},
			'align-content': {
				_default: alignContent,
				xs: alignContentXs,
				sm: alignContentSm,
				md: alignContentMd,
				lg: alignContentLg,
				xl: alignContentXl,
				xxl: alignContentXxl
			},
			justify: {
				_default: justify,
				xs: justifyXs,
				sm: justifySm,
				md: justifyMd,
				lg: justifyLg,
				xl: justifyXl,
				xxl: justifyXxl
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

<svelte:element
	this={tag}
	class={className('myt-grid-row', _class, propertiesCss)}
	class:myt-grid-row--no-gutters={noGutters}
	class:myt-grid-row--dense={dense}
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
