<script lang="ts">
	import AppBar from '$lib/components/app-bar.svelte';
	import AsideSummary from '$lib/components/aside-summary.svelte';
	import Sidebar from '$lib/components/sidebar-navigation.svelte';
	import Toolbar from '$lib/components/toolbar.svelte';

	$: open = false;
</script>

<AppBar />

<div class="main">
	<Sidebar bind:open />
	<div class="content">
		<Toolbar bind:open />
		<slot />
	</div>
	<AsideSummary />
</div>

<style lang="postcss">
	.main {
		display: grid;
		grid-template-columns: 1fr;
		/* */

		& > div {
			/* border-right: var(--border); */
			min-height: calc(100vh - var(--nav-height));
		}

		@media (min-width: 960px) {
			& .content {
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
