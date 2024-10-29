import { writable } from 'svelte/store';

export const breakpoints = {
	default: 0,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	xxl: 1536
};

const innerWidth = 0;
const screenBreakpoint = 'default';

export const getBreakpoint = writable(breakpoints);
export const useInnerWidth = writable(innerWidth);
export const useBreakpoint = writable(screenBreakpoint);

useInnerWidth.subscribe(($size) => {
	let screenKey = 'default';

	// Abonnement à `getBreakpoint` pour accéder aux valeurs.
	getBreakpoint.subscribe(($breakpoints) => {
		console.log('subscribe', $breakpoints);
		for (const [key, minSize] of Object.entries($breakpoints)) {
			if ($size >= minSize) {
				screenKey = key;
			} else {
				break;
			}
		}

		useBreakpoint.set(screenKey);
	});
});
