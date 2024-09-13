import { presets } from '$lib/presets/index.js';
import { formatBreakpoint, formatClassName } from '$lib/utils/format-class.js';

const spacingList = [
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

export const spacingScreen = (screen: string) => {
	let css = '';

	spacingList.map((_class) => {
		for (const [key, value] of Object.entries(presets.spacing)) {
			if (_class?.property === 'margin' || _class?.property === 'padding')
				css += makeCssClassName(screen, _class, key, value);
			if (_class?.property === 'gap') css += makeCssClassNameGap(screen, _class, key, value);

			// negative className
			if (_class?.property === 'margin' && value !== '0')
				css += makeCssClassName(screen, _class, key, value, true);
		}
	});

	// auto margin
	css += makeCssClassName(screen, { name: 'm', property: 'margin' }, 'auto', 'auto');

	return css;
};

const makeCssClassName = (
	breakpoint: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	element: any,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeCssClassNameGap = (breakpoint: string, element: any, key: string, value: string) => {
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
