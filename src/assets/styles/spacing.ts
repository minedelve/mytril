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

export function spacingClassName(screen: string, values: { [key: string]: string }) {
	let css = '';
	mark.map((className) => {
		for (const [key, value] of Object.entries(values)) {
			if (className?.property === 'margin' || className?.property === 'padding')
				css += classNameMP(screen, className, key, value);
			if (className?.property === 'gap') css += classNameG(screen, className, key, value);

			// negative className
			if (className?.property === 'margin' && value !== '0')
				css += classNameMP(screen, className, key, value, true);
		}
	});

	// auto margin
	css += classNameMP(screen, { name: 'm', property: 'margin' }, 'auto', 'auto');

	return css;
}

const classNameMP = (
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
	css += `};\n`;
	// bottom
	css += `${formatBreakpoint(breakpoint)}${element?.name}b-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-bottom: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// left
	css += `${formatBreakpoint(breakpoint)}${element?.name}l-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-left: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// right
	css += `${formatBreakpoint(breakpoint)}${element?.name}r-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-right: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// auto
	css += `${formatBreakpoint(breakpoint)}${element?.name}x-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-left: ${negative ? '-' : ''}${value};\n`;
	css += `${element?.property}-right: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	css += `${formatBreakpoint(breakpoint)}${element?.name}y-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-top: ${negative ? '-' : ''}${value};\n`;
	css += `${element?.property}-bottom: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// all
	css += `${formatBreakpoint(breakpoint)}${element?.name}a-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	return css;
};

const classNameG = (
	breakpoint: string,
	element: { name: string; property: string },
	key: string,
	value: string
) => {
	let css = '';
	// x
	css += `${formatBreakpoint(breakpoint)}${element?.name}x-${formatClassName(key)} {\n`;
	css += `column-${element?.property}: ${value};\n`;
	css += `};\n`;
	// y
	css += `${formatBreakpoint(breakpoint)}${element?.name}y-${formatClassName(key)} {\n`;
	css += `row-${element?.property}: ${value};\n`;
	css += `};\n`;
	// gap
	css += `${formatBreakpoint(breakpoint)}${element?.name}a-${formatClassName(key)} {\n`;
	css += `${element?.property}: ${value};\n`;
	css += `};\n`;
	return css;
};
