export const _defaultLegacy = {
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

export const _default = {
	themes: ['light', 'dark'],
	colors: {
		primary: {
			_default: { light: '#5d5f5f', dark: '#ffffff' },
			container: { light: '#ffffff', dark: '#d4d4d4' }
		},
		'on-primary': {
			_default: { light: '#ffffff', dark: '#2f3131' },
			container: { light: '#575859', dark: '#3e4040' }
		},
		secondary: {
			_default: { light: '#5e5e5e', dark: '#c8c6c6' },
			container: { light: '#e8e6e6', dark: '#3f3f3f' }
		},
		'on-secondary': {
			_default: { light: '#ffffff', dark: '#303030' },
			container: { light: '#4a4a4a', dark: '#d5d4d3' }
		},
		tertiary: {
			_default: { light: '#5d5f5f', dark: '#ffffff' },
			container: { light: '#ffffff', dark: '#d4d4d4' }
		},
		'on-tertiary': {
			_default: { light: '#ffffff', dark: '#2f3131' },
			container: { light: '#575859', dark: '#3e4040' }
		},
		error: {
			_default: { light: '#ba1a1a', dark: '#ffb4ab' },
			container: { light: '#ffdad6', dark: '#93000a' }
		},
		'on-error': {
			_default: { light: '#ffffff', dark: '#690005' },
			container: { light: '#410002', dark: '#ffdad6' }
		},
		warning: {
			_default: { light: '#FFC107', dark: '#fff43a' },
			container: { light: '#ffffb9', dark: '#b27400' }
		},
		'on-warning': {
			_default: { light: '#000000', dark: '#FFFFFF' },
			container: { light: '#7f4100', dark: '#ffffb9' }
		},
		success: {
			_default: { light: '#4CAF50', dark: '#7fe283' },
			container: { light: '#feffff', dark: '#006203' }
		},
		'on-success': {
			_default: { light: '#000000', dark: '#FFFFFF' },
			container: { light: '#002f00', dark: '#feffff' }
		},
		info: {
			_default: { light: '#2196F3', dark: '#54c9ff' },
			container: { light: '#d3ffff', dark: '#0049a6' }
		},
		'on-info': {
			_default: { light: '#000000', dark: '#FFFFFF' },
			container: { light: '#001673', dark: '#d3ffff' }
		},
		background: { light: '#fcf8f8', dark: '#141313' },
		'on-background': { light: '#1c1b1b', dark: '#e5e2e1' },
		surface: {
			_default: { light: '#fcf8f8', dark: '#141313' },
			variant: { light: '#e0e3e3', dark: '#3a3939' },
			bright: { light: '#fcf8f8', dark: '#3a3939' },
			dim: { light: '#ddd9d9', dark: '#141313' },
			container: { light: '', dark: '#201f1f' },
			tint: { light: '#5d5f5f', dark: '#c6c6c7' },
			'container-lowest': { light: '#ffffff', dark: '#0e0e0e' },
			'container-low': { light: '#f6f3f2', dark: '#1c1b1b' },
			'container-high': { light: '#ebe7e7', dark: '#2a2a2a' },
			'container-highest': { light: '#e5e2e1', dark: '#353434' }
		},
		'on-surface': {
			_default: { light: '#1c1b1b', dark: '#e5e2e1' },
			variant: { light: '#444748', dark: '#c4c7c8' }
		},
		outline: {
			_default: { light: '#747878', dark: '#8e9192' },
			variant: { light: '#c4c7c8', dark: '#444748' }
		},
		shadow: '#000000',
		scrim: '#000000'
	}
};
