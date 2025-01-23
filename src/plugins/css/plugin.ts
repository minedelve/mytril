import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';
import {
	convertJStoCSS_Components,
	convertJStoCSS_Theme,
	convertJStoCSS_Utilities,
	convertJStoCSS_Variables
} from './convert-js-to-css.js';
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
export const mytrilCSS = async (config: MytrilConfig) => {
	const files = await loadCssFile();
	let css = '';

	css += files.base;
	if (config) {
		css += convertJStoCSS_Theme(config);
		css += convertJStoCSS_Variables(config);
		css += convertJStoCSS_Components(config, files.components);
		css += convertJStoCSS_Utilities(config);
	}

	fsPromises.writeFile(path.resolve(`node_modules/mytril/dist/`, 'styles.css'), css);
};

/**
 * Asynchronously loads CSS files and concatenates their contents into a single object.
 *
 * @returns {Promise<{ base: string; components: string;  }>}
 * An object containing concatenated CSS content from different categories:
 * - `base`: Default CSS content.
 * - `components`: CSS content for components.
 *
 * @throws {Error} If there is an issue reading any of the CSS files.
 */
const cssDirectory = 'node_modules/mytril/dist/styles/';
export const loadCssFile = async () => {
	const css: { base: string; components: string } = {
		base: ``,
		components: ``
	};
	css.base += fs.readFileSync(`${cssDirectory}/base.css`, 'utf-8');
	css.components += getAllCssFromDirectory(cssDirectory);
	return css;
};

/**
 * Traverses the given directory and retrieves the content of all `.css` files as a single string.
 *
 * This function recursively scans the provided directory and its subdirectories
 * to find `.css` files. The content of all identified `.css` files is read,
 * concatenated, and returned as a single string.
 *
 * @param directory - The path of the directory to traverse and search for `.css` files.
 * @returns A single string containing the concatenated content of all `.css` files found.
 */
const excludeFiles = ['base.css', 'utilities.css'];
function getAllCssFromDirectory(directory: string): string {
	let allCss = '';

	function readDirectory(dir: string) {
		const files = fs.readdirSync(dir);

		for (const file of files) {
			const filePath = path.join(dir, file);
			const stats = fs.statSync(filePath);

			if (stats.isDirectory()) {
				readDirectory(filePath);
			} else if (stats.isFile() && file.endsWith('.css') && !excludeFiles.includes(file)) {
				const cssContent = fs.readFileSync(filePath, 'utf-8');
				allCss += cssContent + '\n';
			}
		}
	}
	readDirectory(directory);
	return allCss;
}
