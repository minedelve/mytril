import { formatBreakpoint } from '$lib/utils/formater.js';
import { configDefault } from '../../presets/config.full.js';

export const positionClass = (screen: string) => {
	let css = '';
	for (const element of configDefault.assets!.position!) {
		css += `${formatBreakpoint(screen)}${element} {\n`;
		css += `position: ${element};\n`;
		css += `}\n`;
	}
	return css;
};
