/* eslint-disable @typescript-eslint/no-explicit-any */

import { convertJStoCSS2 } from '$lib/plugins/css/convert-js-to-css.js';
import { cssParser } from '$lib/plugins/css/css-parser.js';
import { breakpoints } from '$lib/store/breakpoint.js';
import { colors } from '$lib/store/themes.js';
import { merge } from './merge.js';

export async function mytrilParser2(config: any) {
	const defaultTheme: string = config?.theme?.defaultTheme || 'light';
	const newColors = merge(colors, config?.theme?.colors);
	const newBreakpoints = merge(breakpoints, config?.display?.thresholds);

	console.log('mytrilParser', defaultTheme, newColors, newBreakpoints);
	const cssJstoCSS = convertJStoCSS2({
		colors: newColors,
		breakpoints: newBreakpoints
	});

	console.log('cssJstoCSS', cssJstoCSS);
}
