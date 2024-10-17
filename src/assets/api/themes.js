export const colorScheme = ['light', 'dark'];

export const themes = {
	palette: [
		{
			name: 'primary',
			css: '--primary',
			light: '#3b8eed',
			dark: '#3b8eed'
		},
		{
			name: 'secondary',
			css: '--secondary',
			light: '#ff3e00',
			dark: '#ff3e00'
		},
		{
			name: 'tertiary',
			css: '--tertiary',
			light: 'var(--fuchsia-4)',
			dark: 'var(--fuchsia-3)'
		}
	],
	typography: [
		{
			name: 'text head',
			css: '--text-head',
			light: 'var(--gray-10)',
			dark: 'var(--gray-0)'
		},
		{
			name: 'text',
			css: '--text',
			light: 'var(--gray-7)',
			dark: 'var(--gray-3)'
		},
		{
			name: 'text soft',
			css: '--text-soft',
			light: 'var(--gray-5)',
			dark: 'var(--gray-4)'
		},
		{
			name: 'text mute',
			css: '--text-mute',
			light: 'var(--gray-4)',
			dark: 'var(--gray-5)'
		},
		{
			name: 'text code',
			css: '--text-code',
			light: 'var(--gray-8)',
			dark: 'var(--gray-3)'
		}
	],
	background: [
		{
			name: 'bg',
			css: '--bg',
			light: 'var(--neutral-0)',
			dark: 'var(--neutral-9)'
		},
		{
			name: 'bg soft',
			css: '--bg-soft',
			light: 'var(--neutral-1)',
			dark: 'var(--neutral-8)'
		},
		{
			name: 'bg mute',
			css: '--bg-mute',
			light: 'var(--neutral-2)',
			dark: 'var(--neutral-7)'
		}
	],
	state: [
		{
			name: 'info',
			css: '--info',
			light: 'var(--blue-5)',
			dark: 'var(--blue-4)'
		},
		{
			name: 'success',
			css: '--success',
			light: 'var(--green-5)',
			dark: 'var(--green-4)'
		},
		{
			name: 'error',
			css: '--error',
			light: 'var(--red-5)',
			dark: 'var(--red-4)'
		},
		{
			name: 'warning',
			css: '--warning',
			light: 'var(--yellow-5)',
			dark: 'var(--yellow-4)'
		}
	],
	global: [
		{
			name: 'shadow',
			css: '--shadow',
			light: 'var(--stone-10)',
			dark: 'var(--stone-10)'
		}
	]
};
