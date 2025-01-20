import path from 'path';

const directory = process.cwd();
const directoryBuild = 'node_modules/mytril/dist';

// src/lib/stores/configStore.ts
import { writable } from 'svelte/store';

export const configStore = writable({});

export async function loadConfig() {
	// const config = await import('/mytril.config.js');
	// configStore.set(config.default);
	// const response = await fetch(``);
}
