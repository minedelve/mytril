import path from 'path';
import fsPromises from 'fs/promises';

// mytril tools
import { mytrilImporter } from '$lib/importer.js';
import { mytrilCSS, mytrilCSSMorden } from '$lib/plugins/css/compiler.js';
import { cssMinimify } from '$lib/plugins/css/minimify.js';

import { prototypeTheme } from '../css/prototype-theme.js';
import { prototypeVariables } from '../css/prototype-variables.js';

export async function mytrilCssFile(isTypescript: boolean) {
	const config = await mytrilImporter(isTypescript);
	const css = await mytrilCSS(config);
	fsPromises.writeFile(
		path.resolve(`node_modules/mytril/dist/`, 'index.style.css'),
		cssMinimify(css)
	);
}

export async function prototypeThemeFile() {
	const cssTheme = await prototypeTheme();
	const cssVariables = await prototypeVariables();
	const css = await mytrilCSSMorden();
	fsPromises.writeFile(path.resolve(`node_modules/mytril/dist/styles/`, 'themes.css'), cssTheme);
	fsPromises.writeFile(
		path.resolve(`node_modules/mytril/dist/styles/`, 'variables.css'),
		cssVariables
	);
	fsPromises.writeFile(
		path.resolve(`node_modules/mytril/dist/styles/`, 'components.css'),
		css.components
	);
}
