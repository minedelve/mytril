import { formatBreakpoint, formatClassName } from '$lib/utils/format-class.js';

const height = ['auto', '100dvh', '0', '25%', '50%', '75%', '100%'];
const width = ['auto', '0', '25%', '50%', '75%', '100%'];

export function sizingClass(screen: string) {
	let css = '';

	for (const element of height) {
		if (element.includes('dvh')) css += `${formatBreakpoint(screen)}h-full {\n`;
		else css += `${formatBreakpoint(screen)}h-${formatClassName(element)} {\n`;

		css += `height: ${element};\n`;
		css += `}\n`;
	}
	for (const element of width) {
		css += `${formatBreakpoint(screen)}w-${formatClassName(element)} {\n`;
		css += `width: ${element};\n`;
		css += `}\n`;
	}

	return css;
}
