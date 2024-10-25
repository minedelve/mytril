import { formatBreakpoint } from '$lib/utils/format-class.js';

export function flexClassName(
	breakpoint: string,
	values: {
		[key: string]: Array<string | number>;
	}
) {
	let css = '';

	css += flexGridClassName(breakpoint, values.flex as Array<string>);
	css += flexDirectionClassName(breakpoint, values['flex-direction'] as Array<string>);
	css += flexJustifyContentClassName(breakpoint, values.justify as Array<string>);
	css += flexAlignItemsClassName(breakpoint, values.align as Array<string>);
	css += flexAlignSelfClassName(breakpoint, values['align-self'] as Array<string>);
	css += flexAlignContentClassName(breakpoint, values['align-content'] as Array<string>);
	css += flexWrapClassName(breakpoint, values.wrap as Array<string>);
	css += flexOrderClassName(breakpoint, values.order as Array<number>);
	css += flexShrinkClassName(breakpoint, values.shrink as Array<number>);
	css += flexGrowClassName(breakpoint, values.grow as Array<number>);

	return css;
}

export function flexGridClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element === '1 1 auto' ? 'fill' : element.replaceAll('%', '').replaceAll(' auto', '').replaceAll(' ', '-').trim()} {\n`;
		css += `flex: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexDirectionClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element} {\n`;
		css += `flex-direction: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexJustifyContentClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}justify-${element === 'flex-start' ? 'start' : element === 'flex-end' ? 'end' : element} {\n`;
		css += `justify-content: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexAlignSelfClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-self-${element} {\n`;
		css += `align-self: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexAlignItemsClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-${element} {\n`;
		css += `align-items: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexAlignContentClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}align-content-${element === 'flex-start' ? 'start' : element === 'flex-end' ? 'end' : element} {\n`;
		css += `align-content: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexWrapClassName(breakpoint: string, values: Array<string>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-${element} {\n`;
		css += `flex-wrap: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexOrderClassName(breakpoint: string, values: Array<number>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}order-${element === -1 ? 'first' : element === 13 ? 'last' : element} {\n`;
		css += `order: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexGrowClassName(breakpoint: string, values: Array<number>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-grow-${element} {\n`;
		css += `flex-grow: ${element};\n`;
		css += `}\n`;
	}
	return css;
}

export function flexShrinkClassName(breakpoint: string, values: Array<number>) {
	let css = '';
	for (const element of values) {
		css += `${formatBreakpoint(breakpoint)}flex-shrink-${element} {\n`;
		css += `flex-shrink: ${element};\n`;
		css += `}\n`;
	}
	return css;
}
