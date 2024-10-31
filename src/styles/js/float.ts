import { formatBreakpoint } from '$lib/utils/formater.js';
import { float } from './_constant.js';

export const floatClass = (breakpoint: string) => {
	let css = '';
	for (const element of float) {
		css += `${formatBreakpoint(breakpoint)}float-${element} {\n`;
		css += `float: ${element};\n`;
		css += `}\n`;
	}

	return css;
};
