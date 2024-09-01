import path from 'path';
import fsPromises from 'fs/promises';

export async function checkInstall() {
	const directory = process.cwd();

	try {
		await fsPromises.readFile(path.resolve(directory, 'mytril.config.js'), 'utf-8');
	} catch (err) {
		console.warn(err);
		await fsPromises.copyFile(
			path.resolve(`node_modules/mytril/dist/presets`, 'mytril.config.js'),
			path.resolve(directory, 'mytril.config.js')
		);
	}
}
