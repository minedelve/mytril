import fs from 'fs';
import { loadCssFiles } from './importer-css.js';

export function cssParser() {
	let css: string = ``;
	const files = loadCssFiles();

	files?._default.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));

	return css;
}
