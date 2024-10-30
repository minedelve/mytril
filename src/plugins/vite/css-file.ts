import path from 'path';
import fsPromises from 'fs/promises';

// mytril tools
import { mytrilImporter } from '$lib/importer.js';
import { mytrilParser } from '$lib/parser.js';

export async function mytrilCssFile(isTypescript: boolean) {
	const config = await mytrilImporter(isTypescript);
	fsPromises.writeFile(
		path.resolve(`node_modules/mytril/dist/`, 'index.style.css'),
		await mytrilParser(config)
	);
}
