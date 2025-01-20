import {
	roundedClass,
	displayClass,
	elevationClass,
	flexClass,
	floatClass,
	overflowClass,
	positionClass,
	sizingClass,
	spacingClass,
	typographyClass,
	typographyClassBreakpoint
} from '$lib/styles/js/index.js';
import { rootVariables } from '$lib/utils/formater.js';
import { cssParser } from './parser.js';
import type { MytrilConfig } from '$lib/types/mytril.js';

const mediaQueries: Array<string> = ['min', 'max'];

/**
 * Converts a given configuration object into a CSS string.
 *
 * This function generates CSS based on the provided `MytrilConfig` object.
 * It processes various configuration options such as typography, shape, and display settings,
 * and generates corresponding CSS classes and media queries.
 *
 * @param {MytrilConfig} config - The configuration object containing settings for generating CSS.
 * @returns {string} The generated CSS string based on the provided configuration.
 */
export const convertJStoCSS_Utilities = (config: MytrilConfig) => {
	let css = '';

	if (config && config.display && config.display.thresholds) {
		// out of breakpoints
		if (config?.typography?.fontFamily) css += typographyClass(config?.typography?.fontFamily);
		css += elevationClass();

		for (const [breakpoint, screen] of Object.entries(config.display.thresholds)) {
			mediaQueries.map((mediaQuerie) => {
				const prefix = mediaQuerie !== 'min' ? `${mediaQuerie}-${breakpoint}` : breakpoint;

				if (breakpoint !== 'none')
					css += `@media screen and (${mediaQuerie}-width: ${screen}px) {\n`;

				if (config?.shape) css += roundedClass(prefix, config?.shape);
				if (config?.typography?.fontSize)
					css += typographyClassBreakpoint(prefix, config?.typography?.fontSize);

				css += positionClass(prefix);
				css += sizingClass(prefix);
				css += spacingClass(prefix);
				css += displayClass(prefix);
				css += overflowClass(prefix);
				css += floatClass(prefix);
				css += flexClass(prefix);

				if (breakpoint !== 'none') css += `}\n`;
			});
		}
	}

	return css;
};

/**
 * Converts JavaScript configuration and data into a CSS string.
 *
 * @param {MytrilConfig} config - The configuration object for Mytril.
 * @param {string} data - The data to be converted into CSS.
 * @returns {string} The generated CSS string.
 */
export const convertJStoCSS_Components = (config: MytrilConfig, data: string) => {
	let css = '';
	if (config && config.display && config.display.thresholds) {
		css += cssParser(config.display.thresholds, data);
	}
	return css;
};

/**
 * Converts a given configuration object into a string of CSS custom properties.
 *
 * This function generates CSS variables for typography font families, font sizes,
 * and shape properties based on the provided configuration object. The generated
 * CSS variables are scoped to the `:root` selector.
 *
 * @param {MytrilConfig} config - The configuration object containing typography
 * and shape properties.
 * @returns {string} A string of CSS custom properties.
 */
export const convertJStoCSS_Variables = (config: MytrilConfig) => {
	let css: string = '';

	css += ':root {\n';
	for (const key in config?.typography?.fontFamily) {
		css += `${rootVariables({ key, type: 'typescale' })}: ${config?.typography?.fontFamily[key]};\n`;
	}
	css += '}\n';

	css += ':root {\n';
	for (const key in config?.typography?.fontSize) {
		css += `${rootVariables({ key, type: 'typescale' })}: ${config?.typography?.fontSize[key]};\n`;
	}
	css += '}\n';

	css += ':root {\n';
	for (const key in config?.shape) {
		css += `${rootVariables({ key, type: 'corner' })}: ${config?.shape[key]};\n`;
	}
	css += '}\n';

	return css;
};

