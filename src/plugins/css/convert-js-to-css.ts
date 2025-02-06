import { cssParser } from './parser.js';
import type { MytrilConfig } from '$lib/types/mytril.js';

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
export const convertJStoCSS_Utilities = (config: MytrilConfig, data: string) => {
	let css = '';
	if (config && config.display && config.display.thresholds) {
		css += cssParser(config.display.thresholds, data);
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
	// const DEFAULT = config.defaultTheme;
	// const mode = config.colorScheme;
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
							if (key === 'dark' || key === 'light') {
								if (key === 'light') list[theme]['light'][property] = colors[theme][property][key];
								if (key === 'dark') list[theme]['dark'][property] = colors[theme][property][key];
							} else {
								if (key === '_default') {
									list[theme]['light'][property] = colors[theme][property][key];
									list[theme]['dark'][property] = colors[theme][property][key];
								} else {
									list[theme]['light'][`${property}-${key}`] = colors[theme][property][key];
									list[theme]['dark'][`${property}-${key}`] = colors[theme][property][key];
								}
							}
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

		const variable = (key: string) => {
			return `--color-${key}`;
		};

		let classCSS = '';
		// let rootCss = '';
		for (const theme in list) {
			for (const scheme in list[theme]) {
				classCSS += `[mytril-theme='${theme}'].${scheme}, [mytril-theme='${theme}'] .${scheme} {\n`;
				Object.entries(list[theme][scheme]).map(([key, value]) => {
					// if (theme === DEFAULT) {
					// 	if (mode === 'system' && scheme === 'light') rootCss += `${variable(key)}: ${value};\n`;
					// 	else if (mode !== 'system' && mode === scheme)
					// 		rootCss += `${variable(key)}: ${value};\n`;
					// }
					classCSS += `${variable(key)}: ${value};\n`;
				});
				classCSS += `\n}\n`;

				classCSS += `@media (prefers-color-scheme: ${scheme}) {\n`;
				classCSS += `[mytril-theme='${theme}']:not(.dark):not(.light) {\n`;
				classCSS += `color-scheme: ${scheme};\n`;
				Object.entries(list[theme][scheme]).map(([key, value]) => {
					classCSS += `${variable(key)}: ${value};\n`;
				});
				classCSS += `\n}\n`;
				classCSS += `\n}\n`;
			}
		}
		// css += `:root {\n`;
		// css += `${rootCss}`;
		// css += `\n}\n`;
		css += classCSS;
		css += `\n`;
	}

	return css;
};
