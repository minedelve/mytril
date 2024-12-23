import type { ViteDevServer } from 'vite';
import { msgVite } from '$lib/utils/prompts.js';
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
export async function mytril(props: { modeDev?: boolean }) {
	return {
		name: 'mytril/vite.js',
		async configResolved() {
			if (props?.modeDev) msgVite('developer mode is loaded');
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
					msgVite('css files has updated');
				}
			});
		},
		async transform(code: string | string[], id: string) {
			if (props?.modeDev && id.includes('mytril/dist/styles/') && id.endsWith('.css')) {
				const configurationGlobal = await mytrilImporter();
				const viteConf = mytrilConfig(configurationGlobal.params);

				await mytrilCSS(viteConf);
			}
		}
	};
}