/**
 * Converts a JavaScript theme configuration to CSS.
 *
 * @param {MytrilConfig} config - The configuration object for the theme.
 * @param {string} config.defaultTheme - The default theme name.
 * @param {object} config.colors - An object containing color definitions.
 * @param {string | string[]} config.themes - A string or array of strings representing theme names.
 * @param {string} config.colorScheme - The system color scheme with navigator or user params.
 * @returns {string} The generated CSS string.
 *
 * @example
 * const config = {
 *   themes: ['default', 'demo']
 *   defaultTheme: 'default',
 * 	 colorScheme: 'system',
 *   colors: {
 * 	   default: {
 *       primary: {
 *         light: '#ffffff',
 *         dark: '#000000',
 *       },
 *       secondary: '#ff00ff',
 *	     tertiary:{
 *         _default: '#ffffff',
 *         container:  {
 *           light: '#ffffff',
 *		     dark: '#000000',
 *		   },
 * 	     }
 *     }
 *   },
 * };
 * const css = convertJStoCSS_Theme(config);
 */
export const convertJStoCSS_Theme = (config: MytrilConfig) => {
	const DEFAULT = config.defaultTheme;
	const mode = config.colorScheme;
	const colors = config.colors;
	let themes = config.themes;
	const list: { [key: string]: { [key: string]: { [key: string]: string } } } = {};
	let css = '';

	if (typeof themes === 'string') themes = [themes];

	if (themes) {
		themes.map((theme) => {
			list[theme] = {
				light: {},
				dark: {}
			}; //init

			if (!colors || !colors[theme]) return;

			for (const property in colors[theme]) {
				if (typeof colors[theme][property] === 'string') {
					list[theme]['light'][property] = colors[theme][property];
					list[theme]['dark'][property] = colors[theme][property];
				} else if (typeof colors[theme][property] === 'object') {
					for (const key in colors[theme][property]) {
						if (typeof colors[theme][property][key] === 'string') {
							if (key === 'light') list[theme]['light'][property] = colors[theme][property][key];
							if (key === 'dark') list[theme]['dark'][property] = colors[theme][property][key];
						} else if (typeof colors[theme][property][key] === 'object') {
							if (key === '_default') {
								if (typeof colors[theme][property][key] === 'string') {
									list[theme]['light'][property] = colors[theme][property][key];
									list[theme]['dark'][property] = colors[theme][property][key];
								} else if (typeof colors[theme][property][key] === 'object') {
									if (colors[theme][property][key]['light'])
										list[theme]['light'][property] = colors[theme][property][key]['light'];
									if (colors[theme][property][key]['dark'])
										list[theme]['dark'][property] = colors[theme][property][key]['dark'];
								}
							} else {
								if (typeof colors[theme][property][key] === 'string') {
									list[theme]['light'][`${property}-${key}`] = colors[theme][property][key];
									list[theme]['dark'][`${property}-${key}`] = colors[theme][property][key];
								} else if (typeof colors[theme][property][key] === 'object') {
									if (colors[theme][property][key]['light'])
										list[theme]['light'][`${property}-${key}`] =
											colors[theme][property][key]['light'];
									if (colors[theme][property][key]['dark'])
										list[theme]['dark'][`${property}-${key}`] =
											colors[theme][property][key]['dark'];
								}
							}
						}
					}
				}
			}
		});

		let classCSS = '';
		let rootCss = '';
		for (const theme in list) {
			for (const scheme in list[theme]) {
				classCSS += `[mytril-theme='${theme}'].${scheme}, [mytril-theme='${theme}'] .${scheme} {`;
				Object.entries(list[theme][scheme]).map(([key, value]) => {
					if (theme === DEFAULT) {
						if (mode === 'system' && scheme === 'light')
							rootCss += `${rootVariables({ key, type: 'color' })}: ${value};\n`;
						else if (mode !== 'system' && mode === scheme)
							rootCss += `${rootVariables({ key, type: 'color' })}: ${value};\n`;
					}
					classCSS += `${rootVariables({ key, type: 'color' })}: ${value};\n`;
				});
				classCSS += `}\n`;

				classCSS += `@media (prefers-color-scheme: ${scheme}) {`;
				classCSS += `[mytril-theme='${theme}']:not(.dark):not(.light) {`;
				classCSS += `color-scheme: ${scheme};`;
				Object.entries(list[theme][scheme]).map(([key, value]) => {
					classCSS += `${rootVariables({ key, type: 'color' })}: ${value};\n`;
				});
				classCSS += `}\n`;
				classCSS += `}\n`;
			}
		}
		css += `:root {\n`;
		css += `${rootCss}`;
		css += `}\n`;
		css += classCSS;
		css += `\n`;
	}

	return css;
};
