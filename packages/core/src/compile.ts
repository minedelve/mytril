/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import fsPromises from 'fs/promises';
import { loadConfig } from './utils/load-files.js';
import { convertJStoCSS } from './css-parser.js';

export function mytril() {
	return {
		name: 'mytril/plugin-vite',
		async configResolved() {
			const config = await loadConfig();
			await convertJStoCSS(config);
		},
		async buildStart() {
			const directory = process.cwd();

			try {
				await fsPromises.readFile(path.resolve(directory, 'mytril.config.js'), 'utf-8');
			} catch (err) {
				console.warn(err);
				let init = 'export default {\n';
				init += `	theme: {\n`;
				init += `		defaultTheme: 'light',\n`;
				init += `		colors: {}\n`;
				init += `	}\n`;
				init += `};\n`;

				fsPromises.writeFile(path.resolve(directory, 'mytril.config.js'), init);
			}
		},
		async configureServer(server: any) {
			server.watcher.add('./');
			server.watcher.on('change', async (filePath: string) => {
				if (
					String(filePath).includes('mytril.config.js') ||
					String(filePath).includes('mytril/packages/core/dist/styles/index.css') ||
					String(filePath).includes('mytril/dist/styles/index.css')
				) {
					const config = await loadConfig();
					await convertJStoCSS(config);
				}
			});
		}
	};
}
