<script lang="ts">
	import { browser } from '$app/environment';
	import { useTheme, setTheme } from 'mytril';
	import Icon from '@iconify/svelte';

	function handleScheme(scheme: string) {
		setTheme(scheme);
		localStorage.setItem('color-scheme', scheme);
	}
</script>

<button on:click={() => handleScheme($useTheme !== 'dark' ? 'dark' : 'light')}>
	{#if browser}
		{#if $useTheme === 'dark'}
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
		color: var(--c-text-soft);
		transition: color 0.5s;
		height: 36px;
		border: 0;
		background-color: transparent;
		cursor: pointer;

		&:hover {
			color: var(--c-text);
			transition: color 0.25s;
		}
	}

	button :global(svg) {
		fill: currentColor;
		height: 24px;
		width: 24px;
	}
</style>
