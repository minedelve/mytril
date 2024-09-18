import { roundedRoot, roundedScreen } from '$lib/styles/border-radius.js';
import { elevationGlobal, elevationRoot } from '$lib/styles/elevation.js';
import { positionScreen } from '$lib/styles/position.js';
import { sizingScreen } from '$lib/styles/sizing.js';
import { spacingScreen } from '$lib/styles/spacing.js';
import { typographyGlobal, typographyScreen } from '$lib/styles/typography.js';

export function convertJStoCSS(breakpoints: { [key: string]: string }) {
	let css = ``;

	//root
	css += elevationRoot();
	css += roundedRoot();

	// class
	css += typographyGlobal();
	css += elevationGlobal();

	for (const [breakpoint, screen] of Object.entries(breakpoints)) {
		if (breakpoint !== 'default') css += `@media screen and (min-width: ${screen}) {\n`;
		css += roundedScreen(breakpoint);
		css += positionScreen(breakpoint);
		css += sizingScreen(breakpoint);
		css += spacingScreen(breakpoint);
		css += typographyScreen(breakpoint);
		if (breakpoint !== 'default') css += `}\n`;
	}

	return css;
}
