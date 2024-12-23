import { formatBreakpoint } from '$lib/utils/formater.js';
import { configDefault } from '../../presets/config.full.js';

export function displayClass(screen: string) {
	let css = '';
	for (const element of configDefault.assets!.display!) {
		css += `${formatBreakpoint(screen)}${element} {\n`;
		css += `display: ${element};\n`;
		css += `}\n`;
	}
	return css;
}
