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

export function getLocalTheme(key: string, colorScheme: boolean) {
	const storage = BROWSER ? localStorage : null;
	const value = storage == null ? void 0 : storage.getItem(key);

	if (colorScheme) {
		useTheme.set(
			value
				? value
				: BROWSER
					? window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light'
					: 'light'
		);
	} else if (value) {
		useTheme.set(value);
	}
}

useTheme.subscribe(($theme: string) => {
	if (!BROWSER) return;
	if (oldTheme !== '') document.documentElement.classList.remove(oldTheme);
	if ($theme !== '') document.documentElement.classList.add($theme);
});
