export const presets = {
	display: [
		'none',
		'flex',
		'inline',
		'inline-block',
		'table',
		'table-cell',
		'table-row',
		'inline-flex',
		'grid'
	],
	position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
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
	rounded: {
		0: '0',
		sm: '0.125rem',
		default: '0.25rem',
		lg: '0.5rem',
		xl: '1.5rem',
		pill: '9999px',
		circle: '50%'
	},
	sizing: {
		height: ['auto', '100dvh', '0', '25%', '50%', '75%', '100%'],
		width: ['auto', '0', '25%', '50%', '75%', '100%']
	},
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
	},
	thresholds: {
		default: {
			device: 'default',
			description: 'start project',
			value: '0'
		},
		sm: {
			device: 'small',
			description: 'small to medium tablet',
			value: '640px'
		},
		md: {
			device: 'medium',
			description: 'large tablet to laptop',
			value: '768px'
		},
		lg: {
			device: 'large',
			description: 'laptop to desktop',
			value: '1024px'
		},
		xl: {
			device: 'extra large',
			description: '1080p to 1440p desktop',
			value: '1280px'
		},
		xxl: {
			device: 'extra extra large',
			description: '2k and ulta-wide ',
			value: '1536px'
		}
	},
	typography: {
		weight: {
			thin: 100,
			light: 300,
			regular: 400,
			medium: 500,
			bold: 700,
			black: 900
		},
		style: {
			xs: {
				size: '0.75rem',
				height: '1.667',
				spacing: '0.033em'
			},
			sm: {
				size: '0.875rem',
				height: '1.425',
				spacing: '0.02em'
			},
			md: {
				size: '1rem',
				height: '1.5',
				spacing: '0.03em'
			},
			lg: {
				size: '1rem',
				height: '1.75',
				spacing: '0.01em'
			},
			xl: {
				size: '1.25rem',
				height: '1.6',
				spacing: '0.01em'
			},
			'2xl': {
				size: '1.5rem',
				height: '1.333',
				spacing: 'normal'
			},
			'3xl': {
				size: '2.125rem',
				height: '1.175',
				spacing: '0.01em'
			},
			'4xl': {
				size: '3rem',
				height: '1.05',
				spacing: 'normal'
			},
			'5xl': {
				size: '3.75rem',
				height: '1',
				spacing: '-0.008em'
			},
			'6xl': {
				size: '6rem',
				height: '1',
				spacing: '-0.015em'
			}
		},
		align: ['start', 'end', 'center', 'justify', 'left', 'right'],
		transform: ['uppercase', 'lowercase', 'capitalize']
	}
};
