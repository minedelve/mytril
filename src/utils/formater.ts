import { getColor } from '$lib/composables/colors.js';
import { getRounded } from '$lib/composables/rounded.js';

export const formatRootVar = (key: string) => {
	return `--${key.replaceAll(' ', '-')}`;
};

/**
 * Generates a CSS variable name based on the provided parameters.
 *
 * @param {Object} param0 - The parameters object.
 * @param {string} param0.key - The key for the variable.
 * @param {string} [param0.prefix] - An optional prefix for the variable.
 * @param {'color'} [param0.type] - The type of the variable, supports 'color' , 'typescale', 'corner'.
 * @returns {string} The formatted CSS variable name.
 */
export const rootVariables = ({
	prefix,
	suffix,
	key,
	type
}: {
	key: string;
	prefix?: string;
	suffix?: string;
	type?: 'color' | 'typescale' | 'corner';
}) => {
	let subkey = '';
	if (type === 'color') subkey = 'myt-color-';
	if (type === 'typescale') subkey = 'myt-typescale-';
	if (type === 'corner') subkey = 'myt-shape-corner-';
	return `--${prefix ? prefix + '-' : ''}${subkey}${key.replaceAll(' ', '-')}${suffix ? '-' + suffix : ''}`;
};

export const formatClassName = (key: string) => {
	return key.replaceAll('.', '\\.').replaceAll('%', '');
};

export const formatBreakpoint = (breakpoint: string) => {
	return breakpoint !== 'none' && breakpoint !== 'max-none' ? `.${breakpoint}\\:` : `.`;
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

/**
 * Formats a given date object into a string with the format "hh:mm:ss AM/PM".
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted time string.
 */
export function formatTime(date: Date) {
	let hours = date.getHours();
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStart(2, '0');
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12 || 12; // Convertir en format 12 heures
	return `${hours}:${minutes}:${seconds} ${ampm}`;
}
