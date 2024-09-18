import path from 'path';
import fsPromises from 'fs/promises';

import { colors as colorsApi } from './api/colors.js';
import { themes } from './api/themes.js';
import { presets } from './presets/index.js';
import { merge } from './utils/merge.js';
import { formatPresetColors, formatPresetThresholds } from './utils/format-preset.js';
import type { Configuration, ObjectKeyValueString } from './types/index.js';
import { convertJStoCSS } from './utils/convert-js-to-css.js';

export function cssParser(externalConfig: Configuration) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const palettes: any = colorsApi;
	const defaultTheme = externalConfig?.theme?.defaultTheme || 'light';
	let colors = formatPresetColors(themes);
	let breakpoints = formatPresetThresholds(presets.thresholds);

	if (externalConfig) {
		if (externalConfig?.theme && externalConfig?.theme?.colors) {
			colors = merge(colors, externalConfig?.theme?.colors);
		}

		if (externalConfig?.display && externalConfig?.display?.thresholds) {
			breakpoints = merge(breakpoints, externalConfig?.display?.thresholds);
		}
	}

	let css = '';
	let cssRoot = '';
	const cssScheme: ObjectKeyValueString = {};

	for (const property in colors) {
		if (typeof colors[property] === 'string') {
			cssRoot += `--c-${property}: ${colors[property]};\n`;
		}

		if (typeof colors[property] === 'object') {
			for (const scheme in colors[property]) {
				if (scheme === defaultTheme) {
					cssRoot += `--c-${property}: ${colors[property][scheme]};\n`;
				} else {
					if (!Object.prototype.hasOwnProperty.call(cssScheme, `${scheme}`)) cssScheme[scheme] = '';

					cssScheme[scheme] += `--c-${property}: ${colors[property][scheme]};\n`;
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
		if (Object.hasOwnProperty.call(palettes, style)) {
			for (const values of palettes[style] as ObjectKeyValueString[]) {
				css += `${values.css}: ${values.hex};\n`;
			}
		}
	}
	css += '}\n';

	css += convertJStoCSS(breakpoints);

	fsPromises.writeFile(path.resolve(`node_modules/mytril/dist/`, 'index.style.css'), css);
}
