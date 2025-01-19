import { writable } from 'svelte/store';
import { BROWSER } from 'esm-env';

export const colorScheme = writable('');

export function changeColorScheme(theme: string) {
	colorScheme.set(theme);
}

export function getColorScheme() {
	const storage = BROWSER ? localStorage : null;
	const value = storage == null ? void 0 : storage.getItem('@mytril:theme');

	if (value) {
		if (value === 'system') {
			colorScheme.set(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		} else {
			colorScheme.set(value ? 'light' : 'dark');
		}
	}
}
