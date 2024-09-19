import { formatBreakpoint, formatClassName } from '$lib/utils/format-class.js';

export function sizingClassName(
	screen: string,
	values: { height: Array<string>; width: Array<string> }
) {
	let css = '';
	for (const property in values) {
		if (property === 'width' || property === 'height') {
			for (const element of values[property] as string[]) {
				if (property === 'height') {
					if (element.includes('dvh')) css += `${formatBreakpoint(screen)}h-full {\n`;
					else css += `${formatBreakpoint(screen)}h-${formatClassName(element)} {\n`;

					css += `height: ${element};\n`;
					css += `}\n`;
				}

				if (property === 'width') {
					css += `${formatBreakpoint(screen)}w-${formatClassName(element)} {\n`;
					css += `width: ${element};\n`;
					css += `}\n`;
				}
			}
		}
	}
	return css;
}
