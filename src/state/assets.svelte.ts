import { rounded } from '$lib/composables/rounded.js';
import { get } from 'svelte/store';

export function getAssets() {
	return {
		shape(params?: string) {
			if (params && params in get(rounded)) {
				if (params === 'none') return 'rounded';
				return `rounded-${params}`;
			}
		},
		color(params?: string) {
			if (params) {
				if (
					params.includes('#') ||
					params.includes('rgb') ||
					params.includes('rgba') ||
					params.includes('var(')
				)
					return params;
				return `var(--myt-color-${params})`;
			}
		}
	};
}
