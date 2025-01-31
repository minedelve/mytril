import type { MytrilDefaultConfig } from '$lib/types/mytril.js';

export const configDefault: MytrilDefaultConfig = {
	themes: ['default'],
	colorScheme: 'system',
	defaultTheme: 'default',
	colors: {
		default: {
			primary: {
				_default: { light: 'oklch(48.37% 0.003 197.07)', dark: 'oklch(100.00% 0.000 0)' },
				container: { light: 'oklch(100.00% 0.000 0)', dark: 'oklch(86.99% 0.000 0)' }
			},
			'on-primary': {
				_default: { light: 'oklch(100.00% 0.000 0)', dark: 'oklch(31.12% 0.003 197.01)' },
				container: { light: 'oklch(45.98% 0.002 247.87)', dark: 'oklch(36.96% 0.003 197.04)' }
			},
			secondary: {
				_default: { light: 'oklch(48.19% 0.000 0)', dark: 'oklch(82.82% 0.002 17.20)' },
				container: { light: 'oklch(92.65% 0.002 17.20)', dark: 'oklch(36.77% 0.000 0)' }
			},
			'on-secondary': {
				_default: { light: 'oklch(100.00% 0.000 0)', dark: 'oklch(30.92% 0.000 0)' },
				container: { light: 'oklch(40.91% 0.000 0)', dark: 'oklch(87.04% 0.002 67.80)' }
			},
			tertiary: {
				_default: { light: 'oklch(48.37% 0.003 197.07)', dark: 'oklch(100.00% 0.000 0)' },
				container: { light: 'oklch(100.00% 0.000 0)', dark: 'oklch(86.99% 0.000 0)' }
			},
			'on-tertiary': {
				_default: { light: 'oklch(100.00% 0.000 0)', dark: 'oklch(31.12% 0.003 197.01)' },
				container: { light: 'oklch(45.98% 0.002 247.87)', dark: 'oklch(36.96% 0.003 197.04)' }
			},
			error: {
				_default: { light: 'oklch(50.60% 0.193 27.70)', dark: 'oklch(83.83% 0.089 26.76)' },
				container: { light: 'oklch(91.83% 0.042 25.23)', dark: 'oklch(41.71% 0.170 27.38)' }
			},
			'on-error': {
				_default: { light: 'oklch(100.00% 0.000 0)', dark: 'oklch(32.75% 0.134 27.32)' },
				container: { light: 'oklch(23.60% 0.096 27.19)', dark: 'oklch(91.83% 0.042 25.23)' }
			},
			warning: {
				_default: { light: 'oklch(84.42% 0.172 84.93)', dark: 'oklch(94.67% 0.188 105.90)' },
				container: { light: 'oklch(98.37% 0.088 107.92)', dark: 'oklch(60.95% 0.130 72.30)' }
			},
			'on-warning': {
				_default: { light: 'oklch(0.00% 0.000 0)', dark: 'oklch(100.00% 0.000 0)' },
				container: { light: 'oklch(44.46% 0.108 56.79)', dark: 'oklch(98.37% 0.088 107.92)' }
			},
			success: {
				_default: { light: 'oklch(67.31% 0.162 144.21)', dark: 'oklch(82.94% 0.160 144.79)' },
				container: { light: 'oklch(99.92% 0.001 197.14)', dark: 'oklch(43.00% 0.145 142.77)' }
			},
			'on-success': {
				_default: { light: 'oklch(0.00% 0.000 0)', dark: 'oklch(100.00% 0.000 0)' },
				container: { light: 'oklch(26.44% 0.090 142.50)', dark: 'oklch(99.92% 0.001 197.14)' }
			},
			info: {
				_default: { light: 'oklch(65.82% 0.169 248.81)', dark: 'oklch(79.12% 0.129 231.71)' },
				container: { light: 'oklch(96.94% 0.045 196.44)', dark: 'oklch(42.83% 0.163 258.60)' }
			},
			'on-info': {
				_default: { light: 'oklch(0.00% 0.000 0)', dark: 'oklch(100.00% 0.000 0)' },
				container: { light: 'oklch(27.62% 0.157 263.91)', dark: 'oklch(96.94% 0.045 196.44)' }
			},
			background: { light: 'oklch(98.22% 0.004 17.23)', dark: 'oklch(18.79% 0.002 17.30)' },
			'on-background': { light: 'oklch(22.32% 0.002 17.27)', dark: 'oklch(91.48% 0.004 39.48)' },
			surface: {
				_default: { light: 'oklch(98.22% 0.004 17.23)', dark: 'oklch(18.79% 0.002 17.30)' },
				variant: { light: 'oklch(91.35% 0.003 197.10)', dark: 'oklch(34.56% 0.001 17.22)' },
				bright: { light: 'oklch(98.22% 0.004 17.23)', dark: 'oklch(34.56% 0.001 17.22)' },
				dim: { light: 'oklch(88.85% 0.004 17.24)', dark: 'oklch(18.79% 0.002 17.30)' },
				container: { light: 'oklch(94.89% 0.005 34.31)', dark: 'oklch(24.04% 0.002 17.26)' },
				tint: { light: 'oklch(48.37% 0.003 197.07)', dark: 'oklch(82.69% 0.001 286.37)' },
				'container-lowest': { light: 'oklch(100.00% 0.000 0)', dark: 'oklch(16.38% 0.000 0)' },
				'container-low': { light: 'oklch(96.62% 0.003 39.48)', dark: 'oklch(22.32% 0.002 17.27)' },
				'container-high': { light: 'oklch(93.11% 0.004 17.24)', dark: 'oklch(28.50% 0.000 0)' },
				'container-highest': {
					light: 'oklch(91.48% 0.004 39.48)',
					dark: 'oklch(32.60% 0.001 17.23)'
				}
			},
			'on-surface': {
				_default: { light: 'oklch(22.32% 0.002 17.27)', dark: 'oklch(91.48% 0.004 39.48)' },
				variant: { light: 'oklch(39.55% 0.004 219.59)', dark: 'oklch(82.76% 0.004 219.54)' }
			},
			outline: {
				_default: { light: 'oklch(56.93% 0.005 197.02)', dark: 'oklch(65.45% 0.004 219.55)' },
				variant: { light: 'oklch(82.76% 0.004 219.54)', dark: 'oklch(39.55% 0.004 219.59)' }
			},
			shadow: 'oklch(0.00% 0.000 0)',
			scrim: 'oklch(0.00% 0.000 0)'
		}
	},
	display: {
		mobileBreakpoint: 'sm',
		thresholds: {
			none: 0, // 0px
			xs: '28rem', //448px
			sm: '40rem', //640px
			md: '48rem', //768px
			lg: '64rem', //1024px
			xl: '80rem', //1280px
			'2xl': '96rem', //1536px
			'3xl': '112rem' //1792px
		}
	}
};
