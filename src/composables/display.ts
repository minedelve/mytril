import { derived, writable, type Readable, type Writable } from 'svelte/store';
import { _default } from './defaults.js';

export const innerWidth = writable(0);
export const innerHeight = writable(0);
export const scrollY = writable(0);
export const scrollOrientation = writable({
	position: 0,
	orientation: 'initial'
});

export const mobileBreakpoint = writable(_default.display.mobileBreakpoint);
const thresholds: Writable<{ [key: string]: number }> = writable(_default.display.thresholds);
const activeBreakpoint = writable('default');

export const useDisplay = (screen: string): Readable<boolean> => {
	return derived(activeBreakpoint, ($active) => {
		return screen === $active;
	});
};

export const setThresholds = (list: { [key: string]: number }) => {
	list = Object.fromEntries(
		Object.entries(list).sort(([, a], [, b]) => (a as number) - (b as number))
	);
	thresholds.set(list);
};

innerWidth.subscribe(($size) => {
	let screenKey = 'default';

	thresholds.subscribe(($breakpoints) => {
		for (const [key, minSize] of Object.entries($breakpoints)) {
			if ($size >= minSize) {
				screenKey = key;
			} else {
				break;
			}
		}

		activeBreakpoint.set(screenKey);
	});
});
