<script lang="ts">
	import { BROWSER } from 'esm-env';
	import { persistedPackages } from '$lib/state/persisted.svelte.js';
	import { themeStore, updateThemeStore } from '$lib/stores/theme.js';
	import { hasDisplayScreen } from '$lib/state/device.svelte.js';
	import type { AppProps } from '$lib/types/component.js';

	let { children, breakpoints = { mobile: '28rem', tablet: '48rem', laptop: '64rem' } }: AppProps =
		$props();
	const screen = hasDisplayScreen();

	persistedPackages();

	$effect.pre(() => {
		if (!BROWSER) return;
		screen.display(breakpoints);
		const local = localStorage.getItem('@mytril:theme');

		if (local !== null) {
			const localParse = JSON.parse(local);
			const { theme: currentTheme, colorScheme: currentScheme } = $themeStore;

			if (localParse.theme !== currentTheme || localParse.colorScheme !== currentScheme) {
				updateThemeStore({ theme: localParse.theme, colorScheme: localParse.colorScheme });
			}
		}
	});
</script>

<svelte:head>
	<script>
		{
			const local = localStorage.getItem('@mytril:theme');
			const localParse = local ? JSON.parse(local) : undefined;
			if (localParse) {
				document.documentElement.classList.add(
					localParse.colorScheme === 'system'
						? window.matchMedia('(prefers-color-scheme: dark)').matches
							? 'dark'
							: 'light'
						: localParse.colorScheme
				);
			}
			document.documentElement.setAttribute(
				'mytril-theme',
				(localParse && localParse.theme && localParse.theme) || 'default'
			);
		}
	</script>
</svelte:head>

{@render children?.()}
