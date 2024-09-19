import { convertJStoCSS } from './plugins/css/convert-js-to-css.js';
import { cssParser } from './plugins/css/css-parser.js';
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
	typography: {
		family: { [key: string]: string };
	};
}

export async function mytrilParser(config: Configuration) {
	const defaultTheme: string = config?.theme?.defaultTheme || 'light';

	let colors, breakpoints, family;
	colors = formatPresetColors(presets.colors);
	breakpoints = formatPresetThresholds(presets.assets.thresholds);
	family = presets.assets.typography.family;
	if (config) {
		if (config?.theme?.colors)
			colors = merge(formatPresetColors(presets.colors), config?.theme.colors);

		if (config?.display?.thresholds)
			breakpoints = merge(
				formatPresetThresholds(presets.assets.thresholds),
				config?.display?.thresholds
			);

		if (config?.typography?.family)
			family = merge(presets.assets.typography.family, config?.typography?.family);
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

	const css = cssParser();
	const cssJstoCSS = convertJStoCSS({
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
		align,
		family
	});

	return css + `\n` + cssJstoCSS;
}
