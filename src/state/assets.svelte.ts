import { rounded } from '$lib/composables/rounded.js';
import { get } from 'svelte/store';

export function getAssets() {
	return {
		// shapeVar(params?: string) {
		// 	if (params && params in get(rounded)) return `var(--myt-shape-corner-${params})`;
		// 	return params;
		// },
		shape(params?: string) {
			if (params && params in get(rounded)) {
				if (params === 'none') return 'rounded';
				return `rounded-${params}`;
			}
		}
	};
}
