import { formatBreakpoint } from '$lib/utils/formater.js';
import { position } from './_constant.js';

export const positionClass = (screen: string) => {
	let css = '';
	for (const element of position) {
		css += `${formatBreakpoint(screen)}${element} {\n`;
		css += `position: ${element};\n`;
		css += `}\n`;
	}
	return css;
};
