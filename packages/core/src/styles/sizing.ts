import { presets } from '$lib/presets/index.js';
import { formatBreakpoint, formatClassName } from '$lib/utils/format-class.js';

export const sizingScreen = (screen: string) => {
	let css = '';

	for (const property in presets.sizing) {
		if (property === 'width' || property === 'height') {
			for (const element of presets.sizing[property] as string[]) {
				if (property === 'height') {
					if (element.includes('dvh')) css += `${formatBreakpoint(screen)}h-full {\n`;
					else css += `${formatBreakpoint(screen)}h-${formatClassName(element)} {\n`;

					css += `height: ${element};\n`;
					css += `};\n`;
				}

				if (property === 'width') {
					css += `${formatBreakpoint(screen)}w-${formatClassName(element)} {\n`;
					css += `width: ${element};\n`;
					css += `};\n`;
				}
			}
		}
	}
	return css;
};
