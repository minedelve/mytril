export function colorsPalette(colors: {
	[key: string]: { name: string; css: string; hex: string }[];
}) {
	let css: string = `:root {\n`;
	for (const style in colors) {
		if (Object.hasOwnProperty.call(colors, style)) {
			for (const values of colors[style] as { [key: string]: string }[]) {
				css += `${values.css}: ${values.hex};\n`;
			}
		}
	}
	return (css += `}\n`);
}

export function colorsThemes(
	defaultTheme: string,
	colors: { [key: string]: string | { [key: string]: string } }
) {
	let css: string = '';
	let rootCss: string = '';
	const classCss: { [key: string]: string } = {};

	for (const property in colors) {
		if (typeof colors[property] === 'string') {
			rootCss += `--c-${property}: ${colors[property]};\n`;
		}

		if (typeof colors[property] === 'object') {
			for (const scheme in colors[property]) {
				if (scheme === defaultTheme) {
					rootCss += `--c-${property}: ${colors[property][scheme]};\n`;
				} else {
					if (!Object.prototype.hasOwnProperty.call(classCss, `${scheme}`)) classCss[scheme] = '';
					classCss[scheme] += `--c-${property}: ${colors[property][scheme]};\n`;
				}
			}
		}
	}

	css += `:root {\n`;
	css += `${rootCss}\n`;
	css += `}\n`;

	for (const scheme in classCss) {
		css += `.${scheme} {\n`;
		css += `${classCss[scheme]}\n`;
		css += `}\n`;
	}

	return css;
}
