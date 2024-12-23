import { formatBreakpoint } from '$lib/utils/formater.js';
import { configDefault } from '../../presets/config.full.js';

export const overflowClass = (breakpoint: string) => {
	let css = '';
	for (const element of configDefault.assets!.overflow!) {
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
};
