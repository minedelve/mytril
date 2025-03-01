import chalk from 'chalk';
import { promises as fs } from 'fs';
import path from 'path';

const content = `
/** @type {import('mytril').Config} */
export default {
	colorScheme: 'system',
	colors: {}
};
`;

/**
 * Initialize Mytril configuration file
 */
export async function initMytril() {
	const configPath = path.resolve(process.cwd(), 'mytril.config.js');

	try {
		await fs.writeFile(configPath, content.trim() + '\n', 'utf8');
		console.log(chalk.green('Mytril has created mytril.config.js successfully on your project'));
	} catch (error) {
		console.error('Failed to create configuration file:', error);
		console.warn('you can create mytril.config.js manually on your root project');
	}
}
