import { formatBreakpoint } from '$lib/utils/format-class.js';

const flex = [
	'1 1 auto',
	'1 1 0%',
	'1 0 0%',
	'0 1 auto',
	'0 0 auto',
	'1 1 0%',
	'1 1 100%',
	'1 0 0%',
	'1 0 100%',
	'0 1 0%',
	' 0 1 100%',
	' 0 0 0%',
	'0 0 100%'
];
const flexDirection = ['row', 'row-reverse', 'column', 'column-reverse'];
const justify = [
	'flex-start',
	'flex-end',
	'center',
	'space-between',
	'space-around',
	'space-evenly'
];
const align = ['start', 'end', 'center', 'baseline', 'stretch'];
const alignSelf = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'auto'];
const alignContent = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'auto'];
const wrap = ['wrap', 'wrap-reverse', 'nowrap'];
const order = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const shrink = [0, 1];
const grow = [0, 1];

export function flexClass(breakpoint: string) {
	let css = '';

	css += flexGridClass(breakpoint, flex);
	css += flexDirectionClass(breakpoint, flexDirection);
	css += flexJustifyContentClass(breakpoint, justify);
	css += flexAlignItemsClass(breakpoint, align);
	css += flexAlignSelfClass(breakpoint, alignSelf);
	css += flexAlignContentClass(breakpoint, alignContent);
	css += flexWrapClass(breakpoint, wrap);
	css += flexOrderClass(breakpoint, order);
	css += flexShrinkClass(breakpoint, shrink);
	css += flexGrowClass(breakpoint, grow);

	return css;
}

function flexGridClass(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element === '1 1 auto' ? 'fill' : element.replaceAll('%', '').replaceAll(' auto', '').replaceAll(' ', '-').trim()} {\n`;
		css += `flex: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexDirectionClass(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element} {\n`;
		css += `flex-direction: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexJustifyContentClass(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}justify-${element === 'flex-start' ? 'start' : element === 'flex-end' ? 'end' : element} {\n`;
		css += `justify-content: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexAlignSelfClass(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-self-${element} {\n`;
		css += `align-self: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexAlignItemsClass(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-${element} {\n`;
		css += `align-items: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexAlignContentClass(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-content-${element === 'flex-start' ? 'start' : element === 'flex-end' ? 'end' : element} {\n`;
		css += `align-content: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexWrapClass(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element} {\n`;
		css += `flex-wrap: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexOrderClass(breakpoint: string, values: Array<number>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}order-${element === -1 ? 'first' : element === 13 ? 'last' : element} {\n`;
		css += `order: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexGrowClass(breakpoint: string, values: Array<number>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-grow-${element} {\n`;
		css += `flex-grow: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

function flexShrinkClass(breakpoint: string, values: Array<number>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-shrink-${element} {\n`;
		css += `flex-shrink: ${element};\n`;
		css += `}\n`;
	}
	return css;
}
