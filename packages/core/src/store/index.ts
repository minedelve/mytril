import { writable } from 'svelte/store';

export const useTheme = writable<string>('default');

if (typeof __MYTRIL_PLUGIN_PARAM__ !== 'undefined') {
	useTheme.set(__MYTRIL_PLUGIN_PARAM__);
}

// if (import.meta.hot) {
// 	import.meta.hot.accept(({ module }) => {
// 		// Mettre à jour le store lors de l'acceptation du nouveau module
// 		if (typeof module.__MYTRIL_PLUGIN_PARAM__ !== 'undefined') {
// 			useTheme.set(module.__MYTRIL_PLUGIN_PARAM__);
// 		}
// 	});
// }

if (import.meta.hot) {
	import.meta.hot.accept((newModule) => {
		console.log('esdks', newModule);
		if (newModule) {
			// newModule is undefined when SyntaxError happened
			console.log('updated: count is now ', newModule.__MYTRIL_PLUGIN_PARAM__);
		}
	});
}
