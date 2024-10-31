import {
	roundedClass,
	roundedRoot,
	displayClass,
	elevationClass,
	flexClass,
	floatClass,
	overflowClass,
	positionClass,
	sizingClass,
	spacingClass,
	typographyClass,
	typographyClassBreakpoint,
	typographyRoot,
	colors
} from '$lib/styles/js/index.js';

const mediaQueries = ['min', 'max'];

export const convertJStoCSS = (props: {
	breakpoints: { [key: string]: number };
	rounded: { [key: string]: string };
	colors: { [key: string]: string | { [key: string]: string } };
	fonts: { [key: string]: { [key: string]: string } };
	theme: string;
}) => {
	let css: string = '';

	for (const [breakpoint, screen] of Object.entries(props.breakpoints)) {
		if (breakpoint === 'default') {
			css += colors(props.theme, props.colors);
			css += roundedRoot(props.rounded);
			css += typographyRoot(props.fonts.size, props.fonts.family);

			// class css
			css += typographyClass(props.fonts.family);
			css += elevationClass();
		}

		for (const mediaQuerie of mediaQueries) {
			if (breakpoint !== 'default')
				css += `@media screen and (${mediaQuerie}-width: ${screen}px) {\n`;
			const prefix = mediaQuerie === 'max' ? `max-${breakpoint}` : breakpoint;
			css += roundedClass(prefix, props.rounded);
			css += positionClass(prefix);
			css += sizingClass(prefix);
			css += spacingClass(prefix);
			css += displayClass(prefix);
			css += typographyClassBreakpoint(prefix, props.fonts.size);
			css += overflowClass(prefix);
			css += floatClass(prefix);
			css += flexClass(prefix);
			if (breakpoint !== 'default') css += `}\n`;
		}
	}

	return css;
};
