import { cssParser, cssParserComponents, cssParserPalette } from './parser.js';

const markerBreakpoint = {
	start: '/* @breakpoints */',
	end: '/*! @breakpoints */'
};

export const cssMarkerPalette = (palette?: string) => {
	return cssParserPalette(palette);
};

export const cssMarker = (breakpoints: { [key: string]: number }): string => {
	const css = cssParser() + '\n' + cssParserComponents();
	const startMarkerLength = markerBreakpoint.start.length;
	const endMarkerLength = markerBreakpoint.end.length;

	let startIndex = 0;
	let endIndex = 0;
	let extractedContent = '';
	let cleanedCSS = '';
	let lastEndIndex = 0;

	while ((startIndex = css.indexOf(markerBreakpoint.start, endIndex)) !== -1) {
		endIndex = css.indexOf(markerBreakpoint.end, startIndex + startMarkerLength);
		if (endIndex !== -1) {
			extractedContent += css.substring(startIndex + startMarkerLength, endIndex).trim() + '\n';
			cleanedCSS += css.substring(lastEndIndex, startIndex);
			lastEndIndex = endIndex + endMarkerLength;
		} else {
			break;
		}
	}

	cleanedCSS += css.substring(lastEndIndex);

	let response = '';
	if (extractedContent && extractedContent !== '') {
		for (const property in breakpoints) {
			if (property !== 'default') {
				response += `@media screen and (min-width: ${breakpoints[property]}px) {`;
				response += extractedContent.trim().replaceAll('[breakpoint]', `.${property}\\:`);
				response += `}`;
				response += `@media screen and (max-width: ${breakpoints[property]}px) {`;
				response += extractedContent.trim().replaceAll('[breakpoint]', `.max-${property}\\:`);
				response += `}`;
			} else {
				response += extractedContent.trim().replaceAll('[breakpoint]', `.`);
			}
		}
	}

	return cleanedCSS + response.trim();
};
