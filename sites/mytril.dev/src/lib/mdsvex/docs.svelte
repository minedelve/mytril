<script context="module">
	import { h1, h2, h3 } from './modules';
	export { h1, h2, h3 };
</script>

<script lang="ts">
	import Seo from '$lib/components/seo.svelte';
	import { onMount } from 'svelte';
	export let title;
	export let description;

	function wrapPreTags() {
		const preTags = document.querySelectorAll<HTMLPreElement>('pre');
		preTags.forEach((pre) => {
			const megaWrapper = document.createElement('div');
			megaWrapper.className = 'preview-code';

			const codeWrapper = document.createElement('div');
			codeWrapper.className = 'code-wrapper';

			pre.parentNode?.insertBefore(megaWrapper, pre);
			megaWrapper.appendChild(codeWrapper);
			codeWrapper.appendChild(pre);
		});
	}

	onMount(() => {
		wrapPreTags();
	});
</script>

<Seo {title} {description}/>

<article id="page" class="doc">
	<slot />
</article>

<style lang="postcss">
	article {
		padding: 32px 24px 96px;
		margin: 0 auto;
		max-width: 688px;
		position: relative;

		@media (min-width: 768px) {
			padding: 48px 32px 96px;
		}

		@media (min-width: 1280px) {
			min-width: 620px;
		}
	}
</style>
