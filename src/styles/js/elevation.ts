import { configDefault } from '../../presets/config.full.js';

export function elevationClass() {
	let css = '';
	for (const [index, value] of Object.entries(configDefault.assets!.elevation!)) {
		css += `.elevation-${index} {\n`;
		css += `box-shadow: ${value[0]} color-mix(in oklab, var(--myt-color-shadow) 20%, transparent),
		${value[1]} color-mix(in oklab, var(--myt-color-shadow) 14%, transparent),
		${value[2]} color-mix(in oklab, var(--myt-color-shadow) 12%, transparent);\n`;
		css += `}\n`;
	}
	return css;
}
