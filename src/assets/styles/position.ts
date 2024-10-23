import { formatBreakpoint } from '$lib/utils/format-class.js';

export function positionClassName(screen: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(screen)}${element} {\n`;
		css += `position: ${element};\n`;
		css += `}\n`;
	}
	return css;
}
