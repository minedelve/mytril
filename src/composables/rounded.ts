import { writable } from 'svelte/store';
import { _default } from './defaults.js';

export const rounded = writable(_default.rounded);

export const getRounded = (rounded?: string) => {
	if (rounded) {
		if (/^[0-9]/.test(rounded)) return rounded;

		if (rounded === 'md') return `var(--rounded)`;
		else return `var(--rounded-${rounded})`;
	}
	return undefined;
};
