import fs from 'fs';
import { mytrilImporterCSS } from '$lib/importer.js';

export function cssParser(palette?: string) {
	let css: string = ``;
	const files = mytrilImporterCSS();

	if (palette === 'material' || palette === 'tailwind') {
		css += fs.readFileSync(files.palette[palette as 'material' | 'tailwind'], 'utf-8');
	}

	files?._default.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));

	return css;
}
