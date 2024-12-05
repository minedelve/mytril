import { getContext } from 'svelte';

export type MytrilThemeContextFn = (param: string) => void;

export const createMytrilTheme = () => {
	const loadTheme: MytrilThemeContextFn = getContext('loadTheme');

	return loadTheme;
};
