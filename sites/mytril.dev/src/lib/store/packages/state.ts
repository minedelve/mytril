import { writable } from 'svelte/store';

interface PackageVersion {
	name: string;
	version: string;
}

export const versions = writable<PackageVersion[]>([]);
