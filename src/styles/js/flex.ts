import { formatBreakpoint } from '$lib/utils/formater.js';
import { configDefault } from '../../presets/config.full.js';

export const flexClass = (breakpoint: string) => {
	let css = '';

	css += flexGridClass(breakpoint, configDefault.assets!.flex!);
	css += flexDirectionClass(breakpoint, configDefault.assets!.flexDirection!);
	css += flexJustifyContentClass(breakpoint, configDefault.assets!.justify!);
	css += flexAlignItemsClass(breakpoint, configDefault.assets!.align!);
	css += flexAlignSelfClass(breakpoint, configDefault.assets!.alignSelf!);
	css += flexAlignContentClass(breakpoint, configDefault.assets!.alignContent!);
	css += flexWrapClass(breakpoint, configDefault.assets!.wrap!);
	css += flexOrderClass(breakpoint, configDefault.assets!.order!);
	css += flexShrinkClass(breakpoint, configDefault.assets!.shrink!);
	css += flexGrowClass(breakpoint, configDefault.assets!.grow!);
	css += flexOffsetClass(breakpoint, configDefault.assets!.offset!);

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

const flexOffsetClass = (breakpoint: string, values: Array<number>) => {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}offset-${element} {\n`;
		css += `margin-inline-start: calc((100% / 12) * ${element});\n`;
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
