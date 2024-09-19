import { formatBreakpoint } from '$lib/utils/format-class.js';

export function roundedRoot(values: { [key: string]: string }) {
	let css = ':root {\n';
	for (const [key, value] of Object.entries(values)) {
		css += `--a-rounded-${key}: ${value};\n`;
	}
	return (css += '}\n');
}

export function roundedClassName(screen: string, values: { [key: string]: string }) {
	let css = '';
	for (const [key, value] of Object.entries(values)) {
		css += className(screen, key, String(value));
	}
	return css;
}

const className = (breakpoint: string, key: string, value: string) => {
	let css = '';

	css += `${formatBreakpoint(breakpoint)}rounded${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-radius: ${value};\n`;
	css += `}\n`;
	// top
	css += `${formatBreakpoint(breakpoint)}rounded-t${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `}\n`;
	// top right
	css += `${formatBreakpoint(breakpoint)}rounded-tr${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `};\n`;
	// top left
	css += `${formatBreakpoint(breakpoint)}rounded-tl${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `}\n`;
	// bottom
	css += `${formatBreakpoint(breakpoint)}rounded-b${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `}\n`;
	// bottom right
	css += `${formatBreakpoint(breakpoint)}rounded-br${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `}\n`;
	// bottom left
	css += `${formatBreakpoint(breakpoint)}rounded-bl${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `}\n`;
	// left
	css += `${formatBreakpoint(breakpoint)}rounded-l${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `}\n`;
	// right
	css += `${formatBreakpoint(breakpoint)}rounded-r${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `}\n`;
	return css;
};
