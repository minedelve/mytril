import type { ViteDevServer } from 'vite';
import { mytrilConfig } from './config.js';
import { mytrilImporter } from '$lib/importer.js';
import { mytrilCSS } from '../css/plugin.js';

/**
 * A Vite plugin for Mytril that handles configuration and file watching.
 *
 * @param props - An object containing optional properties.
 * @param props.modeDev - A boolean indicating if the developer mode is enabled.
 * @returns An object representing the Vite plugin.
 */
export async function mytril() {
	return {
		name: 'mytril/vite.js',
		async configResolved() {
			const configurationGlobal = await mytrilImporter();
			const viteConf = mytrilConfig(configurationGlobal.params);

			await mytrilCSS(viteConf);
		},
		async configureServer(server: ViteDevServer) {
			server.watcher.add('./vite.config.ts');
			server.watcher.add('./vite.config.js');
			server.watcher.add('./mytril.config.js');

			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('mytril.config.js')) {
					const configurationGlobal = await mytrilImporter();
					const viteConf = mytrilConfig(configurationGlobal.params);

					await mytrilCSS(viteConf);
				}
			});
		},
		async transform(code: string | string[], id: string) {
			if (id.includes('mytril/dist/styles/') && id.endsWith('.css')) {
				const configurationGlobal = await mytrilImporter();
				const viteConf = mytrilConfig(configurationGlobal.params);

				await mytrilCSS(viteConf);
			}
		}
	};
}
