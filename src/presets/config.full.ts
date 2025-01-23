import type { MytrilDefaultConfig } from '$lib/types/mytril.js';

export const configDefault: MytrilDefaultConfig = {
	themes: ['default'],
	colorScheme: 'system',
	defaultTheme: 'default',
	colors: {
		default: {
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
				container: { light: '#f1edec', dark: '#201f1f' },
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
	},
	display: {
		mobileBreakpoint: 'sm',
		thresholds: {
			none: 0,
			sm: 600,
			md: 840,
			lg: 1200,
			xl: 1600,
			xxl: 1920
		}
	}
};
