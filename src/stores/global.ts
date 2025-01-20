import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';
const defaultValues = { theme: 'default', colorScheme: 'system' };
export const themeStore = writable(defaultValues);

function updateThemeStore(
	update: Partial<{ theme: string; colorScheme: 'system' | 'dark' | 'light' }>
) {
	themeStore.update((current) => {
		const newValues = { ...current, ...update };
		if (isBrowser) {
			const ref = document.documentElement.classList;
			document.documentElement.setAttribute('mytril-theme', newValues.theme);

			if (newValues.colorScheme === 'system') ref.remove('light', 'dark');
			else {
				ref.remove(newValues.colorScheme === 'dark' ? 'light' : 'dark');
				ref.add(newValues.colorScheme === 'dark' ? 'dark' : 'light');
			}

			localStorage.setItem('@mytril:theme', JSON.stringify(newValues));
		}
		return newValues;
	});
}

// alias
export function setTheme(theme: string) {
	updateThemeStore({ theme: theme });
}

export function setColorScheme(scheme: 'system' | 'dark' | 'light') {
	updateThemeStore({ colorScheme: scheme });
}
