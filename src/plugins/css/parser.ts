import fs from 'fs';
import { mytrilImporterCSS, mytrilImporterCSSModern } from '$lib/importer.js';

export function cssParser() {
	let css: string = ``;
	const files = mytrilImporterCSS();

	files?._default.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));

	return css;
}

export const cssParserModern = () => {
	let css: string = ``;
	const files = mytrilImporterCSSModern();

	files?._default.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));
	files?.components.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));

	return css;
};

export function cssParserPalette(palette?: string) {
	let css: string = ``;
	const files = mytrilImporterCSS();

	if (palette === 'material' || palette === 'tailwind') {
		css += fs.readFileSync(files.palette[palette as 'material' | 'tailwind'], 'utf-8');
	}

	return css;
}

export function cssParserComponents() {
	let css: string = ``;
	const files = mytrilImporterCSS();

	files?.components.map((pathFile) => (css += fs.readFileSync(pathFile, 'utf-8')));

	return css;
}
