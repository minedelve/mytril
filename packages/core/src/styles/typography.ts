import { presets } from '$lib/presets/index.js';
import { formatBreakpoint } from '$lib/utils/format-class.js';

export const typographyGlobal = () => {
	let css = '';

	css += `.text-truncate {\n`;
	css += `overflow: hidden;\n`;
	css += `text-overflow: ellipsis;\n`;
	css += `white-space: nowrap;\n`;
	css += `};\n`;

	css += `.text-no-wrap {\n`;
	css += `white-space: nowrap;\n`;
	css += `};\n`;

	css += `.text-break {\n`;
	css += `overflow-wrap: break-word;\n`;
	css += `};\n`;

	css += `.font-italic {\n`;
	css += `font-style: italic;\n`;
	css += `};\n`;

	for (const [key, value] of Object.entries(presets.typography.weight)) {
		css += `.font-${key} {\n`;
		css += `font-weight: ${value};\n`;
		css += `};\n`;
	}

	for (const element of presets.typography.transform) {
		css += `.text-${element} {\n`;
		css += `text-transform: ${element};\n`;
		css += `};\n`;
	}

	return css;
};

export const typographyScreen = (screen: string) => {
	let css = '';

	for (const [key, value] of Object.entries(presets.typography.style)) {
		css += `${formatBreakpoint(screen)}text-${key} {\n`;
		css += `font-size: ${value?.size};\n`;
		css += `line-height: ${value?.height};\n`;
		css += `letter-spacing: ${value?.spacing};\n`;
		css += `};\n`;
	}

	for (const element of presets.typography.align) {
		css += `${formatBreakpoint(screen)}text-${element} {\n`;
		css += `text-align: ${element};\n`;
		css += `};\n`;
	}

	return css;
};
