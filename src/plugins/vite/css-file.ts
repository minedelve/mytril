import path from 'path';
import fsPromises from 'fs/promises';

// mytril tools
import { mytrilImporter } from '$lib/importer.js';
import { mytrilCSS } from '$lib/plugins/css/compiler.js';
import { cssMinimify } from '$lib/plugins/css/minimify.js';

export async function mytrilCssFile(isTypescript: boolean) {
	const config = await mytrilImporter(isTypescript);
	const css = await mytrilCSS(config);
	fsPromises.writeFile(
		path.resolve(`node_modules/mytril/dist/`, 'index.style.css'),
		cssMinimify(css)
	);
}
