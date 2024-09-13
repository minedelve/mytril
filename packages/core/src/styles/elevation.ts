import { presets } from '$lib/presets/index.js';

export const elevationRoot = () => {
	let css = '';

	css += ':root {\n';
	for (const [index, value] of Object.entries(presets.elevation)) {
		css += `--a-elevation-${index}: ${value[0]} color-mix(in oklab, var(--c-shadow) 20%, transparent),
		${value[1]} color-mix(in oklab, var(--c-shadow) 14%, transparent),
		${value[2]} color-mix(in oklab, var(--c-shadow) 12%, transparent);\n`;
	}
	css += '};\n';

	return css;
};

export const elevationGlobal = () => {
	let css = '';

	for (const [index, value] of Object.entries(presets.elevation)) {
		css += `.elevation-${index} {\n`;
		css += `box-shadow: ${value[0]} color-mix(in oklab, var(--c-shadow) 20%, transparent),
		${value[1]} color-mix(in oklab, var(--c-shadow) 14%, transparent),
		${value[2]} color-mix(in oklab, var(--c-shadow) 12%, transparent);\n`;
		css += `};\n`;
	}

	return css;
};
