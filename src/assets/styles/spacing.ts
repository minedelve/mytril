import { formatBreakpoint, formatClassName } from '$lib/utils/format-class.js';

const mark = [
	{
		property: 'margin',
		name: 'm',
		negative: true
	},
	{
		property: 'padding',
		name: 'p',
		negative: false
	},
	{
		property: 'gap',
		name: 'g',
		negative: false
	}
];

const spacing = {
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
};

export function spacingClass(screen: string) {
	let css = '';
	mark.map((className) => {
		for (const [key, value] of Object.entries(spacing)) {
			if (className?.property === 'margin' || className?.property === 'padding')
				css += classSpacing(screen, className, key, value);
			if (className?.property === 'gap') css += classGap(screen, className, key, value);

			// negative className
			if (className?.property === 'margin' && value !== '0')
				css += classSpacing(screen, className, key, value, true);
		}
	});

	// auto margin
	css += classSpacing(screen, { name: 'm', property: 'margin' }, 'auto', 'auto');

	return css;
}

const classSpacing = (
	breakpoint: string,
	element: {
		name: string;
		property: string;
		negative?: boolean;
	},
	key: string,
	value: string,
	negative?: boolean
) => {
	let css = '';
	// top
	css += `${formatBreakpoint(breakpoint)}${element?.name}t-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-top: ${negative ? '-' : ''}${value};\n`;
	css += `}\n`;
	// bottom
	css += `${formatBreakpoint(breakpoint)}${element?.name}b-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-bottom: ${negative ? '-' : ''}${value};\n`;
	css += `}\n`;
	// left
	css += `${formatBreakpoint(breakpoint)}${element?.name}l-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-left: ${negative ? '-' : ''}${value};\n`;
	css += `}\n`;
	// right
	css += `${formatBreakpoint(breakpoint)}${element?.name}r-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-right: ${negative ? '-' : ''}${value};\n`;
	css += `}\n`;
	// auto
	css += `${formatBreakpoint(breakpoint)}${element?.name}x-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-left: ${negative ? '-' : ''}${value};\n`;
	css += `${element?.property}-right: ${negative ? '-' : ''}${value};\n`;
	css += `}\n`;
	css += `${formatBreakpoint(breakpoint)}${element?.name}y-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-top: ${negative ? '-' : ''}${value};\n`;
	css += `${element?.property}-bottom: ${negative ? '-' : ''}${value};\n`;
	css += `}\n`;
	// all
	css += `${formatBreakpoint(breakpoint)}${element?.name}a-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}: ${negative ? '-' : ''}${value};\n`;
	css += `}\n`;
	return css;
};

const classGap = (
	breakpoint: string,
	element: { name: string; property: string },
	key: string,
	value: string
) => {
	let css = '';
	// x
	css += `${formatBreakpoint(breakpoint)}${element?.name}x-${formatClassName(key)} {\n`;
	css += `column-${element?.property}: ${value};\n`;
	css += `}\n`;
	// y
	css += `${formatBreakpoint(breakpoint)}${element?.name}y-${formatClassName(key)} {\n`;
	css += `row-${element?.property}: ${value};\n`;
	css += `}\n`;
	// gap
	css += `${formatBreakpoint(breakpoint)}${element?.name}a-${formatClassName(key)} {\n`;
	css += `${element?.property}: ${value};\n`;
	css += `}\n`;
	return css;
};
