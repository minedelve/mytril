import type { MytrilConfig } from '$lib/entry-bundler.js';
import { merge } from '$lib/utils/merge.js';

import { _default } from '$lib/composables/defaults.js';
import { convertJStoCSS } from '$lib/plugins/css/convert-js-to-css.js';
import { cssMarker, cssMarkerPalette } from '$lib/plugins/css/marker.js';

export async function mytrilCSS(config: MytrilConfig) {
	const newColors = merge(_default.theme.colors, config?.theme?.colors);
	const newBreakpoints = merge(_default.display.thresholds, config?.display?.thresholds);
	const newRounded = merge(_default.rounded, config?.rounded);
	const newFontFamily = merge(_default.typography.family, config?.typography?.family);
	const newFontSize = merge(_default.typography.size, config?.typography?.size);

	const cssPalette = cssMarkerPalette(config?.theme?.palette);
	const cssJstoCSS = convertJStoCSS({
		theme: config?.theme?.defaultTheme || _default.theme.defaultTheme,
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
