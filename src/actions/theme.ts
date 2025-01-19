import { changeColorScheme, colorScheme } from '$lib/stores/global.js';
import { readable } from 'svelte/store';

export function changetheme(theme: string) {
	changeColorScheme(theme);
}

export function getTheme() {
	return readable(colorScheme);
}
