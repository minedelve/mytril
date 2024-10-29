/* eslint-disable @typescript-eslint/no-explicit-any */
import { breakpoints, getBreakpoint } from '$lib/store/breakpoint.js';
import { getConfig } from '$lib/store/config.js';
import { colors, getThemes } from '$lib/store/themes.js';
import { merge } from '$lib/utils/merge.js';

export function createMytril(config: any) {
	getConfig.set(config);

	if (config?.theme?.colors) {
		getThemes.set(merge(colors, config?.theme.colors));
	}

	if (config?.display?.thresholds) {
		let list = merge(breakpoints, config?.display?.thresholds);
		list = Object.fromEntries(
			Object.entries(list).sort(([, a], [, b]) => (a as number) - (b as number))
		);
		getBreakpoint.set(list);
	}
}
