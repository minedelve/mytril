import path from 'path';
import type { MytrilConfig } from './types/index.js';

const directory = process.cwd();
const directoryBuild = 'node_modules/mytril/dist';

const config: {
	params: undefined | MytrilConfig;
	css: {
		_default: Array<string>;
	};
} = {
	params: undefined,
	css: {
		_default: [path.resolve(`${directoryBuild}`, 'styles/base.css')]
	}
};

export async function mytrilImporter() {
	try {
		const fullPath = path.resolve(path.resolve(path.resolve(`${directory}`), `mytril.config.js`));
		const content = await import(fullPath);
		config.params = content.default || config;
	} catch (err) {
		console.warn(err);
	}
	return config;
}
