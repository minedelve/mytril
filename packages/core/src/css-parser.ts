import path from 'path';
import fsPromises from 'fs/promises';

import { colors as palettes } from '../src/api/colors.js';
import { themes } from './api/themes.js';
import { merge } from './utils/merge.js';
import { formatPresetConfig } from './utils/format-preset.js';
import type { Configuration, ObjectKeyValueString } from './types/index.js';

export function convertJStoCSS(externalConfig: Configuration) {
	const defaultTheme = externalConfig?.theme?.defaultTheme || 'light';
	let colors = formatPresetConfig(themes);

	if (externalConfig && externalConfig?.theme && externalConfig?.theme?.colors)
		colors = merge(colors, externalConfig?.theme?.colors);

	let css = '';
	let cssRoot = '';
	const cssScheme: ObjectKeyValueString = {};

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

	// colors palettes
	css += ':root {\n';
	for (const style in palettes) {
		for (const [, values] of Object.entries(palettes[style] as ObjectKeyValueString[])) {
			css += `${values.css}: ${values.hex};\n`;
		}
	}
	css += '}\n';

	fsPromises.writeFile(path.resolve(`node_modules/mytril/dist/`, 'index.style.css'), css);
}
