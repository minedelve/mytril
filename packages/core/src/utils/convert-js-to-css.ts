import path from 'path';
import fsPromises from 'fs/promises';

import { themes } from './../api/themes.js';
import { merge } from './merge.js';

interface ThemeColors {
	[key: string]: string;
	light: string;
	dark: string;
}

interface MyObject {
	[key: string]: ThemeColors;
}

interface CSSScheme {
	[key: string]: string;
}

interface ThemeItem {
	name: string;
	css: string;
	light: string;
	dark: string;
}

interface ThemeSection {
	palette: ThemeItem[];
	typography: ThemeItem[];
	background: ThemeItem[];
	state: ThemeItem[];
}

interface Colors {
	[key: string]:
		| string
		| {
				[key: string]: string;
		  };
}

interface Theme {
	defaultTheme: string;
	colors: Colors;
}

interface Config {
	theme: Theme;
}

const formatPresetConfig = (config: ThemeSection) => {
	const formatDefaultColors: MyObject = {};

	for (const section of Object.keys(config) as (keyof ThemeSection)[]) {
		for (const index in config[section]) {
			formatDefaultColors[config[section][index].name.toLowerCase().replaceAll(' ', '-')] = {
				light: config[section][index].light,
				dark: config[section][index].dark
			};
		}
	}

	return formatDefaultColors;
};

export function convertJStoCSS(externalConfig: Config) {
	const defaultTheme = externalConfig?.theme?.defaultTheme || 'light';
	let colors = formatPresetConfig(themes);

	if (externalConfig && externalConfig?.theme && externalConfig?.theme?.colors)
		colors = merge(colors, externalConfig?.theme?.colors);

	let css = '';
	let cssRoot = '';
	const cssScheme: CSSScheme = {};

	for (const property in colors) {
		if (typeof colors[property] === 'string') {
			cssRoot += `--c-${property}: ${colors[property]};`;
		}

		if (typeof colors[property] === 'object') {
			for (const scheme in colors[property]) {
				if (scheme === defaultTheme) {
					cssRoot += `--c-${property}: ${colors[property][scheme]};`;
				} else {
					if (!Object.prototype.hasOwnProperty.call(cssScheme, `${scheme}`)) cssScheme[scheme] = '';

					cssScheme[scheme] += `--c-${property}: ${colors[property][scheme]};`;
				}
			}
		}
	}

	css += `:root {\n`;
	css += `${cssRoot}\n`;
	css += `}\n`;

	for (const scheme in cssScheme) {
		css += `.${scheme} {\n`;
		css += `${cssScheme[scheme]}\n`;
		css += `}\n`;
	}

	fsPromises.writeFile(path.resolve(`node_modules/mytril/dist/styles/`, '@local.css'), css);
}
