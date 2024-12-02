<script lang="ts">
	import { onDestroy } from 'svelte';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: string = 'div';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let rounded: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let colorText: string | undefined = undefined;

	let ref: HTMLElement | null = null;
	let observer: MutationObserver | null = null;
	let expansionPanels: HTMLElement[] = [];

	$: {
		if (ref) {
			expansionPanels = Array.from(
				ref.querySelectorAll(':scope > .myt-expansion-panel')
			) as HTMLElement[];

			if (observer) {
				observer.disconnect();
			}

			observer = new MutationObserver((mutations) => {
				for (const mutation of mutations) {
					if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
						const target = mutation.target as HTMLElement;
						if (target.classList.contains('myt-expansion-panel--active')) {
							console.log('Mise à jour détectée: ', target);
						}
					}
				}
			});

			expansionPanels.forEach((panel) => {
				observer?.observe(panel, { attributes: true });
			});
		}
	}

	onDestroy(() => {
		observer?.disconnect();
	});

	$: styled = formatStyleProperties({
		background: color,
		color: colorText,
		rounded: rounded
	});
</script>

<svelte:element
	this={tag}
	bind:this={ref}
	class={className('myt-expansion-panels', _class)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	{...$$restProps}
>
	<!-- slot: default -->
	<slot />
	<!-- /slot: default -->
</svelte:element>
