import { formatRootVar, formatBreakpoint } from '$lib/utils/formater.js';

export const roundedRoot = (values: { [key: string]: string }) => {
	let css = ':root {\n';
	for (const [key, value] of Object.entries(values)) {
		css += `${formatRootVar('rounded-' + key)}: ${value};\n`;
	}
	return (css += '}\n');
};

export const roundedClass = (screen: string, values: { [key: string]: string }) => {
	let css = '';
	for (const [key, value] of Object.entries(values)) {
		css += `${formatBreakpoint(screen)}rounded${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-radius: ${value};\n`;
		css += `}\n`;
		// top
		css += `${formatBreakpoint(screen)}rounded-t${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-top-left-radius: ${value};\n`;
		css += `border-top-right-radius: ${value};\n`;
		css += `}\n`;
		// top right
		css += `${formatBreakpoint(screen)}rounded-tr${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-top-right-radius: ${value};\n`;
		css += `}\n`;
		// top left
		css += `${formatBreakpoint(screen)}rounded-tl${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-top-left-radius: ${value};\n`;
		css += `}\n`;
		// bottom
		css += `${formatBreakpoint(screen)}rounded-b${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-bottom-left-radius: ${value};\n`;
		css += `border-bottom-right-radius: ${value};\n`;
		css += `}\n`;
		// bottom right
		css += `${formatBreakpoint(screen)}rounded-br${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-bottom-right-radius: ${value};\n`;
		css += `}\n`;
		// bottom left
		css += `${formatBreakpoint(screen)}rounded-bl${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-bottom-left-radius: ${value};\n`;
		css += `}\n`;
		// left
		css += `${formatBreakpoint(screen)}rounded-l${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-top-left-radius: ${value};\n`;
		css += `border-bottom-left-radius: ${value};\n`;
		css += `}\n`;
		// right
		css += `${formatBreakpoint(screen)}rounded-r${key !== 'default' ? '-' + key : ''} {\n`;
		css += `border-top-right-radius: ${value};\n`;
		css += `border-bottom-right-radius: ${value};\n`;
		css += `}\n`;
	}
	return css;
};
