import { browser } from '$app/environment';
import { colorScheme } from './state';

colorScheme.subscribe(($theme: string) => {
	if (!browser) return;
	document.documentElement.classList.remove('light', 'dark');
	document.documentElement.classList.add($theme);
});

export function setColorScheme(theme: string) {
	colorScheme.set(theme);
}
