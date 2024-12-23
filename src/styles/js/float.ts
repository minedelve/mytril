import { formatBreakpoint } from '$lib/utils/formater.js';
import { configDefault } from '../../presets/config.full.js';

export const floatClass = (breakpoint: string) => {
	let css = '';
	for (const element of configDefault.assets!.float!) {
		css += `${formatBreakpoint(breakpoint)}float-${element} {\n`;
		css += `float: ${element};\n`;
		css += `}\n`;
	}

	return css;
};
