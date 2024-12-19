import { writable } from 'svelte/store';
import { _defaultLegacy } from './defaults.js';

export const rounded = writable(_defaultLegacy.rounded);

export const getRounded = (rounded?: string) => {
	if (rounded) {
		if (/^[0-9]/.test(rounded)) return rounded;

		if (rounded === 'md') return `var(--rounded)`;
		else return `var(--rounded-${rounded})`;
	}
	return undefined;
};
