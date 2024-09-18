import { presets } from '$lib/presets/index.js';
import { formatBreakpoint } from '$lib/utils/format-class.js';

export const positionScreen = (screen: string) => {
	let css = '';

	for (const element of presets.position) {
		css += `${formatBreakpoint(screen)}d-${element} {\n`;
		css += `display: ${element};\n`;
		css += `};\n`;
	}
	return css;
};
