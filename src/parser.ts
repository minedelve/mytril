import { convertJStoCSS } from './plugins/css/convert-js-to-css.js';
import { cssParser } from './plugins/css/css-parser.js';
import { presets } from './presets/default.js';
import { formatPresetColors, formatPresetThresholds } from './utils/format-preset.js';
import { merge } from './utils/merge.js';

export interface Configuration {
	theme: {
		defaultTheme: 'light' | 'dark';
		noPalette: boolean;
		colors: { [key: string]: string | { [key: string]: string } };
	};
	display: {
		thresholds: { [key: string]: string };
	};
	typography: {
		family: { [key: string]: string };
		transform: Array<string>;
		align: Array<string>;
		weight: { [key: string]: string };
		style: {
			[key: string]: {
				size: string;
				height: string;
				spacing: string;
			};
		};
	};
	extend: {
		rounded: { [key: string]: string };
		spacing: { [key: string]: string };
	};
}

export async function mytrilParser(config: Configuration) {
	let defaultTheme: string = 'light';
	let colors = formatPresetColors(presets.colors);
	let thresholds = formatPresetThresholds(presets.assets.thresholds);
	let fontFamily = presets.assets.typography.family;
	let fontTransform = presets.assets.typography.transform;
	let fontAlign = presets.assets.typography.align;
	let fontWeight = presets.assets.typography.weight;
	let fontStyle = presets.assets.typography.style;
	let rounded = presets.assets.rounded;
	let spacing = presets.assets.spacing;

	if (config) {
		// external config
		if (config?.theme) {
			// custom theme
			if (config?.theme?.defaultTheme) defaultTheme = config?.theme?.defaultTheme;
			if (config?.theme?.colors) colors = merge(colors, config?.theme.colors);
		}

		if (config?.display) {
			// custom display
			if (config?.display?.thresholds) thresholds = merge(thresholds, config?.display?.thresholds);
		}

		if (config?.typography) {
			// custom typography
			if (config?.typography?.style) fontStyle = merge(fontStyle, config?.typography?.style);
			if (config?.typography?.family) fontFamily = merge(fontFamily, config?.typography?.family);
			if (config?.typography?.weight) fontWeight = merge(fontWeight, config?.typography?.weight);
			if (config?.typography?.transform)
				fontTransform = merge(fontTransform, config?.typography?.transform);
			if (config?.typography?.align) fontAlign = merge(fontAlign, config?.typography?.align);
		}

		if (config?.extend) {
			if (config?.extend?.rounded) rounded = merge(rounded, config?.extend?.rounded);
			if (config?.extend?.spacing) spacing = merge(spacing, config?.extend?.spacing);
		}
	}

	let palette = {};
	if (config?.theme?.noPalette !== false) palette = presets.palette;

	const elevation = presets.assets.elevation;
	const position = presets.assets.position;
	const sizing = presets.assets.sizing;

	const css = cssParser();
	const cssJstoCSS = convertJStoCSS({
		defaultTheme,
		colors,
		thresholds,
		palette,
		rounded,
		elevation,
		position,
		sizing,
		spacing,
		fontWeight,
		fontTransform,
		fontStyle,
		fontAlign,
		fontFamily
	});

	return css + `\n` + cssJstoCSS;
}
