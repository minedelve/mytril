<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { useLazyImg } from '../actions/index.js';
	import type { ImgProps } from '../types/index.js';

	// components
	import Responsive from './responsive.svelte';

	let {
		placeholder,
		contentClass,
		src,
		lazySrc,
		alt,
		options = { root: null, rootMargin: '0px 0px 0px 0px', threshold: 0.0 },
		cover,
		contain,
		absolute,
		aspectRatio,
		inline,
		crossorigin,
		draggable,
		...rest
	}: ImgProps = $props();

	// state
	let lazyElement: Element | null = $state(null);
	let imgElement: Element;
	let observer: IntersectionObserver;
	let intersected = $state(false);

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
	{...rest}
	class={['myt-img', absolute && 'myt-img--absolute', rest.class]}
	{aspectRatio}
	{inline}
>
	{#if !intersected && lazySrc}
		<img
			bind:this={lazyElement}
			class={[
				'myt-img--img',
				cover && 'myt-img--img-cover',
				contain && 'myt-img--img-contain',
				placeholder && 'myt-img--preload' && contentClass
			]}
			src={lazySrc}
			{alt}
		/>
	{/if}

	<img
		class={[
			'myt-img--img',
			cover && 'myt-img--img-cover',
			contain && 'myt-img--img-contain',
			contentClass
		]}
		{src}
		{alt}
		bind:this={imgElement}
		{crossorigin}
		{draggable}
		use:useLazyImg={{
			root: options.root,
			rootMargin: options.rootMargin,
			threshold: options.threshold
		}}
		style:display={!intersected && lazySrc ? 'none' : ''}
	/>

	{#if placeholder}
		<div class="myt-img--placeholder">
			{@render placeholder?.()}
		</div>
	{/if}
</Responsive>
