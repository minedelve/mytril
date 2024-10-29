import path from 'path';
import fsPromises from 'fs/promises';
import type { ViteDevServer } from 'vite';
import { mytrilImporter, mytrilImporter2 } from '$lib/importer.js';
import { mytrilParser } from '$lib/parser.js';
import { mytrilInit } from './init.js';
import { mytrilParser2 } from '$lib/utils/parser.js';

export async function mytril() {
	let typescript = false;
	const directory = process.cwd();

	try {
		await fsPromises.readFile(path.resolve(directory, 'tsconfig.json'), 'utf-8');
		typescript = true;
	} catch {
		typescript = false;
	}

	return {
		name: 'mytril/vite.js',
		async config() {
			await mytrilInit(typescript);
		},
		async configResolved() {
			const config = await mytrilImporter();
			const config2 = await mytrilImporter2(typescript);

			console.log('config2', config2);
			await mytrilParser2(config2);
			fsPromises.writeFile(
				path.resolve(`node_modules/mytril/dist/`, 'index.style.css'),
				await mytrilParser2(config2)
			);
		},
		async configureServer(server: ViteDevServer) {
			server.watcher.add('./');
			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('mytril.config.js')) {
					console.log('UPDATE !!!');
					const config = await mytrilImporter();
					fsPromises.writeFile(
						path.resolve(`node_modules/mytril/dist/`, 'index.style.css'),
						await mytrilParser(config)
					);
				}
			});
		}
	};
}
