// import { contextMytrilTheme } from '$lib/contexts/theme.svelte.js';
import { getAllContexts, setContext } from 'svelte';

export function mytrilContext() {
	const contexts = getAllContexts();

	// contextMytrilTheme();

	$effect.pre(() => {
		console.log('contexts', contexts);
	});

	const inital = (config: object) => {
		setContext('mytril', config);
	};

	return {
		inital
	};
}
