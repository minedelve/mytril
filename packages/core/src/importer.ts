import { loadConfig } from './utils/load-files.js';

export async function makeMytrilImporter() {
	const config = await loadConfig();

	return config;
}
