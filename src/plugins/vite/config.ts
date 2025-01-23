import { configDefault } from '$lib/presets/config.full.js';
import { deepMerge } from '$lib/utils/deep-merge.js';
import type { Colors, MytrilConfig, MytrilDefaultConfig } from '$lib/types/mytril.js';

export function mytrilConfig(config?: MytrilConfig): MytrilConfig {
	const _defaultConfig: MytrilDefaultConfig = configDefault;
	const newColors = deepMerge(_defaultConfig.colors, config?.colors) as Colors;
	const newBreakpoints = deepMerge(
		configDefault.display!.thresholds!,
		config?.display?.thresholds
	) as { [key: string]: number };

	return {
		defaultTheme: config?.defaultTheme || configDefault.defaultTheme,
		themes: config?.themes || configDefault.themes,
		colorScheme: config?.colorScheme || configDefault.colorScheme,
		colors: newColors,
		display: {
			mobileBreakpoint:
				config?.display?.mobileBreakpoint || configDefault.display?.mobileBreakpoint,
			thresholds: newBreakpoints
		}
	};
}
