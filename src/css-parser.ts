import { convertJStoCSS } from './plugins/css/convert-js-to-css.js';
import { presets } from './presets/default.js';
import { formatPresetColors, formatPresetThresholds } from './utils/format-preset.js';
import { merge } from './utils/merge.js';

export interface Configuration {
	theme: {
		defaultTheme: 'light' | 'dark';
		colors: { [key: string]: string | { [key: string]: string } };
	};
	display: {
		thresholds: { [key: string]: string };
	};
}

export async function mytrilCssParser(config: Configuration) {
	const defaultTheme: string = config?.theme?.defaultTheme || 'light';

	let colors, breakpoints;
	colors = formatPresetColors(presets.colors);
	breakpoints = formatPresetThresholds(presets.assets.thresholds);
	if (config) {
		if (config?.theme?.colors)
			colors = merge(formatPresetColors(presets.colors), config?.theme.colors);

		if (config?.display?.thresholds)
			breakpoints = merge(presets.assets.thresholds, config?.display?.thresholds);
	}

	const palette = presets.palette;
	const rounded = presets.assets.rounded;
	const elevation = presets.assets.elevation;
	const position = presets.assets.position;
	const sizing = presets.assets.sizing;
	const spacing = presets.assets.spacing;

	// typo
	const weight = presets.assets.typography.weight;
	const transform = presets.assets.typography.transform;
	const style = presets.assets.typography.style;
	const align = presets.assets.typography.align;

	return convertJStoCSS({
		defaultTheme,
		colors,
		breakpoints,
		palette,
		rounded,
		elevation,
		position,
		sizing,
		spacing,
		weight,
		transform,
		style,
		align
	});
}
