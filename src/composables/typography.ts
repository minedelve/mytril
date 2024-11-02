import { writable } from 'svelte/store';

export const fontSize = {
	xs: '0.75rem',
	sm: '0.875rem',
	md: '1rem',
	lg: '1.25rem',
	xl: '1.5rem',
	'2xl': '1.75rem',
	'3xl': '2.125rem',
	'4xl': '3rem',
	'5xl': '3.75rem',
	'6xl': '6rem'
};

export const fontFamily = {
	heading: 'Roboto, sans-serif',
	body: 'Roboto, sans-serif',
	code: 'Roboto Mono, monospace'
};

export const getFontSize = writable(fontSize);
export const getFontFamily = writable(fontFamily);
