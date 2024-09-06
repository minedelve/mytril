import { describe, it, expect } from 'vitest';
import { merge } from '../merge.js';

const themes = {
	primary: { light: '#3b8eed', dark: '#3b8eed' },
	secondary: { light: '#ff3e00', dark: '#ff3e00' },
	'text-head': { light: 'var(--c-gray-10)', dark: 'var(--c-gray-0)' },
	text: { light: 'var(--c-gray-7)', dark: 'var(--c-gray-3)' },
	'text-soft': { light: 'var(--c-gray-5)', dark: 'var(--c-gray-4)' },
	'text-mute': { light: 'var(--c-gray-4)', dark: 'var(--c-gray-5)' },
	'text-code': { light: 'var(--c-gray-8)', dark: 'var(--c-gray-3)' },
	bg: { light: 'var(--c-neutral-0)', dark: 'var(--c-neutral-10)' },
	'bg-soft': { light: 'var(--c-neutral-1)', dark: 'var(--c-neutral-9)' },
	'bg-mute': { light: 'var(--c-neutral-2)', dark: 'var(--c-neutral-8)' },
	info: { light: 'var(--c-blue-5)', dark: 'var(--c-blue-4)' },
	success: { light: 'var(--c-green-5)', dark: 'var(--c-green-4)' },
	error: { light: 'var(--c-red-5)', dark: 'var(--c-red-4)' },
	warning: { light: 'var(--c-yellow-5)', dark: 'var(--c-yellow-4)' }
};

const colors = {
	background: {
		light: '#ffffff',
		dark: '#ffffff',
		other: 'khjksdhqkjh'
	},
	primary: 'beige',
	secondary: {
		pipo: 'red'
	},
	success: {
		pipo: 'orange',
		gnome: 'pink'
	}
};

describe('merge', () => {
	it('should merge target and source correctly', () => {
		const result = merge(themes, colors);

		const expectedOutput = {
			primary: 'beige',
			secondary: { light: '#ff3e00', dark: '#ff3e00', pipo: 'red' },
			'text-head': { light: 'var(--c-gray-10)', dark: 'var(--c-gray-0)' },
			text: { light: 'var(--c-gray-7)', dark: 'var(--c-gray-3)' },
			'text-soft': { light: 'var(--c-gray-5)', dark: 'var(--c-gray-4)' },
			'text-mute': { light: 'var(--c-gray-4)', dark: 'var(--c-gray-5)' },
			'text-code': { light: 'var(--c-gray-8)', dark: 'var(--c-gray-3)' },
			bg: { light: 'var(--c-neutral-0)', dark: 'var(--c-neutral-10)' },
			'bg-soft': { light: 'var(--c-neutral-1)', dark: 'var(--c-neutral-9)' },
			'bg-mute': { light: 'var(--c-neutral-2)', dark: 'var(--c-neutral-8)' },
			info: { light: 'var(--c-blue-5)', dark: 'var(--c-blue-4)' },
			success: {
				light: 'var(--c-green-5)',
				dark: 'var(--c-green-4)',
				pipo: 'orange',
				gnome: 'pink'
			},
			error: { light: 'var(--c-red-5)', dark: 'var(--c-red-4)' },
			warning: { light: 'var(--c-yellow-5)', dark: 'var(--c-yellow-4)' },
			background: { light: '#ffffff', dark: '#ffffff', other: 'khjksdhqkjh' }
		};

		expect(result).toEqual(expectedOutput);
	});

	it('should return target unchanged if source is undefined', () => {
		const result = merge(themes, undefined);
		expect(result).toEqual(themes);
	});

	it('should handle an empty source without modifying target', () => {
		const result = merge(themes, {});
		expect(result).toEqual(themes);
	});
});
