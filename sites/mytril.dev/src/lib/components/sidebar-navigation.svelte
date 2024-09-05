<script lang="ts">
	import { page } from '$app/stores';
	import { docs } from '$lib/store/router';
	import { capitalize } from 'mytril-tools';
	import { eventNoScroll } from '$lib/utils';

	export let open: boolean = false;
	$: innerWidth = 0;

	$: {
		if (innerWidth) open = false;
	}

	$: {
		if (open) eventNoScroll('active');
		else eventNoScroll('disable');
	}
</script>

<svelte:window bind:innerWidth />

{#if open}
	<button class="backdrop" on:click={() => (open = false)} />
{/if}

<aside class:aside-open={open}>
	<nav>
		{#each $docs as docs}
			<div class="grip">
				<section>
					<h2>{capitalize(docs.section)}</h2>
					{#each docs.routes as link}
						<a
							href={link.path}
							on:click={() => (open = false)}
							class:active={$page.url.pathname.includes(link.path)}
						>
							{capitalize(link.name)}
						</a>
					{/each}
				</section>
			</div>
		{/each}
	</nav>
</aside>

<style lang="postcss">
	aside {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		border-right: var(--border);
		overflow-x: hidden;
		overflow-y: auto;
		height: 100vh;
		width: var(--sidebar-width-mobile);
		background-color: var(--c-bg);
		transform: translate(-100%);
		transition:
			background-color 0.5s,
			opacity 0.5s,
			transform 0.3s ease;
		z-index: 10;

		&.aside-open {
			opacity: 1;
			visibility: visible;
			transform: translate(0);
			transition:
				background-color 0.5s,
				opacity 0.25s,
				transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
		}

		& nav {
			padding-top: 24px;
			outline: 0;
			width: 200px;
			margin: 0 auto;
		}

		& section {
			color: var(--c-text-2);
			& h2 {
				padding: 4px 0;
				line-height: 20px;
				font-size: 13px;
				font-weight: 600;
				color: var(--c-text-1);
				transition: color 0.5s;
			}

			& a {
				line-height: 20px;
				font-size: 13px;
				font-weight: 500;
				transition: color 0.5s;
				display: block;
				padding: 4px 0;
				color: inherit;
				text-decoration: inherit;

				&.active {
					font-weight: 600;
					color: var(--c-brand);
					transition: color 0.25s;
				}

				&:hover {
					color: var(--c-text-1);
					transition: color 0.25s;
				}
			}
		}
	}

	button {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #0009;
		transition: opacity 1s;
		border: none;
		z-index: 9;
	}

	@media (min-width: 960px) {
		aside {
			top: var(--nav-bar-height);
			height: calc(100vh - var(--nav-bar-height));
			width: var(--sidebar-width-small);

			opacity: 1;
			visibility: visible;
			transform: translate(0);
			transition:
				background-color 0.5s,
				opacity 0.25s,
				transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
		}
	}
</style>
