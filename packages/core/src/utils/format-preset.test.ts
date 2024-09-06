import { describe, it, expect } from 'vitest';
import { formatPresetConfig } from './format-preset.js';
import { themes } from '../api/index.js';

type PresetColors = Record<string, { light: string; dark: string }>;

describe('formatPresetConfig', () => {
	it('should format colors correctly from themes configuration', () => {
		const result = formatPresetConfig(themes);
		const expectedOutput: PresetColors = {
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
		expect(result).toEqual(expectedOutput);
	});

	it('should handle an empty configuration', () => {
		const result = formatPresetConfig({ palette: [], typography: [], background: [], state: [] });
		expect(result).toEqual({});
	});
});
