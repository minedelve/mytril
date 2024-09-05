<script lang="ts">
	import { page } from '$app/stores';
	import { navigation, packageLink } from '$lib/store/router';
	import { capitalize } from 'mytril-tools';
	import Icon from '@iconify/svelte';
	import SchemeMode from './scheme-mode.svelte';
	import Social from './social.svelte';

	export let open: boolean = false;
	let nbLinks: number = 0;

	$: {
		nbLinks = $packageLink.length;
	}
</script>

<div class="nav-screen">
	<div class="container">
		<nav>
			<a href={'/'} on:click={() => (open = false)} class:active={$page.url.pathname === '/'}>
				{capitalize('homepage')}
			</a>
			{#each $navigation as navigation}
				<a
					href={navigation.path}
					on:click={() => (open = false)}
					class:active={$page.url.pathname.includes(navigation.path)}
				>
					{capitalize(navigation.name)}
				</a>
			{/each}
		</nav>
		{#if nbLinks > 0}
			<div class="package">
				{#each $packageLink as { path, name }}
					<a href={path} target="_blank" on:click={() => (open = false)}>
						{capitalize(name)}
						<Icon icon="mdi:external-link" />
					</a>
				{/each}
			</div>
		{/if}
		<div class="theme">
			<span>Appareance</span>
			<SchemeMode />
		</div>
		<Social />
	</div>
</div>

<style lang="postcss">
	.nav-screen {
		position: fixed;
		top: calc(var(--nav-height));
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: var(--c-bg);
		transition: background-color 0.5s;
		overflow-y: auto;
		z-index: 20;
	}

	.container {
		margin: 0 auto;
		padding: 24px 0 96px;
		max-width: 288px;
	}

	nav a {
		display: block;
		border-bottom: var(--border);
		padding: 12px 0 11px;
		line-height: 24px;
		font-size: 14px;
		font-weight: 500;
		color: var(--c-text-1);
		text-decoration: none;
		transition:
			border-color 0.5s,
			color 0.25s;

		&:hover,
		&.active {
			color: var(--c-brand);
		}
	}

	.package {
		flex-direction: column;
		padding: 4px 12px;
	}

	.theme,
	.package {
		align-items: center;
		background-color: var(--c-bg-soft);
		display: flex;
		justify-content: space-between;
		padding: 5px 14px;
		margin-top: 10px;
		margin-bottom: 10px;
		border-radius: 10px;
	}

	.theme :global(button),
	.package :global(button) {
		&::before,
		&::after {
			width: 0 !important;
		}
	}

	/* .theme a, */
	.package a {
		display: block;
		border-radius: 6px;
		padding: 4px 12px;
		font-size: 13px;
		width: 95%;
		font-weight: 500;
		color: var(--c-text-1);
		white-space: nowrap;
		text-decoration: none;
		display: grid;
		align-items: center;
		justify-content: left;
		grid-template-columns: 1fr auto;
		transition:
			background-color 0.25s,
			color 0.25s;

		&:hover {
			color: var(--c-brand);
			background-color: var(--c-bg-mute);
		}
	}

	.theme :global(svg),
	.package :global(svg) {
		margin-left: 1rem;
	}
</style>
