import { formatBreakpoint } from '$lib/utils/formater.js';
import { display } from './_constant.js';

export function displayClass(screen: string) {
	let css = '';
	for (const element of display) {
		css += `${formatBreakpoint(screen)}${element} {\n`;
		css += `display: ${element};\n`;
		css += `}\n`;
	}
	return css;
}
