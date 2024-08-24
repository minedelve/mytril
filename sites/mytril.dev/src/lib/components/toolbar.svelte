<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import BtnText from './btn-text.svelte';

	export let open: boolean;
	let headings: any[] = [];
	$: openSummary = false as boolean;

	$: {
		if (open) openSummary = false;

		if (open) {
			if (browser && $page.url.pathname) {
				const pageElement = document.getElementById('page');
				if (pageElement) {
					headings = Array.from(pageElement.querySelectorAll('h2, h3')).map((heading) => ({
						id: heading.id,
						text: heading.textContent,
						level: heading.tagName.toLowerCase()
					}));
				}
			}
		}
	}
</script>

<div class="toolbar">
	<BtnText on:click={() => (open = open ? false : true)}>
		<Icon icon="heroicons-outline:menu-alt-2" /> Menu
	</BtnText>
	<BtnText on:click={() => (openSummary = openSummary ? false : true)}>
		On this page
		{#if openSummary}
			<Icon icon="oui:arrow-down" />
		{:else}
			<Icon icon="oui:arrow-right" />
		{/if}
	</BtnText>

	{#if openSummary}
		<div class="summary-width-mobile">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" class="top-link" on:click={() => (openSummary = false)}>Return to top</a>
			<ul>
				{#each headings as { id, text, level }}
					<li class={level}>
						<a href={`#${id}`} on:click={() => (openSummary = false)}>{text}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="postcss">
	.toolbar {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--c-bg);
		border-bottom: var(--border);
		transition:
			border-color 0.5s,
			background-color 0.5s;
		z-index: 1;

		& .summary-width-mobile {
			position: absolute;
			left: 20px;
			right: 20px;
			top: 60px;
			max-height: calc(100vh - 86px);
			overflow: hidden;
			overflow-y: auto;
			background-color: var(--c-bg);
			border: var(--border);
			border-radius: 8px;
			padding: 4px 20px 16px;
			box-shadow:
				0 12px 32px rgba(0, 0, 0, 0.1),
				0 2px 6px rgba(0, 0, 0, 0.08);

			& > a {
				font-size: 13px;
				font-weight: 500;
				text-decoration: inherit;
				color: var(--c-brand);
				transition: color 0.5s;
				line-height: 28px;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding: 6px 0;
				margin: 0 0 10px;
				border-bottom: var(--border);
			}

			& ul {
				list-style: none;
				margin: 0;
				padding: 0;

				& a {
					font-size: 14px;
					font-weight: 500;
					padding: 2px 0;
					text-decoration: inherit;
					color: var(--c-text-2);
					transition: color 0.5s;
					line-height: 28px;
					display: block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;

					&:hover {
						color: var(--c-text-1);
						transition: color 0.25s;
					}
				}
			}
		}

		@media (min-width: 960px) {
			display: none;
		}
	}
</style>
