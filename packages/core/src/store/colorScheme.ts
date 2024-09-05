import { writable } from 'svelte/store';
import { BROWSER } from 'esm-env';

const value = '';

export const useTheme = writable(value);
let oldTheme = value;

export function setTheme(theme: string) {
	useTheme.subscribe((currentValue) => {
		oldTheme = currentValue;
	})();

	useTheme.set(theme);
}

useTheme.subscribe(($theme: string) => {
	if (!BROWSER) return;
	console.log('$theme', $theme);
	if (oldTheme !== '') document.documentElement.classList.remove(oldTheme);
	if ($theme !== '') document.documentElement.classList.add($theme);
});
