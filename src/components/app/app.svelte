<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { createTheme } from '$lib/contexts/theme.svelte.js';

	let { children } = $props();

	const theme = createTheme();

	let value = $state({ count: 0 });
	setContext('counter', value);

	function toggle() {
		theme.update(theme.current === 'light' ? 'dark' : 'light');
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme.current);
	}

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<script>
		{
			const theme = localStorage.getItem('@mytril:theme');

			document.documentElement.classList.add(
				theme === 'system'
					? window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light'
					: theme
			);
		}
	</script>
</svelte:head>

{@render children()}

<button onclick={() => toggle()}>Change Theme current</button>
