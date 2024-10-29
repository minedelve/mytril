import { formatBreakpoint } from '$lib/utils/format-class.js';

const position = ['static', 'relative', 'absolute', 'fixed', 'sticky'];

export function positionClass(screen: string) {
	let css = '';
	for (const element of position) {
		css += `${formatBreakpoint(screen)}${element} {\n`;
		css += `position: ${element};\n`;
		css += `}\n`;
	}
	return css;
}
