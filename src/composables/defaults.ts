export const _default = {
	theme: {
		defaultTheme: 'light',
		palette: 'material',
		colors: {
			primary: { light: '#1976D2', dark: '#2196F3' },
			secondary: { light: '#424242', dark: '#424242' },
			tertiary: { light: '#82B1FF', dark: '#FF4081' },
			text: { light: '#1d1b20', dark: '#e6e0e9' },
			'text-variant': { light: '#322f35', dark: '#e6e0e9' },
			'text-soft': { light: '#49454f', dark: '#cac4d0' },
			'text-mute': { light: '#79747e', dark: '#938f99' },
			surface: { light: '#FEF7FF', dark: '#141218' },
			'surface-variant': { light: '#E7E0EC', dark: '#49454F' },
			'surface-container': { light: '#F3EDF7', dark: '#211F26' },
			info: { light: '#2196F3', dark: '#2196F3' },
			success: { light: '#4CAF50', dark: '#4CAF50' },
			error: { light: '#FF5252', dark: '#FF5252' },
			warning: { light: '#FB8C00', dark: '#FB8C00' },
			shadow: { light: '#000000', dark: '#000000' },
			outline: { light: '#79747e', dark: '#938f99' }
		}
	},
	display: {
		mobileBreakpoint: 'sm',
		thresholds: {
			default: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536
		}
	},
	rounded: {
		0: '0',
		sm: '0.125rem',
		default: '0.25rem',
		lg: '0.5rem',
		xl: '1.5rem',
		pill: '9999px',
		circle: '50%'
	},
	typography: {
		family: {
			heading: 'Roboto, sans-serif',
			body: 'Roboto, sans-serif',
			code: 'Roboto Mono, monospace'
		},
		size: {
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
		}
	}
};
