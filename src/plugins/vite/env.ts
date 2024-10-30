import path from 'path';
import fsPromises from 'fs/promises';

export async function envTypescript() {
	const directory = process.cwd();

	try {
		await fsPromises.readFile(path.resolve(directory, 'tsconfig.json'), 'utf-8');
		return true;
	} catch {
		return false;
	}
}
