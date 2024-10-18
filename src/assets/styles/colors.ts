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
	let classCss: string = ``;
	const schemeCss: { [key: string]: string } = {};

	for (const property in colors) {
		if (typeof colors[property] === 'string') {
			rootCss += `--${property}: ${colors[property]};\n`;
			classCss += colorsClassThemes(property);
		}

		if (typeof colors[property] === 'object') {
			for (const scheme in colors[property]) {
				if (scheme === defaultTheme) {
					rootCss += `--${property}: ${colors[property][scheme]};\n`;
				} else {
					if (!Object.prototype.hasOwnProperty.call(schemeCss, `${scheme}`)) schemeCss[scheme] = '';
					schemeCss[scheme] += `--${property}: ${colors[property][scheme]};\n`;
				}
				classCss += colorsClassThemes(property);
			}
		}
	}

	css += `:root {\n`;
	css += `${rootCss}\n`;
	css += `}\n`;

	for (const scheme in schemeCss) {
		css += `.${scheme} {\n`;
		css += `${schemeCss[scheme]}\n`;
		css += `}\n`;
	}

	css += `${classCss}\n`;
	return css;
}

function colorsClassThemes(property: string) {
	let css: string = ``;
	css += `.bg\\:${property} {\n`;
	css += `background-color: var(--${property}) !important;\n`;
	css += `}\n`;
	css += `.txt\\:${property} {\n`;
	css += `color: var(--${property}) !important;\n`;
	css += `}\n`;
	css += `.r\\:${property} {\n`;
	css += `border-color: var(--${property}) !important;\n`;
	css += `}\n`;
	return css;
}
