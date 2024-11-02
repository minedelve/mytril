import { formatRootVar } from '$lib/utils/formater.js';

export const colors = (
	defaultTheme: string,
	colors: { [key: string]: string | { [key: string]: string } }
) => {
	let css: string = '';
	let rootCss: string = '';
	const schemeCss: { [key: string]: string } = {};

	for (const property in colors) {
		if (typeof colors[property] === 'string') {
			rootCss += `${formatRootVar(property)}: ${colors[property]};\n`;
		}

		if (typeof colors[property] === 'object') {
			for (const scheme in colors[property]) {
				if (scheme === defaultTheme) {
					rootCss += `${formatRootVar(property)}: ${colors[property][scheme]};\n`;
				} else {
					if (!Object.prototype.hasOwnProperty.call(schemeCss, `${scheme}`)) schemeCss[scheme] = '';
					schemeCss[scheme] += `${formatRootVar(property)}: ${colors[property][scheme]};\n`;
				}
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
	return css;
};
