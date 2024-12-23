import type { MytrilConfig } from '$lib/types/mytril.js';

export const configDefault: MytrilConfig = {
	themes: ['light', 'dark'],
	defaultTheme: 'light',
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
	},
	shape: {
		none: '0',
		sm: '4px',
		md: '8px',
		lg: '16px',
		xl: '24px',
		pill: '9999px',
		circle: '50%'
	},
	typography: {
		fontFamily: {
			heading: 'Roboto, sans-serif',
			title: 'Roboto, sans-serif',
			body: 'Roboto, sans-serif',
			code: 'Roboto Mono, monospace'
		},
		fontWeight: {
			thin: 100,
			light: 300,
			regular: 400,
			medium: 500,
			bold: 700,
			black: 900
		},
		fontAlign: ['start', 'end', 'center', 'justify', 'left', 'right'],
		fontTransform: ['uppercase', 'lowercase', 'capitalize'],
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.25rem',
			xl: '1.5rem',
			'2xl': '1.75rem',
			'3xl': '2.125rem',
			'4xl': '3rem',
			'5xl': '3.75rem',
			'6xl': '4.75em',
			'7xl': '6rem'
		}
	},
	assets: {
		display: [
			'none',
			'flex',
			'inline',
			'inline-block',
			'table',
			'table-cell',
			'table-row',
			'inline-flex',
			'block',
			'grid'
		],
		elevation: {
			0: ['0rem 0rem 0rem 0rem', '0rem 0rem 0rem 0rem', '0rem 0rem 0rem 0rem'],
			1: [
				'0rem 0.125rem 0.0625rem -0.0625rem',
				'0rem 0.0625rem 0.0625rem 0rem',
				'0rem 0.0625rem 0.1875rem 0rem'
			],
			2: [
				'0rem 0.1875rem 0.0625rem -0.125rem',
				'0rem 0.125rem 0.125rem 0rem',
				'0rem 0.0625rem 0.3125rem 0rem'
			],
			3: [
				'0rem 0.1875rem 0.1875rem -0.125rem',
				'0rem 0.1875rem 0.25rem 0rem',
				'0rem 0.0625rem 0.5rem 0rem'
			],
			4: [
				'0rem 0.125rem 0.25rem -0.0625rem',
				'0rem 0.25rem 0.3125rem 0rem',
				'0rem 0.0625rem 0.625rem 0rem'
			],
			5: [
				'0rem 0.1875rem 0.3125rem -0.0625rem',
				'0rem 0.3125rem 0.5rem 0rem',
				'0rem 0.0625rem 0.875rem 0rem'
			],
			6: [
				'0rem 0.1875rem 0.3125rem -0.0625rem',
				'0rem 0.375rem 0.625rem 0rem',
				'0rem 0.0625rem 1.125rem 0rem'
			],
			7: [
				'0rem 0.25rem 0.3125rem -0.125rem',
				'0rem 0.4375rem 0.625rem 0.0625rem',
				'0rem 0.125rem 1rem 0.0625rem'
			],
			8: [
				'0rem 0.3125rem 0.3125rem -0.1875rem',
				'0rem 0.5rem 0.625rem 0.0625rem',
				'0rem 0.1875rem 0.875rem 0.125rem'
			],
			9: [
				'0rem 0.3125rem 0.375rem -0.1875rem',
				'0rem 0.5625rem 0.75rem 0.0625rem',
				'0rem 0.1875rem 1rem 0.125rem'
			],
			10: [
				'0rem 0.375rem 0.375rem -0.1875rem',
				'0rem 0.625rem 0.875rem 0.0625rem',
				'0rem 0.25rem 1.125rem 0.1875rem'
			],
			11: [
				'0rem 0.375rem 0.4375rem -0.25rem',
				'0rem 0.6875rem 0.9375rem 0.0625rem',
				'0rem 0.25rem 1.25rem 0.1875rem'
			],
			12: [
				'0rem 0.4375rem 0.5rem -0.25rem',
				'0rem 0.75rem 1.0625rem 0.125rem',
				'0rem 0.3125rem 1.375rem 0.25rem'
			],
			13: [
				'0rem 0.4375rem 0.5rem -0.25rem',
				'0rem 0.8125rem 1.1875rem 0.125rem',
				'0rem 0.3125rem 1.5rem 0.25rem'
			],
			14: [
				'0rem 0.4375rem 0.5625rem -0.25rem',
				'0rem 0.875rem 1.3125rem 0.125rem',
				'0rem 0.3125rem 1.625rem 0.25rem'
			],
			15: [
				'0rem 0.5rem 0.5625rem -0.3125rem',
				'0rem 0.9375rem 1.375rem 0.125rem',
				'0rem 0.375rem 1.75rem 0.3125rem'
			],
			16: [
				'0rem 0.5rem 0.625rem -0.3125rem',
				'0rem 1rem 1.5rem 0.125rem',
				'0rem 0.375rem 1.875rem 0.3125rem'
			],
			17: [
				'0rem 0.5rem 0.6875rem -0.3125rem',
				'0rem 1.0625rem 1.625rem 0.125rem',
				'0rem 0.375rem 2rem 0.3125rem'
			],
			18: [
				'0rem 0.5625rem 0.6875rem -0.3125rem',
				'0rem 1.125rem 1.75rem 0.125rem',
				'0rem 0.4375rem 2.125rem 0.375rem'
			],
			19: [
				'0rem 0.5625rem 0.75rem -0.375rem',
				'0rem 1.1875rem 1.8125rem 0.125rem',
				'0rem 0.4375rem 2.25rem 0.375rem'
			],
			20: [
				'0rem 0.625rem 0.8125rem -0.375rem',
				'0rem 1.25rem 1.9375rem 0.1875rem',
				'0rem 0.5rem 2.375rem 0.4375rem'
			],
			21: [
				'0rem 0.625rem 0.8125rem -0.375rem',
				'0rem 1.3125rem 2.0625rem 0.1875rem',
				'0rem 0.5rem 2.5rem 0.4375rem'
			],
			22: [
				'0rem 0.625rem 0.875rem -0.375rem',
				'0rem 1.375rem 2.1875rem 0.1875rem',
				'0rem 0.5rem 2.625rem 0.4375rem'
			],
			23: [
				'0rem 0.6875rem 0.875rem -0.4375rem',
				'0rem 1.4375rem 2.25rem 0.1875rem',
				'0rem 0.5625rem 2.75rem 0.5rem'
			],
			24: [
				'0rem 0.6875rem 0.9375rem -0.4375rem',
				'0rem 1.5rem 2.375rem 0.1875rem',
				'0rem 0.5625rem 2.875rem 0.5rem'
			]
		},
		flex: [
			'1 1 auto',
			'1 1 0%',
			'1 0 0%',
			'0 1 auto',
			'0 0 auto',
			'1 1 0%',
			'1 1 100%',
			'1 0 0%',
			'1 0 100%',
			'0 1 0%',
			' 0 1 100%',
			' 0 0 0%',
			'0 0 100%'
		],
		flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
		justify: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
		align: ['start', 'end', 'center', 'baseline', 'stretch'],
		alignSelf: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'auto'],
		alignContent: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'auto'],
		wrap: ['wrap', 'wrap-reverse', 'nowrap'],
		order: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
		offset: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		shrink: [0, 1],
		grow: [0, 1],
		float: ['left', 'right', 'start', 'end', 'none'],
		overflow: ['auto', 'hidden', 'visible'],
		position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
		height: ['auto', '100dvh', '0', '25%', '50%', '75%', '100%'],
		width: ['auto', '0', '25%', '50%', '75%', '100%'],
		spacing: {
			px: '1px',
			0: '0px',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem'
		}
	}
};
