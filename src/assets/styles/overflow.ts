import { formatBreakpoint } from '$lib/utils/format-class.js';

export function overflowClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}overflow-${element} {\n`;
		css += `overflow: ${element};\n`;
		css += `}\n`;

		css += `${formatBreakpoint(breakpoint)}overflow-x-${element} {\n`;
		css += `overflow-x: ${element};\n`;
		css += `}\n`;

		css += `${formatBreakpoint(breakpoint)}overflow-y-${element} {\n`;
		css += `overflow-y: ${element};\n`;
		css += `}\n`;
	}

	return css;
}
