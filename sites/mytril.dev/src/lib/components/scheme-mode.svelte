<script lang="ts">
	import { browser } from '$app/environment';
	import { colorScheme, setColorScheme } from '$lib/store/app';
	import Icon from '@iconify/svelte';

	function handleScheme(scheme: string) {
		setColorScheme(scheme);
		localStorage.setItem('color-scheme', scheme);
	}
</script>

<button on:click={() => handleScheme($colorScheme === 'dark' ? 'light' : 'dark')}>
	{#if browser}
		{#if $colorScheme === 'dark'}
			<Icon icon="ph:sun-bold" class="darkmode-icon" />
		{:else}
			<Icon icon="material-symbols:dark-mode" class="darkmode-icon" />
		{/if}
	{/if}
</button>

<style lang="postcss">
	button {
		text-decoration: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--c-text-2);
		transition: color 0.5s;
		height: 36px;
		border: 0;
		background-color: transparent;

		&:hover {
			color: var(--c-text-1);
			transition: color 0.25s;
		}
	}

	button :global(svg) {
		fill: currentColor;
		height: 24px;
		width: 24px;
	}
</style>
