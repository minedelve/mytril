<script lang="ts">
	import { disabledScroll } from '$lib/actions/index.js';
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { DialogProps } from '../types/index.js';

	let {
		children,
		open,
		dark,
		light,
		classContent,
		color,
		background,
		size,
		persistent,
		fullscreen,
		position = 'center',
		closeWithEsc,
		...rest
	}: DialogProps = $props();

	const assets = getAssets();

	let ref: HTMLDialogElement;
	let sizeEl = $state('default');

	$effect(() => {
		if (size === 'xs') sizeEl = 'x-small';
		if (size === 'sm') sizeEl = 'small';
		if (size === 'md' || size === 'default') sizeEl = 'default';
		if (size === 'lg') sizeEl = 'large';
		if (size === 'xl') sizeEl = 'x-large';
	});

	$effect(() => {
		if (ref && open) ref.showModal();
		if (ref && !open) ref.close();
		disabledScroll(open ? true : false);
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={ref}
	class={[
		'myt-dialog',
		persistent && 'myt-dialog--persistent',
		fullscreen && 'myt-dialog--fullscreen',
		sizeEl && `myt-dialog--size-${sizeEl}`,
		position && `myt-dialog--${position}`,
		rest.class
	]}
	onclose={() => (!persistent ? (open = false) : null)}
	onkeydown={(event: KeyboardEvent) => {
		if (!persistent && event.key === 'Escape' && closeWithEsc) {
			event.preventDefault();
			open = false;
		}
	}}
	onclick={(event: MouseEvent) => {
		if (event.target === ref) {
			if (!persistent) ref.close();
		}
	}}
>
	<!-- surcharge-dialog autofocus-action-element -->
	<button type="button" class="close-dialog">close</button>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		{...rest}
		class={['myt-dialog-container', light && 'light', dark && 'dark', classContent, rest.class]}
		onclick={(event: MouseEvent) => event.stopPropagation()}
		style:--background={assets.color(background)}
		style:--color={assets.color(color)}
	>
		{@render children?.()}
	</div>
</dialog>
