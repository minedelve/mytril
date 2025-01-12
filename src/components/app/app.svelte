<script lang="ts">
	let { children } = $props();
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
