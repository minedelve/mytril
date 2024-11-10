<script lang="ts">
	import { onMount } from 'svelte';
	import useLazyImage from './utils.js';

	export let contentClass: string | undefined = undefined;
	export let src: string | undefined = undefined;
	export let lazySrc: string | undefined = undefined;

	export let options = { root: null, rootMargin: '0px 0px 0px 0px', threshold: 0.0 };

	export let alt: string = '';
	export let cover: boolean = false;
	export let contain: boolean = false;
	export let absolute: boolean = false;
	export let inline: boolean = false;
	export let aspectRatio: string | undefined = undefined;
	export let crossorigin: '' | 'anonymous' | 'use-credentials' | undefined = undefined;
	export let draggable: boolean | 'true' | 'false' | undefined = undefined;

	$: paddingBottom = 100;

	let lazyImgElement: Element;
	let mainImgElement: Element;
	let observer: IntersectionObserver;
	let intersected = false;

	onMount(() => {
		observer = new IntersectionObserver((entries, self) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					intersected = true;
					self.unobserve(lazyImgElement);
				}
			});
		}, options);
		observer.observe(lazyImgElement);

		return () => {
			if (observer) {
				observer.unobserve(lazyImgElement);
			}
		};
	});

	$: {
		if (aspectRatio) {
			const [width, height] = aspectRatio.split('/').map(Number);
			paddingBottom = (height / width) * 100;
		}
	}
</script>

<div
	class="myt-responsive myt-img"
	class:myt-img--absolute={absolute}
	class:myt-responsive--inline={inline}
	{...$$restProps}
>
	<div class="myt-responsive--sizer" style={`padding-bottom: ${paddingBottom}%;`}></div>

	{#if !intersected && lazySrc}
		<img
			class={`myt-img--img ${contentClass}`}
			src={lazySrc}
			{alt}
			bind:this={lazyImgElement}
			class:myt-img--img-cover={cover}
			class:myt-img--img-contain={contain}
		/>
	{/if}

	<img
		class={`myt-img--img ${contentClass}`}
		{src}
		{alt}
		bind:this={mainImgElement}
		class:myt-img--img-cover={cover}
		class:myt-img--img-contain={contain}
		class:none={!intersected && lazySrc}
		{crossorigin}
		{draggable}
		use:useLazyImage={{
			root: options.root,
			rootMargin: options.rootMargin,
			threshold: options.threshold
		}}
	/>

	{#if $$slots.placeholder}
		<div class="myt-img--placerholder">
			<slot name="placeholder" />
		</div>
	{/if}
</div>
