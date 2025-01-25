import chalk from 'chalk';
import { promises as fs } from 'fs';
import path from 'path';

// ulitity functions
import { getCssPathFromArgs } from '../utils.js';

const importMytrilCSS = `@import 'mytril/css';`;

export async function modifyCssFile() {
	const cssPath = getCssPathFromArgs();
	const resolvedPath = path.resolve(process.cwd(), cssPath);
	try {
		await fs.access(resolvedPath);
		let appCssContent = await fs.readFile(resolvedPath, 'utf8');
		appCssContent = `${importMytrilCSS}\n\n` + appCssContent;

		await fs.writeFile(resolvedPath, appCssContent, 'utf8');

		console.log(chalk.green(`Mytril has added on ${cssPath} successfully`));
	} catch (error) {
		console.error('Error modifying CSS file:', error.message);
		console.warn('you can add manually on your css file this import:');
		console.warn(importMytrilCSS);
	}
}
