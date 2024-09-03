import { writable } from 'svelte/store';

export const useTheme = writable<string>('default');

if (typeof __MYTRIL_PLUGIN_PARAM__ !== 'undefined') {
	useTheme.set(__MYTRIL_PLUGIN_PARAM__);
}
