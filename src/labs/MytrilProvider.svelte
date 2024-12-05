<script lang="ts">
	/** eslint-disable @typescript-eslint/no-explicit-any */
	import { setContext, getAllContexts } from 'svelte';

	// props
	const { children } = $props();

	// state
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let theme = $state<null | any>(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const loadTheme = (config: any) => {
		console.log('loadTheme config / state theme', config, theme);
		theme = config;
	};

	const contexts = getAllContexts();

	setContext<(message: string) => void>('loadTheme', loadTheme);

	$effect(() => {
		console.log('all contexts', contexts);
	});
</script>

{@render children()}
