import { formatBreakpoint } from '$lib/utils/format-class.js';

export function floatClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}float-${element} {\n`;
		css += `float: ${element};\n`;
		css += `}\n`;
	}

	return css;
}
