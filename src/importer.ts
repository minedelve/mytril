import path from 'path';
import fsPromises from 'fs/promises';

const directory = process.cwd();

export async function mytrilImporter() {
	let config = undefined;

	try {
		const file = await fsPromises.readFile(path.resolve(directory, 'mytril.config.js'), 'utf-8');

		if (
			file.match(/export\s+default\s+(\{[^]*?\});/) &&
			file.match(/export\s+default\s+(\{[^]*?\});/) !== null &&
			file.match(/export\s+default\s+(\{[^]*?\});/)!.length > 1
		) {
			const code = `return ${file.match(/export\s+default\s+(\{[^]*?\});/)![1]}`;
			config = await new Function(code)();
		}
	} catch (err) {
		console.warn(err);
	}

	return config;
}

export async function mytrilImporter2(isTypescript: boolean) {
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
