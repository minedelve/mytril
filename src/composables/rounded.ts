import { configDefault } from '$lib/presets/config.full.js';
import { writable } from 'svelte/store';

export const rounded = writable(configDefault.shape);

export const getRounded = (rounded?: string) => {
	if (rounded) {
		if (/^[0-9]/.test(rounded)) return rounded;

		return `var(--myt-shape-corner-${rounded})`;
	}
	return undefined;
};
