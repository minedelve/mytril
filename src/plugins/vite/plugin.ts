import type { ViteDevServer } from 'vite';

// vite mytril plugin
import { mytrilInit } from './init.js';
import { mytrilCssFile } from './css-file.js';
import { envTypescript } from './env.js';

export async function mytril() {
	const isTypescript = await envTypescript();

	return {
		name: 'mytril/vite.js',
		async config() {
			await mytrilInit(isTypescript);
		},
		async configResolved() {
			await mytrilCssFile(isTypescript);
		},
		async configureServer(server: ViteDevServer) {
			server.watcher.add('./src/plugins/');
			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('mytril.js') || String(filePath).includes('mytril.ts')) {
					await mytrilCssFile(isTypescript);
				}
			});
		}
	};
}
