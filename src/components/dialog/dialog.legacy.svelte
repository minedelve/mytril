<script lang="ts">
	import { disabledScroll } from '$lib/composables/scroll.js';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let open: boolean = false;
	export let dark: boolean = false;
	export let light: boolean = false;
	export let classContent: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;
	export let size: string = 'default';
	export let persistent: boolean = false;
	export let fullscreen: boolean = false;
	export let position: 'bottom' | 'center' | 'top' | undefined = 'center';

	let dialog: HTMLDialogElement;

	$: styled = formatStyleProperties({
		background: color,
		color: colorText
	});

	$: {
		if (dialog && open) dialog.showModal();
		if (dialog && !open) dialog.close();
		disabledScroll(open);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (!persistent && event.key === 'Escape') {
			if ($$props?.closewithEsc) {
				dialog.close();
				open = false;
			} else {
				event.preventDefault();
			}
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	class={className('myt-dialog', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-dialog--persistent={persistent}
	class:myt-dialog--fullscreen={fullscreen}
	class:myt-dialog--size-x-small={size === 'xs'}
	class:myt-dialog--size-small={size === 'sm'}
	class:myt-dialog--size-default={size === 'md' || size === 'default'}
	class:myt-dialog--size-large={size === 'lg'}
	class:myt-dialog--size-x-large={size === 'xl'}
	class:myt-dialog--bottom={position === 'bottom'}
	class:myt-dialog--center={position === 'center'}
	class:myt-dialog--top={position === 'top'}
	on:close={() => (!persistent ? (open = false) : '')}
	on:keydown={handleKeyDown}
	on:click|self={() => (!persistent ? dialog.close() : '')}
	{...$$restProps}
>
	<!-- surcharge-dialog autofocus-action-element -->
	<button type="button" class="close-dialog">close</button>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class={className('myt-dialog-container', classContent)} on:click|stopPropagation>
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>
</dialog>
