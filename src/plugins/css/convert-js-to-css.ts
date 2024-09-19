/* eslint-disable @typescript-eslint/no-explicit-any */
import { roundedClassName, roundedRoot } from '$lib/assets/styles/border-radius.js';
import { colorsPalette, colorsThemes } from '$lib/assets/styles/colors.js';
import { elevationClassName, elevationRoot } from '$lib/assets/styles/elevation.js';
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
	} = props;
	let css: string = '';
	for (const [breakpoint, screen] of Object.entries(breakpoints)) {
		if (breakpoint === 'default') {
			// root
			css += colorsPalette(palette);
			css += colorsThemes(defaultTheme, colors);
			css += roundedRoot(rounded);
			css += elevationRoot(elevation);
			css += typographyRoot(style);
			// class
			css += elevationClassName(elevation);
			css += typographyClassName(weight, transform);
		}

		if (breakpoint !== 'default') css += `@media screen and (min-width: ${screen}) {\n`;
		css += roundedClassName(breakpoint, rounded);
		css += positionClassName(breakpoint, position);
		css += sizingClassName(breakpoint, sizing);
		css += spacingClassName(breakpoint, spacing);
		css += typographyClassNameBreakpoint(breakpoint, style, align);
		if (breakpoint !== 'default') css += `}\n`;
	}
	return css;
}
