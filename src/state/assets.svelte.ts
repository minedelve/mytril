import { configDefault } from '$lib/presets/config.full.js';
import { x11Colors } from '$lib/styles/x11.js';

export function getAssets() {
	return {
		shape(params?: string) {
			if (params && params in configDefault.shape!) {
				if (params === 'none') return 'rounded';
				return `rounded-${params}`;
			}
		},
		color(color?: string) {
			if (color) {
				if (
					color.includes('#') ||
					color.includes('rgb') ||
					color.includes('rgba') ||
					x11Colors.has(color.toLowerCase())
				)
					return color;
				return `var(--myt-color-${color})`;
			}
		}
	};
}
