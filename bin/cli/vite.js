import chalk from 'chalk';
import { promises as fs } from 'fs';
import path from 'path';

const importMytril = `import { mytril } from 'mytril/vite';`;

/**
 * add mytril configuration to vite.config.js
 * @param {boolean} typescript
 */
export async function adapterViteConfig(typescript) {
	const viteConfigPath = path.resolve(process.cwd(), `vite.config.${typescript ? 'ts' : 'js'}`);
	try {
		let viteConfig = await fs.readFile(viteConfigPath, 'utf8');

		if (!viteConfig.includes(`${importMytril}`)) viteConfig = `${importMytril}\n` + viteConfig;

		const pluginsRegex = /plugins:\s*\[([^\]]*)\]/;
		const match = viteConfig.match(pluginsRegex);

		if (match && !match[1].includes('mytril()')) {
			const updatedPlugins = match[1].trim() ? `${match[1].trim()}, mytril()` : `mytril()`;

			viteConfig = viteConfig.replace(pluginsRegex, `plugins: [${updatedPlugins}]`);
		}

		await fs.writeFile(viteConfigPath, viteConfig, 'utf8');

		console.log(chalk.green('Mytril has added on vite.config.js successfully'));
	} catch (error) {
		console.error('Error modifying vite.config.js:', error.message);
	}
}
