<script context="module">
	import { h1, h2, h3 } from './modules';
	export { h1, h2, h3 };
</script>

<script lang="ts">
	import Seo from '$lib/components/seo.svelte';
	
	import { onMount } from 'svelte';

	import AppBar from '$lib/components/app-bar.svelte';
	import AsideSummary from '$lib/components/aside-summary.svelte';
	import Sidebar from '$lib/components/sidebar-navigation.svelte';
	import Toolbar from '$lib/components/toolbar.svelte';

	$: open = false;

	export let title;
	// export let desc;

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

<Seo {title} />

<AppBar /> 


<div class="main">
	<Sidebar bind:open />
	<div class="content">
		<Toolbar bind:open />
		<article id="page" class="doc">
			<slot />
		</article>
	</div>
	<AsideSummary />
</div>



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

	.main {
		display: grid;
		grid-template-columns: 1fr;
		/* */

		& > div {
			/* border-right: var(--border); */
			min-height: calc(100vh - var(--nav-height));
		}

		@media (min-width: 960px) {
			&.content {
				padding-left: var(--sidebar-width-small);
				/* padding-left: calc((100vw - var(--container-max-width)) / 2 + var(--sidebar-width-small)); */
			}
		}

		@media (min-width: 1320px) {
			grid-template-columns: 1fr 290px;

			/* .content {
				max-width: var(--container-max-width);
				margin: 0 auto;
				padding-left: calc((100vw - var(--container-max-width)) / 2 + var(--sidebar-width-small));
			} */
		}

		/* @media (min-width: 1320px) {
			grid-template-columns: 1fr 290px;
		} */
	}
</style>
