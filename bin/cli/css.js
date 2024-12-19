import chalk from 'chalk';
import { promises as fs } from 'fs';
import path from 'path';

// ulitity functions
import { getCssPathFromArgs } from '../utils';

const importMytrilCSSThemes = `@import 'mytril/themes';`;
const importMytrilCSSVariables = `@import 'mytril/variables';`;
const importMytrilCSSComponents = `@import 'mytril/components';`;

export async function modifyCssFile() {
	const cssPath = getCssPathFromArgs();
	const resolvedPath = path.resolve(process.cwd(), cssPath);
	try {
		await fs.access(resolvedPath);
		let appCssContent = await fs.readFile(resolvedPath, 'utf8');

		if (!appCssContent.includes(`${importMytrilCSSThemes}`))
			appCssContent =
				`${importMytrilCSSThemes}\n${importMytrilCSSVariables}\n${importMytrilCSSComponents}` +
				appCssContent;

		await fs.writeFile(resolvedPath, appCssContent, 'utf8');

		console.log(chalk.green(`Mytril has added on ${cssPath} successfully`));
	} catch (error) {
		console.error('Error modifying CSS file:', error.message);
	}
}
