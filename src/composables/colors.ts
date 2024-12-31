import { writable, type Writable } from 'svelte/store';
import { x11Colors } from '$lib/styles/constant/x11.js';
import type { Colors } from '$lib/types/mytril.js';
import { configDefault } from '$lib/presets/config.full.js';

const colorFormatRegex = /^(?:[a-zA-Z]+)(?:\d+|A\d+)$/;
const colors: Writable<Colors> = writable(configDefault.colors);

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

		return `var(--myt-color-${color})`;
	}
	return undefined;
};
