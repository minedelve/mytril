<script lang="ts">
	import { disabledScroll } from '$lib/actions/index.js';
	import { getAssets } from '$lib/state/assets.svelte.js';
	import type { BottomViewProps } from '../types/index.js';

	let {
		children,
		open,
		dark,
		light,
		classContent,
		color,
		background,
		persistent,
		closeWithEsc,
		...rest
	}: BottomViewProps = $props();

	const assets = getAssets();

	let ref: HTMLDialogElement;

	$effect(() => {
		if (ref && open) ref.showModal();
		if (ref && !open) ref.close();
		disabledScroll(open ? true : false);
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={ref}
	{...rest}
	class={[
		'myt-bottom-view',
		dark && 'dark',
		light && 'light',
		persistent && 'myt-bottom-view--persistent',
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
	<button type="button" class="close-view">close</button>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class={['myt-bottom-view-container', classContent, rest.class]}
		onclick={(event: MouseEvent) => event.stopPropagation()}
		style:--background={assets.color(background)}
		style:--color={assets.color(color)}
	>
		{@render children?.()}
	</div>
</dialog>
