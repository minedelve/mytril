<script lang="ts">
	import type { GridColProps } from '$lib/types/index.js';
	let {
		children,
		is = 'div',
		cols,
		xs,
		sm,
		md,
		lg,
		xl,
		xxl,
		offset,
		offsetXs,
		offsetSm,
		offsetMd,
		offsetLg,
		offsetXl,
		offsetXxl,
		...rest
	}: GridColProps = $props();
</script>

<svelte:element
	this={is}
	{...rest}
	class={[
		'myt-grid-col',
		cols && `col-${cols}`,
		xs && `xs:col-${xs}`,
		sm && `sm:col-${sm}`,
		md && `md:col-${md}`,
		lg && `lg:col-${lg}`,
		xl && `xl:col-${xl}`,
		xxl && `xxl:col-${xxl}`,
		offset && `offset-${offset}`,
		offsetXs && `xs:offset-${offsetXs}`,
		offsetSm && `sm:offset-${offsetSm}`,
		offsetMd && `md:offset-${offsetMd}`,
		offsetLg && `lg:offset-${offsetLg}`,
		offsetXl && `xl:offset-${offsetXl}`,
		offsetXxl && `xxl:offset-${offsetXxl}`,
		rest.class
	]}
>
	{@render children?.()}
</svelte:element>
