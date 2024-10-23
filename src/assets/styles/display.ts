import { formatBreakpoint } from '$lib/utils/format-class.js';

export function displayClassName(screen: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(screen)}${element} {\n`;
		css += `display: ${element};\n`;
		css += `}\n`;
	}
	return css;
}
