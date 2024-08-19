<script lang="ts">
	import { page } from '$app/stores';
	import { navigation } from '$lib/store/router';
	import Icon from '@iconify/svelte';
	import logo from '$lib/assets/images/logo.webp';
	import menuAlt3 from '$lib/assets/icons/heroicons-solid:menu-alt-3.svg';
	import close from '$lib/assets/icons/material-symbols:close.svg';
	import SchemeMode from './scheme-mode.svelte';
	import NavMenu from './nav-menu.svelte';
	import Social from './social.svelte';
	import { capitalizeFirstLetter, eventNoScroll } from '$lib/utils';
	import Search from './search.svelte';
	import Versions from './versions.svelte';
	import VersionsMobile from './versions-mobile.svelte';

	export let app: boolean = false;
	let open: boolean = false;

	$: innerWidth = 0;

	$: {
		if (innerWidth) open = false;
	}
	$: {
		if (open) eventNoScroll('active');
		if (!open) eventNoScroll('disable');
	}
</script>

<svelte:window bind:innerWidth />

<header class:app>
	<div class="container">
		<a href="/" class="webapp-name">
			<img src={logo} alt="logo" />
			<span>Mytril</span>
		</a>

		<VersionsMobile />
		<Search />
		<div class="content screen">
			<nav>
				{#each $navigation as navigation}
					<a href={navigation.path} class:active={$page.url.pathname.includes(navigation.path)}>
						{capitalizeFirstLetter(navigation.name)}
					</a>
				{/each}
			</nav>

			<Versions />

			<SchemeMode />

			<Social />
		</div>
		<div class="content mobile">
			<button class="btn-nav-menu" on:click={() => (open = open ? false : true)}>
				{#if open}
					<!-- <Icon icon="material-symbols:close" /> -->
					<img src={close} alt="close" />
				{:else}
					<!-- <Icon icon="heroicons-solid:menu-alt-3" /> -->
					<img src={menuAlt3} alt="menu-alt-3" />
				{/if}
			</button>
		</div>
	</div>

	{#if open}
		<NavMenu bind:open />
	{/if}
</header>

<style lang="postcss">
	header {
		top: 0;
		left: 0;
		height: var(--nav-height);
		white-space: nowrap;
		transition:
			border-color 0.5s,
			background-color 0.5s;

		background-color: var(--c-bg);
		padding: 0 12px 0 12px;

		@media (min-width: 1320px) {
			padding: 0 20px;
		}

		&.app {
			position: sticky;
		}

		&:not(.app) {
			position: relative;
			border-bottom: var(--border);
		}

		.btn-nav-menu {
			text-decoration: inherit;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--c-text-2);
			transition: color 0.5s;
			width: 36px;
			height: 36px;
			border: 0;
			background-color: transparent;

			:global(svg),
			img {
				fill: currentColor;
				height: 26px;
				width: 26px;
				filter: var(--c-icon);
			}

			&:hover {
				color: var(--c-text-1);
				transition: color 0.25s;
			}
		}

		.webapp-name {
			display: flex;
			align-items: center;
			height: var(--nav-height);
			transition: opacity 0.25s;
			text-decoration: inherit;
			color: var(--c-text-1);

			img {
				position: relative;
				height: calc(var(--nav-height) - 1.15rem);
				/* filter: var(--c-logo); */
				transition: filter 0.25s;
			}

			span {
				font-size: 16px;
				font-weight: 500;
			}

			img + span {
				padding-left: 8px;
			}

			&:hover {
				opacity: 0.6;
			}
		}

		.content {
			display: flex;
			justify-content: flex-end;
			/* align-items: center;
			flex-grow: 1; */

			&.screen {
				display: none;
			}

			@media (min-width: 768px) {
				/* padding: 0 12px 0 20px; */
				&.screen {
					display: flex;
					align-items: center;
				}

				&.mobile {
					display: none;
				}
			}
		}

		.container {
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			align-items: center;
			/* max-width: var(--container-max-width); */

			@media (min-width: 960px) {
				/* padding: 0 12px 0 20px; */
			}

			@media (min-width: 1320px) {
				/* padding: 0 32px; */
			}
		}

		nav {
			a {
				display: block;
				padding: 0 12px;
				line-height: calc(var(--nav-height) - 1px);
				font-size: 13px;
				font-weight: 500;
				color: var(--c-text-1);
				transition: color 0.25s;
				white-space: nowrap;
				text-decoration: inherit;

				&:hover,
				&.active {
					color: var(--c-brand);
				}
			}
		}

		@media (min-width: 960px) {
			&:not(.app) {
				position: sticky;
				z-index: 11;
			}
		}
	}
</style>
