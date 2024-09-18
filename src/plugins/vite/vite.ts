import path from 'path';
import fsPromises from 'fs/promises';
import type { ViteDevServer } from 'vite';
import { mytrilImporter } from '$lib/importer.js';
import { mytrilCssParser } from '$lib/css-parser.js';

export async function mytril() {
	const directory = process.cwd();

	try {
		await fsPromises.readFile(path.resolve(directory, 'mytril.config.js'), 'utf-8');
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (err) {
		let init = 'export default {\n';
		init += `	theme: {\n`;
		init += `		defaultTheme: 'light',\n`;
		init += `		colors: {}\n`;
		init += `	}\n`;
		init += `};\n`;

		fsPromises.writeFile(path.resolve(directory, 'mytril.config.js'), init);
	}

	return {
		name: 'mytril/vite.js',
		async configResolved() {
			const config = await mytrilImporter();
			fsPromises.writeFile(
				path.resolve(`node_modules/mytril/dist/`, 'index.style.css'),
				await mytrilCssParser(config)
			);
		},
		async configureServer(server: ViteDevServer) {
			server.watcher.add('./');
			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('mytril.config.js')) {
					const config = await mytrilImporter();
					fsPromises.writeFile(
						path.resolve(`node_modules/mytril/dist/`, 'index.style.css'),
						await mytrilCssParser(config)
					);
				}
			});
		}
	};
}
