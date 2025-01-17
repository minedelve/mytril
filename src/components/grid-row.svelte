<script lang="ts">
	import type { GridRowProps } from '../types/index.js';
	let {
		children,
		is = 'div',
		noGutters,
		dense,
		align,
		alignXs,
		alignSm,
		alignMd,
		alignLg,
		alignXl,
		alignXxl,
		alignContent,
		alignContentXs,
		alignContentSm,
		alignContentMd,
		alignContentLg,
		alignContentXl,
		alignContentXxl,
		justify,
		justifyXs,
		justifySm,
		justifyMd,
		justifyLg,
		justifyXl,
		justifyXxl,
		...rest
	}: GridRowProps = $props();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-grid-row',
		noGutters && 'myt-grid-row--no-gutters',
		dense && 'myt-grid-row--dense',
		align && `align-${align}`,
		alignXs && `xs:align-${alignXs}`,
		alignSm && `sm:align-${alignSm}`,
		alignMd && `md:align-${alignMd}`,
		alignLg && `lg:align-${alignLg}`,
		alignXl && `xl:align-${alignXl}`,
		alignXxl && `xxl:align-${alignXxl}`,
		alignContent && `align-content-${alignContent}`,
		alignContentXs && `xs:align-content-${alignContentXs}`,
		alignContentSm && `sm:align-content-${alignContentSm}`,
		alignContentMd && `md:align-content-${alignContentMd}`,
		alignContentLg && `lg:align-content-${alignContentLg}`,
		alignContentXl && `xl:align-content-${alignContentXl}`,
		alignContentXxl && `xxl:align-content-${alignContentXxl}`,
		justify && `justify-${justify}`,
		justifyXs && `xs:justify-${justifyXs}`,
		justifySm && `sm:justify-${justifySm}`,
		justifyMd && `md:justify-${justifyMd}`,
		justifyLg && `lg:justify-${justifyLg}`,
		justifyXl && `xl:justify-${justifyXl}`,
		justifyXxl && `xxl:justify-${justifyXxl}`,
		rest.class
	]}
>
	{@render children?.()}
</svelte:element>
