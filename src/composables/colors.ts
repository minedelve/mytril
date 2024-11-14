import { derived, writable, type Writable } from 'svelte/store';
import { _default } from './defaults.js';
import { x11Colors } from '$lib/styles/constant/x11.js';

const colors: Writable<{ [key: string]: string | { [key: string]: string } }> = writable(
	_default.theme.colors
);

export const setColors = (list: { [key: string]: string | { [key: string]: string } }) => {
	colors.set(list);
};

const colorFormatRegex = /^(?:[a-zA-Z]+)(?:\d+|A\d+)$/;

export const getColor = (color?: string) => {
	if (color) {
		if (
			color.includes('#') ||
			color.includes('rgb') ||
			color.includes('rgba') ||
			x11Colors.has(color.toLowerCase())
		)
			return color;
		if (colorFormatRegex.test(color)) {
			const colorFormatRegex = /^([a-zA-Z]+)(\d+|A\d+)$/;
			const match = color.match(colorFormatRegex);
			if (match) return `var(--${match[1]}-${match[2]})`;
		}

		return `var(--${color})`;
	}
	return undefined;
};

export const getColors = (color?: string) => {
	if (color) {
		return derived(colors, ($colors) => {
			if ($colors[color]) {
				// is a theme color
				return `var(--${color})`;
			} else if (color.includes('#') || color.includes('rgb') || color.includes('rgba')) {
				// is a hexa/rgb/rgba color
				return color;
			} else if (colorFormatRegex.test(color)) {
				const colorFormatRegex = /^([a-zA-Z]+)(\d+|A\d+)$/;
				const match = color.match(colorFormatRegex);
				// has material  / tailwind color
				if (match) {
					return `var(--${match[1]}-${match[2]})`;
				} else {
					return undefined;
				}
			} else if (color) {
				return color;
			} else {
				return undefined;
			}
		});
	} else {
		return undefined;
	}
};
