import { elevation } from './_constant.js';

export function elevationClass() {
	let css = '';
	for (const [index, value] of Object.entries(elevation)) {
		css += `.elevation-${index} {\n`;
		css += `box-shadow: ${value[0]} color-mix(in oklab, var(--shadow) 20%, transparent),
		${value[1]} color-mix(in oklab, var(--shadow) 14%, transparent),
		${value[2]} color-mix(in oklab, var(--shadow) 12%, transparent);\n`;
		css += `}\n`;
	}
	return css;
}
