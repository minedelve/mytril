import path from 'path';
import type { MytrilConfig } from './types/index.js';

const directory = process.cwd();

const config: {
	params: undefined | MytrilConfig;
} = {
	params: undefined
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
