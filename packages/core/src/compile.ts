/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineConfig } from 'vite';
import path from 'path';
import fsPromises from 'fs/promises';
import { loadConfig } from './utils/load-files.js';
import { convertJStoCSS } from './css-parser.js';

export async function mytril() {
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

	const config = await loadConfig();

	return {
		name: 'mytril/plugin-vite',
		config: () => ({
			define: {
				__MYTRIL_PLUGIN_PARAM__: JSON.stringify(config?.theme?.defaultTheme)
			}
		}),
		onload() {
			console.log('onload');
		},
		async configResolved() {
			console.log('configResolved');
			await convertJStoCSS(config);
		},
		// async configureServer(server: any) {
		// 	server.watcher.add('./');
		// 	server.watcher.on('change', async (filePath: string) => {
		// 		if (String(filePath).includes('mytril.config.js')) {
		// 			const config = await loadConfig();
		// 			// await convertJStoCSS(config);
		// 			console.log('configureServer', config);
		// 			// await convertJStoCSS(config);
		// 			server.ws.send({
		// 				type: 'custom',
		// 				event: 'special-update',
		// 				data: config
		// 			});

		// 			return convertJStoCSS(config);
		// 		}
		// 	});
		// }
		// async configureServer(server: any) {
		// 	const config = await loadConfig();
		// 	console.log('configureServer', config);

		// 	// server.ws.send({
		// 	// 	type: 'custom',
		// 	// 	event: 'special-update-configserv',
		// 	// 	data: config
		// 	// });

		// 	server.watcher.add('./');
		// 	server.watcher.on('change', async (filePath: string) => {
		// 		if (String(filePath).includes('mytril.config.js')) {
		// 			const config = await loadConfig();
		// 			console.log('configureServer WATCHER', config);
		// 			convertJStoCSS(config);
		// 			return [];
		// 		}
		// 	});

		// return async () => {
		// 	// console.log('configureServer in return');
		// 	// server.ws.send({
		// 	// 	type: 'custom',
		// 	// 	event: 'special-update',
		// 	// 	data: config
		// 	// });
		// 	await convertJStoCSS(config);
		// };
		// },
		async handleHotUpdate({ file, server }: any) {
			// server.ws.send({ type: 'full-reload' });

			const config = await loadConfig();

			// server.ws.send({
			// 	type: 'full-reload',
			// 	event: 'special-update-full-reload',
			// 	data: config
			// });

			console.log('handleHotUpdate', file);
			if (file.includes('dist/index.style.css')) {
				return [];
			}

			if (file === 'mytril.config.js') {
				return convertJStoCSS(config);
			}

			server.ws.send({
				type: 'custom',
				event: 'special-update',
				data: config
			});

			// return []; // le problème est la

			// server.watcher.add('./');
			// server.watcher.on('change', async (filePath: string) => {
			// 	console.log('mytril.config.js', filePath);
			// 	// if (String(filePath).includes('mytril.config.js')) {
			// 	// 	// const config = await loadConfig();
			// 	// 	// await convertJStoCSS(config);
			// 	// 	console.log('mytril.config.js', config);
			// 	// 	// await convertJStoCSS(config);
			// 	// }
			// });

			// return convertJStoCSS(config);

			//await convertJStoCSS(config);
		}
	};
}
