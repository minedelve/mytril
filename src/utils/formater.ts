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

export const addUnit = (value: string | number) => {
	const regex = /^[0-9.]+$/;
	return typeof value === 'number' || regex.test(String(value)) ? `${value}px` : value;
};

export const formatStyleProperties = (params: {
	background?: string;
	borderColor?: string;
	color?: string;
	border?: string;
	rounded?: string;
	opacity?: string | number;
	borderTopWidth?: string | number;
	borderRightWidth?: string | number;
}) => {
	let style = '';
	if (params?.background) style += `--c-background-color: ${getColor(params?.background)};`;
	if (params?.color) style += `--c-color: ${getColor(params?.color)};`;
	if (params?.borderColor) style += `--c-border-color: ${getColor(params?.borderColor)};`;
	if (params?.rounded) style += `--c-rounded: ${getRounded(params?.rounded)};`;
	if (params?.opacity) style += `--c-opacity: ${params?.opacity};`;
	if (params?.borderTopWidth) style += `border-top-width: ${addUnit(params?.borderTopWidth)};`;
	if (params?.borderRightWidth)
		style += `border-right-width: ${addUnit(params?.borderRightWidth)};`;
	return style;
};

export const formatClassSizeElement = (
	key: string,
	size: {
		_default?: string;
		xs?: string;
		sm?: string;
		md?: string;
		lg?: string;
		xl?: string;
		xxl?: string;
	}
) => {
	let className = '';

	if (size._default) className += `myt-${key}--size-${size._default} `;
	if (size.xs) className += `xs:myt-${key}--size-${size.xs} `;
	if (size.sm) className += `sm:myt-${key}--size-${size.sm} `;
	if (size.md) className += `md:myt-${key}--size-${size.md} `;
	if (size.lg) className += `lg:myt-${key}--size-${size.lg} `;
	if (size.xl) className += `xl:myt-${key}--size-${size.xl} `;
	if (size.xxl) className += `xxl:myt-${key}--size-${size.xxl} `;

	return className;
};
