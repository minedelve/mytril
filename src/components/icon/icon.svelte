<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { writable } from 'svelte/store';
	import { className, styleName } from '$lib/utils/dom.js';
	import { formatStyleProperties } from '$lib/utils/formater.js';

	// props
	let _class: string | undefined = undefined;
	let _style: string | undefined = undefined;
	export { _class as class, _style as style };
	export let tag: 'span' | 'i' = 'i';
	export let dark: boolean = false;
	export let light: boolean = false;
	export let disabled: boolean = false;
	export let start: boolean = false;
	export let end: boolean = false;
	export let color: string | undefined = undefined;
	export let icon: string = '';
	export let size: string = 'default';

	// stored
	const isIconifyAvailable = writable(false);

	// state
	let IconifyComponent: Component<Record<string, unknown>> | null = null;
	let svgNode: HTMLElement | null = null;

	$: styled = formatStyleProperties({
		color: color
	});

	onMount(async () => {
		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			const Iconify = await import('@iconify/svelte');
			IconifyComponent = Iconify.default;
			isIconifyAvailable.set(true);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			/* empty */
		}
	});

	onMount(async () => {
		if (typeof icon === 'string' && icon.endsWith('.svg') && svgNode) {
			try {
				const response = await fetch(icon.replace('svg:', ''));
				const svgText = await response.text();
				const parser = new DOMParser();
				const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
				const svgElement = svgDoc.querySelector('svg');

				if (svgElement) {
					svgNode.innerHTML = '';
					svgNode.appendChild(svgElement);
				}
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (error) {
				/* empty */
			}
		}
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={tag}
	bind:this={svgNode}
	class={className(
		'myt-icon',
		_class,
		icon.startsWith('font:') || icon.startsWith('fa:')
			? icon.replace('font:', '').replace('fa:', '')
			: ''
	)}
	style={styleName(styled, _style)}
	class:light
	class:dark
	class:myt-icon--start={start}
	class:myt-icon--end={end}
	class:myt-icon--disabled={disabled}
	class:myt-icon--size-x-small={size === 'xs'}
	class:myt-icon--size-small={size === 'sm'}
	class:myt-icon--size-default={size === 'md' || size === 'default'}
	class:myt-icon--size-large={size === 'lg'}
	class:myt-icon--size-x-large={size === 'xl'}
	on:click
	{...$$restProps}
>
	{#if $isIconifyAvailable && IconifyComponent && !(icon.startsWith('font:') || icon.startsWith('fa:'))}
		<svelte:component this={IconifyComponent} {icon} />
	{/if}
</svelte:element>
