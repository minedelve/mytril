<script lang="ts">
	import { persistedPackages } from '$lib/state/persisted.svelte.js';

	let { children } = $props();
	persistedPackages();

	$effect.pre(() => {
		const colorScheme = localStorage.getItem('@mytril:theme');

		console.log('CALL localstorage', colorScheme);
		console.log('CALL document class List ', document?.documentElement?.classList);
	});
</script>

<svelte:head>
	<script>
		{
			const colorScheme = localStorage.getItem('@mytril:theme');

			if (colorScheme) {
				document.documentElement.setAttribute(
					'mytril-theme',
					theme === 'system'
						? window.matchMedia('(prefers-color-scheme: dark)').matches
							? 'dark'
							: 'light'
						: theme
				);
			}
		}
	</script>
</svelte:head>

{@render children()}
