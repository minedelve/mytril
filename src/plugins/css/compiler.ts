import type { MytrilConfig } from '$lib/entry-bundler.js';
import { merge } from '$lib/utils/merge.js';

import { _defaultLegacy } from '$lib/composables/defaults.js';
import { convertJStoCSS } from '$lib/plugins/css/convert-js-to-css.js';
import { cssMarker, cssMarkerModern, cssMarkerPalette } from '$lib/plugins/css/marker.js';

export async function mytrilCSS(config: MytrilConfig) {
	const newColors = merge(_defaultLegacy.theme.colors, config?.theme?.colors);
	const newBreakpoints = merge(_defaultLegacy.display.thresholds, config?.display?.thresholds);
	const newRounded = merge(_defaultLegacy.rounded, config?.rounded);
	const newFontFamily = merge(_defaultLegacy.typography.family, config?.typography?.family);
	const newFontSize = merge(_defaultLegacy.typography.size, config?.typography?.size);

	const cssPalette = cssMarkerPalette(config?.theme?.palette);
	const cssJstoCSS = convertJStoCSS({
		theme: config?.theme?.defaultTheme || _defaultLegacy.theme.defaultTheme,
		colors: newColors,
		breakpoints: newBreakpoints,
		rounded: newRounded,
		fonts: {
			family: newFontFamily,
			size: newFontSize
		}
	});
	const cssCSStoCSS = cssMarker(newBreakpoints);

	return cssPalette + cssJstoCSS + cssCSStoCSS;
}

export async function mytrilCSSMorden() {
	const breakpoints = _defaultLegacy.display.thresholds;

	return {
		components: cssMarkerModern(breakpoints)
	};
}
