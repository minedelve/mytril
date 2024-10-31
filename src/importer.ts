import path from 'path';
import fsPromises from 'fs/promises';

const directory = process.cwd();
const directoryBuild = 'node_modules/mytril/dist';

export async function mytrilImporter(isTypescript: boolean) {
	let config = undefined;

	try {
		const file = await fsPromises.readFile(
			path.resolve(
				path.resolve(`${directory}/src/plugins`),
				`mytril.${isTypescript ? 'ts' : 'js'}`
			),
			'utf-8'
		);
		if (
			file.match(/export\s+default\s+createMytril\((\{[^]*?\})\);/) &&
			file.match(/export\s+default\s+createMytril\((\{[^]*?\})\);/) !== null &&
			file.match(/export\s+default\s+createMytril\((\{[^]*?\})\);/)!.length > 1
		) {
			const match = file.match(/export\s+default\s+createMytril\((\{[^]*?\})\);/);
			const code = `return ${match![1]};`;
			config = await new Function(code)();
		}
	} catch (err) {
		console.warn(err);
	}
	return config;
}

export const mytrilImporterCSS = () => {
	return {
		_default: [
			path.resolve(`${directoryBuild}/styles`, 'reset.css'),
			path.resolve(`${directoryBuild}/styles`, 'global.css'),
			path.resolve(`${directoryBuild}/styles`, 'prose.css')
		],
		palette: {
			material: path.resolve(`${directoryBuild}/styles/colors`, 'material.css'),
			tailwind: path.resolve(`${directoryBuild}/styles/colors`, 'tailwind.css')
		}
	};
};
