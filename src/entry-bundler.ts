import { merge } from '$lib/utils/merge.js';

// composables
import { setThresholds } from '$lib/composables/display.js';
import { setColors } from '$lib/composables/colors.js';
import { _default } from './composables/defaults.js';

export interface MytrilConfig {
	theme?: {
		defaultTheme?: string;
		palette?: 'tailwind' | 'material';
		colors?: { [key: string]: string | { [key: string]: string } };
	};
	display?: {
		mobileBreakpoint?: string;
		thresholds?: { [key: string]: number };
	};
	rounded?: { [key: string]: string };
	typography?: {
		family?: { [key: string]: string };
		size?: { [key: string]: string };
	};
}

export function createMytril(config: MytrilConfig) {
	console.log('createMytril', config);
	if (config?.theme?.colors) {
		setColors(merge(_default.theme.colors, config?.theme.colors));
	}

	if (config?.display) {
		if (config.display?.thresholds) {
			setThresholds(merge(_default.display.thresholds, config?.display?.thresholds));
		}
	}
}
