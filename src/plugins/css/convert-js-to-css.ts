/* eslint-disable @typescript-eslint/no-explicit-any */
// import { roundedClassName, roundedRoot } from '$lib/assets/styles/border-radius.js';
// import { colorsPalette, colorsThemes } from '$lib/assets/styles/colors.js';
// import { displayClassName } from '$lib/assets/styles/display.js';
// import { elevationClass, elevationClassName, elevationRoot } from '$lib/assets/styles/elevation.js';
// import { flexClassName } from '$lib/assets/styles/flex.js';
// import { floatClassName } from '$lib/assets/styles/float.js';
// import { overflowClassName } from '$lib/assets/styles/overflow.js';
// import { positionClassName } from '$lib/assets/styles/position.js';
// import { sizingClassName } from '$lib/assets/styles/sizing.js';
// import { spacingClassName } from '$lib/assets/styles/spacing.js';
// import {
// 	typographyClass,
// 	typographyClassName,
// 	typographyClassNameBreakpoint,
// 	typographyRoot
// } from '$lib/assets/styles/typography.js';
// import { rootCss } from '$lib/utils/format-root.js';
// import { colors } from './helper.js';

import { roundedClass, roundedRoot } from '$lib/assets/styles/border-radius.js';
import { displayClass } from '$lib/assets/styles/display.js';
import { elevationClass } from '$lib/assets/styles/elevation.js';
import { flexClass } from '$lib/assets/styles/flex.js';
import { floatClass } from '$lib/assets/styles/float.js';
import { overflowClass } from '$lib/assets/styles/overflow.js';
import { positionClass } from '$lib/assets/styles/position.js';
import { sizingClass } from '$lib/assets/styles/sizing.js';
import { spacingClass } from '$lib/assets/styles/spacing.js';
import {
	typographyClass,
	typographyClassBreakpoint,
	typographyRoot
} from '$lib/assets/styles/typography.js';
import { colors } from './helper.js';

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
		fontFamily,
		display,
		overflow,
		float,
		grids
	} = props;
	let css: string = '';
	// for (const [breakpoint, screen] of Object.entries(thresholds)) {
	// 	if (breakpoint === 'default') {
	// 		// root
	// 		css += colorsPalette(palette);
	// 		css += colorsThemes(defaultTheme, colors);
	// 		css += roundedRoot(rounded);
	// 		css += typographyRoot(fontStyle, fontFamily);
	// 		// class
	// 		css += elevationClassName(elevation);
	// 		css += typographyClassName(fontWeight, fontTransform, fontFamily);
	// 	}

	// 	if (breakpoint !== 'default') css += `@media screen and (min-width: ${screen}) {\n`;
	// 	css += roundedClassName(breakpoint, rounded);
	// 	css += positionClassName(breakpoint, position);
	// 	css += sizingClassName(breakpoint, sizing);
	// 	css += spacingClassName(breakpoint, spacing);
	// 	css += displayClassName(breakpoint, display);
	// 	css += typographyClassNameBreakpoint(breakpoint, fontStyle, fontAlign);
	// 	css += overflowClassName(breakpoint, overflow);
	// 	css += floatClassName(breakpoint, float);
	// 	css += flexClassName(breakpoint, grids);
	// 	if (breakpoint !== 'default') css += `}\n`;

	// 	if (breakpoint !== 'default') css += `@media screen and (max-width: ${screen}) {\n`;
	// 	css += roundedClassName(`max-${breakpoint}`, rounded);
	// 	css += positionClassName(`max-${breakpoint}`, position);
	// 	css += sizingClassName(`max-${breakpoint}`, sizing);
	// 	css += spacingClassName(`max-${breakpoint}`, spacing);
	// 	css += displayClassName(`max-${breakpoint}`, display);
	// 	css += typographyClassNameBreakpoint(`max-${breakpoint}`, fontStyle, fontAlign);
	// 	css += overflowClassName(`max-${breakpoint}`, overflow);
	// 	css += floatClassName(`max-${breakpoint}`, float);
	// 	css += flexClassName(`max-${breakpoint}`, grids);
	// 	if (breakpoint !== 'default') css += `}\n`;
	// }
	return css;
}

export function convertJStoCSS2(props: any) {
	let css: string = '';

	for (const [breakpoint, screen] of Object.entries(props.breakpoints)) {
		console.log('breakpoint', breakpoint, screen);

		if (breakpoint === 'default') {
			css += colors(props.theme, props.colors);
			css += roundedRoot(props.rounded);
			css += typographyRoot(props.fonts.size, props.fonts.family);

			// class css
			css += typographyClass(props.fonts.family);
			css += elevationClass();
		}

		if (breakpoint !== 'default') css += `@media screen and (min-width: ${screen}) {\n`;
		css += roundedClass(breakpoint, props.rounded);
		css += positionClass(breakpoint);
		css += sizingClass(breakpoint);
		css += spacingClass(breakpoint);
		css += displayClass(breakpoint);
		css += typographyClassBreakpoint(breakpoint, props.fonts.size);
		css += overflowClass(breakpoint);
		css += floatClass(breakpoint);
		css += flexClass(breakpoint);
		if (breakpoint !== 'default') css += `}\n`;

		if (breakpoint !== 'default') css += `@media screen and (max-width: ${screen}) {\n`;
		css += roundedClass(`max-${breakpoint}`, props.rounded);
		css += positionClass(`max-${breakpoint}`);
		css += sizingClass(`max-${breakpoint}`);
		css += spacingClass(`max-${breakpoint}`);
		css += displayClass(`max-${breakpoint}`);
		css += typographyClassBreakpoint(`max-${breakpoint}`, props.fonts.size);
		css += overflowClass(`max-${breakpoint}`);
		css += floatClass(`max-${breakpoint}`);
		css += flexClass(`max-${breakpoint}`);
		if (breakpoint !== 'default') css += `}\n`;
	}

	return css;
}
