import { _default } from '$lib/composables/defaults.js';
import { rootVariables } from '$lib/utils/formater.js';

type Colors = {
	[key: string]: string | { [key: string]: string | { [key: string]: string } };
};
type Themes = Array<string>;
type Theme = string;

export const prototypeTheme = () => {
	const colors: Colors = _default.colors;
	const themes: Themes = _default.themes;
	const DEFAULT: Theme = 'light';

	const list: { [key: string]: { [key: string]: string } } = {};

	if (typeof colors === 'object') {
		for (const theme of themes) {
			list[theme] = {};
		}
	} else {
		list[DEFAULT] = {};
	}

	for (const property in colors) {
		if (typeof colors[property] === 'string') {
			for (const theme of themes) {
				list[theme][property] = colors[property];
			}
		} else if (typeof colors[property] === 'object') {
			for (const variant in colors[property]) {
				if (themes.includes(variant)) {
					if (typeof colors[property][variant] === 'string') {
						list[variant][property] = colors[property][variant];
					}
				} else if (variant === '_default') {
					if (typeof colors[property][variant] === 'string') {
						for (const theme of themes) {
							list[theme][`${property}`] = colors[property][variant];
						}
					} else if (typeof colors[property][variant] === 'object') {
						for (const colorVariant in colors[property][variant]) {
							if (themes.includes(colorVariant)) {
								list[colorVariant][`${property}`] = colors[property][variant][colorVariant];
							}
						}
					}
				} else {
					if (typeof colors[property][variant] === 'string') {
						for (const theme of themes) {
							list[theme][`${property}-${variant}`] = colors[property][variant];
						}
					} else if (typeof colors[property][variant] === 'object') {
						for (const colorVariant in colors[property][variant]) {
							if (themes.includes(colorVariant)) {
								list[colorVariant][`${property}-${variant}`] =
									colors[property][variant][colorVariant];
							}
						}
					}
				}
			}
		}
	}

	let classCSS = '';
	let rootCss: string = '';

	for (const scheme in list) {
		classCSS += `.${scheme} {\n`;
		Object.entries(list[scheme]).map(([key, value]) => {
			if (scheme === DEFAULT) rootCss += `${rootVariables({ key, type: 'color' })}: ${value};\n`;
			classCSS += `${rootVariables({ key, type: 'color' })}: ${value};\n`;
		});
		classCSS += `}\n`;
	}

	let css = '';

	css += `:root {\n`;
	css += `${rootCss}`;
	css += `}\n`;
	css += classCSS;
	css += `\n`;
	return css;
};
