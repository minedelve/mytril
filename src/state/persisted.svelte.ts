import { iconifyAvailable, IconifyComponent } from '$lib/stores/iconify.js';
import { onMount } from 'svelte';

function importStatic(modulePath: string) {
	return import(/* @vite-ignore */ `${modulePath}`);
}

export function persitedPackages() {
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
