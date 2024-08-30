import fs from 'node:fs';
import { colors } from '../src/api/colors.js';
import { colorScheme, themes } from '../src/api/themes.js';

let cssColors = '';
let cssThemes = '';

// Colors
cssColors += ':root {\n';
for (const style in colors) {
	for (const [, values] of Object.entries(colors[style])) {
		cssColors += `${values.css}: ${values.hex};\n`;
	}
}
cssColors += '}\n';

fs.writeFileSync('./@colors.css', `${cssColors}\n`);

// Themes
for (const scheme of colorScheme) {
	const inverseScheme = colorScheme.find((element) => element !== scheme);

	cssThemes += `@media (prefers-color-scheme: ${scheme}) {\n`;
	cssThemes += `:root {\n`;
	cssThemes += `color-scheme: ${scheme};\n`;
	for (const section in themes) {
		for (const index in themes[section]) {
			cssThemes += `${themes[section][index].css}: ${themes[section][index][scheme].includes('#') ? themes[section][index][scheme] : `var(${themes[section][index][scheme]})`};\n`;
		}
	}
	cssThemes += '}\n';

	cssThemes += `.${inverseScheme} {\n`;
	cssThemes += `color-scheme: ${scheme};\n`;
	for (const section in themes) {
		for (const index in themes[section]) {
			cssThemes += `${themes[section][index].css}: ${themes[section][index][inverseScheme].includes('#') ? themes[section][index][inverseScheme] : `var(${themes[section][index][inverseScheme]})`};\n`;
		}
	}
	cssThemes += '}\n';
	cssThemes += '}\n';
}

fs.writeFileSync('./@themes.css', `${cssThemes}\n`);
