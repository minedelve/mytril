<script lang="ts">
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { SwitchProps } from '$lib/types/index.js';

	let {
		children,
		before,
		after,
		dark,
		light,
		value,
		right,
		disabled,
		size,
		sizeXs,
		sizeSm,
		sizeMd,
		sizeLg,
		sizeXl,
		sizeXxl,
		color,
		background,
		...rest
	}: SwitchProps = $props();

	const assets = getAssets();

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = target.checked;
	};
</script>

{#if before || after || children}
	<div
		class={[
			'myt-switch-area',
			light && 'light',
			dark && 'dark',
			disabled && 'myt-switch--disabled',
			rest.class
		]}
	>
		<label class="label">
			{#if (before || after) && before}
				{@render before?.()}
			{:else if children && !right}
				{@render children?.()}
			{/if}

			<input
				{...rest}
				class={[
					'myt-switch',
					size && `myt-switch--size-${size}`,
					sizeXs && `xs:myt-switch--size-${sizeXs}`,
					sizeSm && `sm:myt-switch--size-${sizeSm}`,
					sizeMd && `md:myt-switch--size-${sizeMd}`,
					sizeLg && `lg:myt-switch--size-${sizeLg}`,
					sizeXl && `xl:myt-switch--size-${sizeXl}`,
					sizeXxl && `xxl:myt-switch--size-${sizeXxl}`
				]}
				type="checkbox"
				checked={value}
				{disabled}
				onchange={(e) => handleChange(e)}
				style:--background={assets.color(background)}
				style:--color={assets.color(color)}
			/>

			{#if (before || after) && after}
				{@render after?.()}
			{:else if children && right}
				{@render children?.()}
			{/if}
		</label>
	</div>

	{@render after?.()}
{:else}
	<input
		{...rest}
		class={[
			'myt-switch',
			light && 'light',
			dark && 'dark',
			disabled && 'myt-switch--disabled',
			size && `myt-switch--size-${size}`,
			sizeXs && `xs:myt-switch--size-${sizeXs}`,
			sizeSm && `sm:myt-switch--size-${sizeSm}`,
			sizeMd && `md:myt-switch--size-${sizeMd}`,
			sizeLg && `lg:myt-switch--size-${sizeLg}`,
			sizeXl && `xl:myt-switch--size-${sizeXl}`,
			sizeXxl && `xxl:myt-switch--size-${sizeXxl}`,
			rest.class
		]}
		type="checkbox"
		checked={value}
		{disabled}
		onchange={(e) => handleChange(e)}
		style:--background={assets.color(background)}
		style:--color={assets.color(color)}
	/>
{/if}
