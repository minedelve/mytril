import { writable } from 'svelte/store';

export const useTheme = writable<string>('default');

if (typeof __MY_PLUGIN_PARAM__ !== 'undefined') {
	useTheme.set(__MY_PLUGIN_PARAM__);
}
