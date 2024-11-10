<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Responsive from '../responsive/responsive.svelte';
	import { className } from '$lib/utils/dom.js';
	import { useLazyImg } from '$lib/composables/lazy.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let contentClass: string | undefined = undefined;
	export let src: string | undefined = undefined;
	export let lazySrc: string | undefined = undefined;
	export let alt: string = '';
	export let options = { root: null, rootMargin: '0px 0px 0px 0px', threshold: 0.0 };
	export let cover: boolean = false;
	export let contain: boolean = false;
	export let absolute: boolean = false;
	export let inline: boolean = false;
	export let aspectRatio: string | undefined = undefined;
	export let crossorigin: '' | 'anonymous' | 'use-credentials' | undefined = undefined;
	export let draggable: boolean | 'true' | 'false' | undefined = undefined;

	// state
	let lazyElement: Element;
	let imgElement: Element;
	let observer: IntersectionObserver;
	let intersected = false;

	onMount(() => {
		const initializeObserver = async () => {
			await tick(); // await DOM
			if (lazyElement) {
				observer = new IntersectionObserver((entries, self) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							intersected = true;
							self.unobserve(lazyElement);
						}
					});
				}, options);
				observer.observe(lazyElement);
			}
		};

		initializeObserver();

		return () => {
			if (observer && lazyElement) {
				observer.unobserve(lazyElement);
			}
		};
	});
</script>

<Responsive
	class={className('myt-img', _class, absolute ? 'myt-img--absolute' : '')}
	{aspectRatio}
	{inline}
	{...$$restProps}
>
	{#if !intersected && lazySrc}
		<img
			class={className('myt-img--img', contentClass)}
			src={lazySrc}
			{alt}
			bind:this={lazyElement}
			class:myt-img--img-cover={cover}
			class:myt-img--img-contain={contain}
			class:myt-img--preload={$$slots.placeholder}
		/>
	{/if}

	<img
		class={className('myt-img--img', contentClass)}
		{src}
		{alt}
		bind:this={imgElement}
		class:myt-img--img-cover={cover}
		class:myt-img--img-contain={contain}
		class:none={!intersected && lazySrc}
		{crossorigin}
		{draggable}
		use:useLazyImg={{
			root: options.root,
			rootMargin: options.rootMargin,
			threshold: options.threshold
		}}
	/>

	{#if $$slots.placeholder}
		<div class="myt-img--placeholder">
			<slot name="placeholder" />
		</div>
	{/if}
</Responsive>
