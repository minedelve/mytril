import { configDefault } from '$lib/presets/config.full.js';
import { deepMerge } from '$lib/utils/deep-merge.js';
import type { Colors, CornerSize, MytrilConfig, TypographySize } from '$lib/types/mytril.js';

export function mytrilConfig(config?: MytrilConfig): MytrilConfig {
	const newColors = deepMerge(configDefault.colors!, config?.colors) as Colors;
	const newBreakpoints = deepMerge(
		configDefault.display!.thresholds!,
		config?.display?.thresholds
	) as { [key: string]: number };
	const newRounded = deepMerge(configDefault.shape!, config?.shape) as CornerSize;
	const newFontFamily = deepMerge(
		configDefault.typography!.fontFamily!,
		config?.typography?.fontFamily
	) as { [key: string]: string };
	const newFontSize = deepMerge(
		configDefault.typography!.fontSize!,
		config?.typography?.fontSize
	) as TypographySize;

	return {
		defaultTheme: config?.defaultTheme || configDefault.defaultTheme,
		themes: config?.themes || configDefault.themes,
		colors: newColors,
		display: {
			mobileBreakpoint:
				config?.display?.mobileBreakpoint || configDefault.display?.mobileBreakpoint,
			thresholds: newBreakpoints
		},
		shape: newRounded,
		typography: {
			fontFamily: newFontFamily,
			fontSize: newFontSize
		}
	};
}
