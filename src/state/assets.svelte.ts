import { x11Colors } from '$lib/state/utils/x11.js';

export function getAssets() {
	return {
		shape(params?: string) {
			if (params) {
				if (params === 'none') return 'rounded-0';
				return `rounded-${params}`;
			}
		},
		color(color?: string) {
			if (color) {
				if (
					color.includes('#') ||
					color.includes('rgb') ||
					color.includes('rgba') ||
					color.includes('oklch') ||
					x11Colors.has(color.toLowerCase())
				)
					return color;
				return `var(--color-${color})`;
			}
		}
	};
}
