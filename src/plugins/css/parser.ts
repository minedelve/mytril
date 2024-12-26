const markerBreakpoint = {
	start: '/* @breakpoints */',
	end: '/*! @breakpoints */'
};

/**
 * Parses the given CSS string and extracts content marked with specific breakpoints.
 * It then generates media queries based on the provided breakpoints and appends them to the cleaned CSS.
 *
 * @param breakpoints - An object where keys are breakpoint names and values are the corresponding pixel values.
 * @param css - The CSS string to be parsed and processed.
 * @returns The cleaned CSS string with appended media queries based on the breakpoints.
 */
export const cssParser = (breakpoints: { [key: string]: number }, css: string): string => {
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
			console.log('property', property);
			if (property !== 'none') {
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
