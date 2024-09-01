/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkInstall } from './check-install.js';
import { makeMytrilImporter } from './importer.js';
import { convertJStoCSS } from './utils/convert-js-to-css.js';

export function mytril() {
	return {
		name: 'mytril/plugin-vite',
		async configResolved() {
			const config = await makeMytrilImporter();
			await convertJStoCSS(config);
		},
		async buildStart() {
			await checkInstall();
		},
		async configureServer(server: any) {
			server.watcher.add('./');
			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('mytril.config.js')) {
					const config = await makeMytrilImporter();
					await convertJStoCSS(config);
				}

				if (
					String(filePath).includes('mytril/packages/core/dist/styles/index.css') ||
					String(filePath).includes('mytril/dist/styles/index.css')
				) {
					const config = await makeMytrilImporter();
					await convertJStoCSS(config);
				}
			});
		}
	};
}
