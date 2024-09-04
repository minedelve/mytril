import { writable } from 'svelte/store';
import { BROWSER } from 'esm-env';

const value = 'light';

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
	document.documentElement.classList.remove(oldTheme);
	document.documentElement.classList.add($theme);
});
