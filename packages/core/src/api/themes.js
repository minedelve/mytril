export const colorScheme = ['light', 'dark'];

export const themes = {
	palette: [
		{
			name: 'primary',
			css: '--c-primary',
			light: '#3b8eed',
			dark: '#3b8eed'
		},
		{
			name: 'secondary',
			css: '--c-secondary',
			light: '#ff3e00',
			dark: '#ff3e00'
		}
	],
	typography: [
		{
			name: 'text head',
			css: '--c-text-head',
			light: 'var(--c-gray-10)',
			dark: 'var(--c-gray-0)'
		},
		{
			name: 'text',
			css: '--c-text',
			light: 'var(--c-gray-7)',
			dark: 'var(--c-gray-3)'
		},
		{
			name: 'text soft',
			css: '--c-text-soft',
			light: 'var(--c-gray-5)',
			dark: 'var(--c-gray-4)'
		},
		{
			name: 'text mute',
			css: '--c-text-mute',
			light: 'var(--c-gray-4)',
			dark: 'var(--c-gray-5)'
		},
		{
			name: 'text code',
			css: '--c-text-code',
			light: 'var(--c-gray-8)',
			dark: 'var(--c-gray-3)'
		}
	],
	background: [
		{
			name: 'bg',
			css: '--c-bg',
			light: 'var(--c-neutral-0)',
			dark: 'var(--c-neutral-10)'
		},
		{
			name: 'bg soft',
			css: '--c-bg-soft',
			light: 'var(--c-neutral-1)',
			dark: 'var(--c-neutral-9)'
		},
		{
			name: 'bg mute',
			css: '--c-bg-mute',
			light: 'var(--c-neutral-2)',
			dark: 'var(--c-neutral-8)'
		}
	],
	state: [
		{
			name: 'info',
			css: '--c-info',
			light: 'var(--c-blue-5)',
			dark: 'var(--c-blue-4)'
		},
		{
			name: 'success',
			css: '--c-success',
			light: 'var(--c-green-5)',
			dark: 'var(--c-green-4)'
		},
		{
			name: 'error',
			css: '--c-error',
			light: 'var(--c-red-5)',
			dark: 'var(--c-red-4)'
		},
		{
			name: 'warning',
			css: '--c-warning',
			light: 'var(--c-yellow-5)',
			dark: 'var(--c-yellow-4)'
		}
	]
};
