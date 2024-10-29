import { writable } from 'svelte/store';

export const rounded = {
	0: '0',
	sm: '0.125rem',
	default: '0.25rem',
	lg: '0.5rem',
	xl: '1.5rem',
	pill: '9999px',
	circle: '50%'
};

export const getBorderRadius = writable(rounded);
