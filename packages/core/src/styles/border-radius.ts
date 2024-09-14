import { presets } from '$lib/presets/index.js';
import { formatBreakpoint } from '$lib/utils/format-class.js';

export const roundedRoot = () => {
	let css = '';

	css += ':root {\n';
	for (const [key, value] of Object.entries(presets.rounded)) {
		css += `--a-rounded-${key}: ${value};\n`;
	}
	css += '};\n';

	return css;
};

export const roundedScreen = (screen: string) => {
	let css = '';

	for (const [key, value] of Object.entries(presets.rounded)) {
		css += makeCssClassName(screen, key, value);
	}
	return css;
};

const makeCssClassName = (breakpoint: string, key: string, value: string) => {
	let css = '';

	css += `${formatBreakpoint(breakpoint)}rounded${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-radius: ${value};\n`;
	css += `};\n`;
	// top
	css += `${formatBreakpoint(breakpoint)}rounded-t${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `};\n`;
	// top right
	css += `${formatBreakpoint(breakpoint)}rounded-tr${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `};\n`;
	// top left
	css += `${formatBreakpoint(breakpoint)}rounded-tl${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `};\n`;
	// bottom
	css += `${formatBreakpoint(breakpoint)}rounded-b${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `};\n`;
	// bottom right
	css += `${formatBreakpoint(breakpoint)}rounded-br${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `};\n`;
	// bottom left
	css += `${formatBreakpoint(breakpoint)}rounded-bl${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `};\n`;
	// left
	css += `${formatBreakpoint(breakpoint)}rounded-l${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `};\n`;
	// right
	css += `${formatBreakpoint(breakpoint)}rounded-r${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `};\n`;
	return css;
};
