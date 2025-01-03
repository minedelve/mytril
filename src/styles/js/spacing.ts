import { formatBreakpoint, formatClassName } from '$lib/utils/formater.js';
import { configDefault } from '../../presets/config.full.js';

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

export const spacingClass = (screen: string) => {
	let css = '';
	mark.map((className) => {
		for (const [key, value] of Object.entries(configDefault.assets!.spacing!)) {
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
};

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
	// inline-start
	css += `${formatBreakpoint(breakpoint)}${element?.name}s-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-inline-start: ${negative ? '-' : ''}${value};\n`;
	css += `}\n`;
	// inline-end
	css += `${formatBreakpoint(breakpoint)}${element?.name}e-${negative ? 'n' : ''}${formatClassName(key)} {\n`;
	css += `${element?.property}-inline-end: ${negative ? '-' : ''}${value};\n`;
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
