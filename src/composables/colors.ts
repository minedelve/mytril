import { writable, type Writable } from 'svelte/store';
import { _defaultLegacy } from './defaults.js';
import { x11Colors } from '$lib/styles/constant/x11.js';

const colorFormatRegex = /^(?:[a-zA-Z]+)(?:\d+|A\d+)$/;
const colors: Writable<{ [key: string]: string | { [key: string]: string } }> = writable(
	_defaultLegacy.theme.colors
);

export const setColors = (list: { [key: string]: string | { [key: string]: string } }) => {
	colors.set(list);
};

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
