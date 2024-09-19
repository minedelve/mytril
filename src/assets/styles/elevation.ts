export function elevationRoot(values: Array<string>) {
	let css = '';
	css += ':root {\n';
	for (const [index, value] of Object.entries(values)) {
		css += `--a-elevation-${index}: ${value[0]} color-mix(in oklab, var(--c-shadow) 20%, transparent),
		${value[1]} color-mix(in oklab, var(--c-shadow) 14%, transparent),
		${value[2]} color-mix(in oklab, var(--c-shadow) 12%, transparent);\n`;
	}
	css += '}\n';
	return css;
}

export function elevationClassName(values: Array<string>) {
	let css = '';
	for (const [index, value] of Object.entries(values)) {
		css += `.elevation-${index} {\n`;
		css += `box-shadow: ${value[0]} color-mix(in oklab, var(--c-shadow) 20%, transparent),
		${value[1]} color-mix(in oklab, var(--c-shadow) 14%, transparent),
		${value[2]} color-mix(in oklab, var(--c-shadow) 12%, transparent);\n`;
		css += `}\n`;
	}
	return css;
}
