import { getColor } from '$lib/composables/colors.js';
import { getRounded } from '$lib/composables/rounded.js';

export const formatRootVar = (key: string) => {
	return `--${key.replaceAll(' ', '-')}`;
};

export const formatClassName = (key: string) => {
	return key.replaceAll('.', '\\.').replaceAll('%', '');
};

export const formatBreakpoint = (breakpoint: string) => {
	return breakpoint !== 'default' && breakpoint !== 'max-default' ? `.${breakpoint}\\:` : `.`;
};

export const formatStyleProperties = (params: {
	background?: string;
	color?: string;
	border?: string;
	rounded?: string;
	opacity?: string | number;
}) => {
	let style = '';
	if (params?.background) style += `--c-background-color: ${getColor(params?.background)}; `;
	if (params?.color) style += `--c-color: ${getColor(params?.color)}; `;
	if (params?.rounded) style += `--c-rounded: ${getRounded(params?.rounded)}; `;
	if (params?.opacity) style += `--c-opacity: ${params?.opacity}; `;
	return style;
};
