import type { TypographySize } from '$lib/types/mytril.js';
import { formatRootVar, formatBreakpoint } from '$lib/utils/formater.js';
import { configDefault } from '../../presets/config.full.js';

export const typographyRoot = (
	style: {
		[key: string]: string;
	},
	family: { [key: string]: string }
) => {
	let css = '';
	css += ':root {\n';
	for (const [key, value] of Object.entries(style)) {
		css += `${formatRootVar('text-' + key)}: ${value};\n`;
	}
	css += '}\n';

	css += ':root {\n';
	for (const [key, value] of Object.entries(family)) {
		css += `${formatRootVar(key)}: ${value};\n`;
	}
	css += '}\n';
	return css;
};

export const typographyClass = (family: { [key: string]: string }) => {
	let css = '';
	css += `.text-truncate {\n`;
	css += `overflow: hidden;\n`;
	css += `text-overflow: ellipsis;\n`;
	css += `white-space: nowrap;\n`;
	css += `}\n`;
	css += `.text-no-wrap {\n`;
	css += `white-space: nowrap;\n`;
	css += `}\n`;
	css += `.text-break {\n`;
	css += `overflow-wrap: break-word;\n`;
	css += `}\n`;
	css += `.font-italic {\n`;
	css += `font-style: italic;\n`;
	css += `}\n`;
	for (const [key, value] of Object.entries(configDefault.typography!.fontWeight!)) {
		css += `.font-${key} {\n`;
		css += `font-weight: ${value};\n`;
		css += `}\n`;
	}
	for (const element of configDefault.typography!.fontTransform!) {
		css += `.text-${element} {\n`;
		css += `text-transform: ${element};\n`;
		css += `}\n`;
	}
	for (const [key] of Object.entries(family)) {
		css += `.font-${key} {\n`;
		css += `font-family: var(--myt-typescale-${key});\n`;
		css += `}\n`;
	}
	return css;
};

export const typographyClassBreakpoint = (screen: string, size: TypographySize) => {
	let css = '';
	for (const [key, value] of Object.entries(size)) {
		css += `${formatBreakpoint(screen)}text-${key} {\n`;
		css += `font-size: ${value};\n`;
		css += `}\n`;
	}
	for (const element of configDefault.typography!.fontAlign!) {
		css += `${formatBreakpoint(screen)}text-${element} {\n`;
		css += `text-align: ${element};\n`;
		css += `}\n`;
	}
	return css;
};
