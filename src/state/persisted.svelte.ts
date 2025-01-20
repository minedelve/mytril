import { iconifyAvailable, IconifyComponent } from '$lib/stores/iconify.js';
import { onMount } from 'svelte';

function importStatic(modulePath: string) {
	return import(/* @vite-ignore */ `${modulePath}`);
}

export function persistedPackages() {
	onMount(async () => {
		try {
			const path = '@iconify/svelte';
			const Iconify = await importStatic(path);
			if (!Iconify) iconifyAvailable.set(false);
			else {
				IconifyComponent.set(Iconify.default);
				iconifyAvailable.set(true);
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			/* empty */
		}
	});
}

export function persistedConfiguration() {
	onMount(async () => {
		try {
			const path = '../../../my-app/mytril.config.js';
			const demo = await importStatic(path);
			console.log(demo);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			/* empty */
			console.log(error);
		}
	});
}
