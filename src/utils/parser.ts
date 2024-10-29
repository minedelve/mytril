/* eslint-disable @typescript-eslint/no-explicit-any */

import { convertJStoCSS2 } from '$lib/plugins/css/convert-js-to-css.js';
import { cssParser } from '$lib/plugins/css/css-parser.js';
import { breakpoints } from '$lib/store/breakpoint.js';
import { rounded } from '$lib/store/rounded.js';
import { colors } from '$lib/store/themes.js';
import { fontFamily, fontSize } from '$lib/store/typography.js';
import { merge } from './merge.js';

export async function mytrilParser2(config: any) {
	const newColors = merge(colors, config?.theme?.colors);
	const newBreakpoints = merge(breakpoints, config?.display?.thresholds);
	const newRounded = merge(rounded, config?.rounded);
	const newFontFamily = merge(fontFamily, config?.typography?.family);
	const newFontSize = merge(fontSize, config?.typography?.size);

	console.log('mytrilParser', newColors, newBreakpoints);
	const cssJstoCSS = convertJStoCSS2({
		theme: config?.theme?.defaultTheme || 'light',
		colors: newColors,
		breakpoints: newBreakpoints,
		rounded: newRounded,
		fonts: {
			family: newFontFamily,
			size: newFontSize
		}
	});

	console.log('cssJstoCSS', cssJstoCSS);

	return cssJstoCSS;
}
