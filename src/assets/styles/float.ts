import { formatBreakpoint } from '$lib/utils/format-class.js';

const float = ['left', 'right', 'start', 'end', 'none'];

export function floatClass(breakpoint: string) {
	let css = '';
	for (const element of float) {
		css += `${formatBreakpoint(breakpoint)}float-${element} {\n`;
		css += `float: ${element};\n`;
		css += `}\n`;
	}

	return css;
}
