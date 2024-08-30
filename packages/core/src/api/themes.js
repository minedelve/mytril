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
			light: '--c-gray-10',
			dark: '--c-gray-0'
		},
		{
			name: 'text',
			css: '--c-text',
			light: '--c-gray-7',
			dark: '--c-gray-3'
		},
		{
			name: 'text soft',
			css: '--c-text-soft',
			light: '--c-gray-5',
			dark: '--c-gray-4'
		},
		{
			name: 'text mute',
			css: '--c-text-mute',
			light: '--c-gray-4',
			dark: '--c-gray-5'
		},
		{
			name: 'text code',
			css: '--c-text-code',
			light: '--c-gray-8',
			dark: '--c-gray-3'
		}
	],
	background: [
		{
			name: 'bg',
			css: '--c-bg',
			light: '--c-neutral-0',
			dark: '--c-neutral-10'
		},
		{
			name: 'bg soft',
			css: '--c-bg-soft',
			light: '--c-neutral-1',
			dark: '--c-neutral-9'
		},
		{
			name: 'bg mute',
			css: '--c-bg-mute',
			light: '--c-neutral-2',
			dark: '--c-neutral-8'
		}
	],
	state: [
		{
			name: 'info',
			css: '--c-info',
			light: '--c-blue-5',
			dark: '--c-blue-4'
		},
		{
			name: 'success',
			css: '--c-success',
			light: '--c-green-5',
			dark: '--c-green-4'
		},
		{
			name: 'error',
			css: '--c-error',
			light: '--c-red-5',
			dark: '--c-red-4'
		},
		{
			name: 'warning',
			css: '--c-warning',
			light: '--c-yellow-5',
			dark: '--c-yellow-4'
		}
	]
};
