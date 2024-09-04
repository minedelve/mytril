// import { convertJStoCSS } from '$lib/css-parser.js';
import { writable } from 'svelte/store';

export const useTheme = writable<string>('default');

if (typeof __MYTRIL_PLUGIN_PARAM__ !== 'undefined') {
	console.log('__MYTRIL_PLUGIN_PARAM__');
	useTheme.set(__MYTRIL_PLUGIN_PARAM__);
}

if (import.meta.hot) {
	import.meta.hot.on('special-update', async (data) => {
		// perform custom update
		console.log('HMR API special-update', data);
		// await convertJStoCSS
		useTheme.set(data?.theme?.defaultTheme);
		// await convertJStoCSS(data);
	});

	import.meta.hot.on('special-update-full-reload', async (data) => {
		// perform custom update
		console.log('HMR API special-update-full-reload', data);
		// await convertJStoCSS
		useTheme.set(data?.theme?.defaultTheme);
		// await convertJStoCSS(data);
	});

	// import.meta.hot.on('special-update-configserv', async (data) => {
	// 	// perform custom update
	// 	console.log('HMR API special-update-configserv', data);

	// 	useTheme.set(data?.theme?.defaultTheme);
	// });
}
