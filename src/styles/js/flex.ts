import { formatBreakpoint } from '$lib/utils/formater.js';
import {
	align,
	alignContent,
	alignSelf,
	flex,
	flexDirection,
	grow,
	justify,
	order,
	shrink,
	wrap
} from './_constant.js';

export const flexClass = (breakpoint: string) => {
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
};

const flexGridClass = (breakpoint: string, values: Array<string>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element === '1 1 auto' ? 'fill' : element.replaceAll('%', '').replaceAll(' auto', '').replaceAll(' ', '-').trim()} {\n`;
		css += `flex: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexDirectionClass = (breakpoint: string, values: Array<string>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element} {\n`;
		css += `flex-direction: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexJustifyContentClass = (breakpoint: string, values: Array<string>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}justify-${element === 'flex-start' ? 'start' : element === 'flex-end' ? 'end' : element} {\n`;
		css += `justify-content: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexAlignSelfClass = (breakpoint: string, values: Array<string>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-self-${element} {\n`;
		css += `align-self: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexAlignItemsClass = (breakpoint: string, values: Array<string>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-${element} {\n`;
		css += `align-items: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexAlignContentClass = (breakpoint: string, values: Array<string>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-content-${element === 'flex-start' ? 'start' : element === 'flex-end' ? 'end' : element} {\n`;
		css += `align-content: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexWrapClass = (breakpoint: string, values: Array<string>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element} {\n`;
		css += `flex-wrap: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexOrderClass = (breakpoint: string, values: Array<number>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}order-${element === -1 ? 'first' : element === 13 ? 'last' : element} {\n`;
		css += `order: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexGrowClass = (breakpoint: string, values: Array<number>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-grow-${element} {\n`;
		css += `flex-grow: ${element};\n`;
		css += `}\n`;
	}
	return css;
};

const flexShrinkClass = (breakpoint: string, values: Array<number>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-shrink-${element} {\n`;
		css += `flex-shrink: ${element};\n`;
		css += `}\n`;
	}
	return css;
};
