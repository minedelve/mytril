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
