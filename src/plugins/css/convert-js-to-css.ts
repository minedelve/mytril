/* eslint-disable @typescript-eslint/no-explicit-any */
import { roundedClassName, roundedRoot } from '$lib/assets/styles/border-radius.js';
import { colorsPalette, colorsThemes } from '$lib/assets/styles/colors.js';
import { elevationClassName } from '$lib/assets/styles/elevation.js';
import { positionClassName } from '$lib/assets/styles/position.js';
import { sizingClassName } from '$lib/assets/styles/sizing.js';
import { spacingClassName } from '$lib/assets/styles/spacing.js';
import {
	typographyClassName,
	typographyClassNameBreakpoint,
	typographyRoot
} from '$lib/assets/styles/typography.js';

export function convertJStoCSS(props: any) {
	const {
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
	} = props;
	let css: string = '';
	for (const [breakpoint, screen] of Object.entries(thresholds)) {
		if (breakpoint === 'default') {
			// root
			css += colorsPalette(palette);
			css += colorsThemes(defaultTheme, colors);
			css += roundedRoot(rounded);
			// css += elevationRoot(elevation);
			css += typographyRoot(fontStyle, fontFamily);
			// class
			css += elevationClassName(elevation);
			css += typographyClassName(fontWeight, fontTransform, fontFamily);
		}

		if (breakpoint !== 'default') css += `@media screen and (min-width: ${screen}) {\n`;
		css += roundedClassName(breakpoint, rounded);
		css += positionClassName(breakpoint, position);
		css += sizingClassName(breakpoint, sizing);
		css += spacingClassName(breakpoint, spacing);
		css += typographyClassNameBreakpoint(breakpoint, fontStyle, fontAlign);
		if (breakpoint !== 'default') css += `}\n`;
	}
	return css;
}
