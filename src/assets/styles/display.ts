import { formatBreakpoint } from '$lib/utils/format-class.js';

const display = [
	'none',
	'flex',
	'inline',
	'inline-block',
	'table',
	'table-cell',
	'table-row',
	'inline-flex',
	'block',
	'grid'
];

export function displayClass(screen: string) {
	let css = '';
	for (const element of display) {
		css += `${formatBreakpoint(screen)}${element} {\n`;
		css += `display: ${element};\n`;
		css += `}\n`;
	}
	return css;
}
