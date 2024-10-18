import { formatBreakpoint } from '$lib/utils/format-class.js';

export function typographyRoot(
	style: {
		[key: string]: { size: string; height: string; spacing: string };
	},
	family: { [key: string]: string }
) {
	let css = '';
	css += ':root {\n';
	for (const [key, value] of Object.entries(style)) {
		css += `--text-${key}: ${value?.size};\n`;
	}
	css += '}\n';

	css += ':root {\n';
	for (const [key, value] of Object.entries(family)) {
		css += `--${key}: ${value};\n`;
	}
	css += '}\n';
	return css;
}

export function typographyClassName(
	weight: { [key: string]: string },
	transform: Array<string>,
	family: { [key: string]: string }
) {
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
	for (const [key, value] of Object.entries(weight)) {
		css += `.font-${key} {\n`;
		css += `font-weight: ${value};\n`;
		css += `}\n`;
	}
	for (const element of transform) {
		css += `.text-${element} {\n`;
		css += `text-transform: ${element};\n`;
		css += `}\n`;
	}
	for (const [key] of Object.entries(family)) {
		css += `.font-${key} {\n`;
		css += `font-family: var(--${key});\n`;
		css += `}\n`;
	}
	return css;
}

export const typographyClassNameBreakpoint = (
	screen: string,
	style: { [key: string]: { size: string; height: string; spacing: string } },
	align: Array<string>
) => {
	let css = '';
	for (const [key, value] of Object.entries(style)) {
		css += `${formatBreakpoint(screen)}text-${key} {\n`;
		css += `font-size: ${value?.size};\n`;
		css += `line-height: ${value?.height};\n`;
		css += `letter-spacing: ${value?.spacing};\n`;
		css += `}\n`;
	}
	for (const element of align) {
		css += `${formatBreakpoint(screen)}text-${element} {\n`;
		css += `text-align: ${element};\n`;
		css += `}\n`;
	}
	return css;
};
