import path from 'path';
import { componentsCSS } from './components/css.js';
import type { MytrilConfig } from './types/mytril.js';

const directory = process.cwd();
const directoryBuild = 'node_modules/mytril/dist';

const config: {
	params: undefined | MytrilConfig;
	css: {
		_default: Array<string>;
		palette: { material: string; tailwind: string };
		components: Array<string>;
	};
} = {
	params: undefined,
	css: {
		_default: [path.resolve(`${directoryBuild}`, 'base.css')],
		palette: {
			material: path.resolve(`${directoryBuild}/styles/colors`, 'material.css'),
			tailwind: path.resolve(`${directoryBuild}/styles/colors`, 'tailwind.css')
		},
		components: [...componentsCSS]
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
