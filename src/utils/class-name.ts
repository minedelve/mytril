/**
 * Combines multiple class names into a single string.
 *
 * This function takes any number of string arguments and filters out any
 * that are `undefined` or empty, then joins the remaining class names
 * with a space.
 *
 * @param {...(string | undefined)[]} args - The class names to combine.
 * @returns {string} The combined class names as a single string.
 */
export function cn(...args: Array<string | undefined>) {
	return args.filter((cls: string | undefined) => !!cls).join(' ');
}
