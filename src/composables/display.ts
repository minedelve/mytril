import { writable, get, type Writable } from 'svelte/store';
import { _default } from './defaults.js';

export const mobileBreakpoint = writable(_default.display.mobileBreakpoint);
const thresholds: Writable<{ [key: string]: number }> = writable(_default.display.thresholds);
const activeBreakpoint = writable('default');
const innerWidth = writable(0);

export const useDisplay = (screen: string) => {
	if (screen === get(activeBreakpoint)) return true;
	else return false;
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
