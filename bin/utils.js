import { promises as fs } from 'fs';
import path from 'path';

/**
 * Define is the project is a typescript project.
 * @constructor
 * @returns {Promise<boolean>}
 */
export async function envTypescript() {
	const directory = process.cwd();

	try {
		await fs.readFile(path.resolve(directory, 'tsconfig.json'), 'utf-8');
		return true;
	} catch {
		return false;
	}
}

/**
 * Use the args to get the css path.
 * @constructor
 * @returns {string}
 * @default 'src/app.css'
 */
export function getCssPathFromArgs() {
	const args = process.argv.slice(2);
	return args[1] || 'src/app.css';
}

/**
 * Add spacing to the prompts
 * @constructor
 * @param {number} line - Number of lines to add
 */
export function spacerConsole(line = '1') {
	for (let i = 0; i < line; i++) {
		console.log('');
	}
}

/**
 * Link to the prompt
 * @constructor
 */
export function linkToPrompt() {
	console.log('Discord community: https://discord.gg/fwyaGUhbav');
	console.log('Github: https://github.com/minedelve/mytril');
	console.log('Support Package: https://buymeacoffee.com/nycolaide');
}
