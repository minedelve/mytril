import type { ViteDevServer } from 'vite';

// vite mytril plugin
import { mytrilInit } from './init.js';
import { mytrilCssFile, prototypeThemeFile } from './css-file.js';
import { envTypescript } from './env.js';
import { msgVite } from '$lib/utils/console.js';

export async function mytril(props: { modeDev?: boolean }) {
	const isTypescript = await envTypescript();

	return {
		name: 'mytril/vite.js',
		async config() {
			await mytrilInit(isTypescript);
		},
		async configResolved() {
			if (props?.modeDev) msgVite('developer mode is loaded');

			await mytrilCssFile(isTypescript);
			await prototypeThemeFile();
		},
		async configureServer(server: ViteDevServer) {
			// legacy
			server.watcher.add('./src/plugins/');
			// modern
			server.watcher.add('./vite.config.ts');
			server.watcher.add('./vite.config.js');
			server.watcher.add('./mytril.config.js');

			server.watcher.on('change', async (filePath: string) => {
				// legacy
				if (String(filePath).includes('mytril.js') || String(filePath).includes('mytril.ts')) {
					await mytrilCssFile(isTypescript);
				}

				// modern
				if (String(filePath).includes('mytril.config.js')) {
					await prototypeThemeFile();
					msgVite('css files has updated');
				}
			});
		},
		transform(code: string | string[], id: string) {
			if (props?.modeDev && id.includes('mytril/dist/styles/') && id.endsWith('.css')) {
				if (code.includes('/** Hello **/')) prototypeThemeFile();
			}
		}
	};
}
