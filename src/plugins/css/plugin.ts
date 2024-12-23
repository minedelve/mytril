import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';
import {
	convertJStoCSS_Components,
	convertJStoCSS_Theme,
	convertJStoCSS_Utilities,
	convertJStoCSS_Variables
} from './convert-js-to-css.js';
import { mytrilImporter } from '$lib/importer.js';
import type { MytrilConfig } from '$lib/types/mytril.js';

/**
 * Asynchronously processes and updates CSS files based on the provided configuration.
 *
 * @param {MytrilConfig} [config] - Optional configuration object for customizing the CSS output.
 *
 * The function performs the following tasks:
 * 1. Loads CSS files.
 * 2. Reads the base CSS file and updates it with theme and variable configurations if applicable.
 * 3. Writes the updated base CSS file back to the filesystem.
 * 4. Generates and writes component-specific CSS based on the configuration.
 * 5. Generates and writes utility-specific CSS based on the configuration.
 *
 * @returns {Promise<void>} A promise that resolves when all file operations are complete.
 */
export const mytrilCSS = async (config?: MytrilConfig) => {
	const files = await loadCssFile();

	// base css
	const base = await fsPromises.readFile(
		path.resolve(`node_modules/mytril/dist/`, 'base.css'),
		'utf8'
	);

	if (base.includes('/** @mytril/themes **/') && config) {
		const newContent = convertJStoCSS_Theme(config) + convertJStoCSS_Variables(config);
		const updatedContent = base.replace(
			/(\/\*\* @mytril\/themes \*\*\/)[\s\S]*?(?=\n\/|$)/,
			`$1\n${newContent}`
		);

		fsPromises.writeFile(path.resolve(`node_modules/mytril/dist/`, 'base.css'), updatedContent);
	}

	// components css
	if (config) {
		const newContent = convertJStoCSS_Components(config, files.components);

		fsPromises.writeFile(path.resolve(`node_modules/mytril/dist/`, 'components.css'), newContent);
	}

	// utilities css
	if (config) {
		const newContent = convertJStoCSS_Utilities(config);

		fsPromises.writeFile(path.resolve(`node_modules/mytril/dist/`, 'utilities.css'), newContent);
	}
};

/**
 * Asynchronously loads CSS files and concatenates their contents into a single object.
 *
 * @returns {Promise<{ _default: string; components: string; palette: string }>}
 * An object containing concatenated CSS content from different categories:
 * - `_default`: Default CSS content.
 * - `components`: CSS content for components.
 * - `palette`: CSS content for palette.
 *
 * @throws {Error} If there is an issue reading any of the CSS files.
 */
export const loadCssFile = async () => {
	const css: { _default: string; components: string; palette: string } = {
		_default: ``,
		components: ``,
		palette: ``
	};
	const files = await mytrilImporter();

	files?.css._default.map((pathFile) => (css._default += fs.readFileSync(pathFile, 'utf-8')));
	files?.css.components.map((pathFile) => (css.components += fs.readFileSync(pathFile, 'utf-8')));
	return css;
};
