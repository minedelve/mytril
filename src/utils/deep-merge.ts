/**
 * Deeply merges two objects. The `source` object properties will overwrite the `target` object properties.
 * If a property value is an object, it will be recursively merged.
 * If a property value is a string or number, it will directly overwrite the `target` property.
 *
 * @param target - The target object to merge properties into.
 * @param source - The source object containing properties to merge into the target object.
 * @returns A new object with merged properties from both `target` and `source`.
 */
export const deepMerge = (target: Record<string, unknown>, source?: Record<string, unknown>) => {
	const output = { ...target };

	if (source) {
		for (const key in source) {
			if (typeof source[key] === 'string' || typeof source[key] === 'number') {
				output[key] = source[key];
			} else {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					if (output[key]) {
						output[key] = {
							...(typeof output[key] === 'object' && output[key] !== null ? output[key] : {}),
							...(typeof source[key] === 'object' && source[key] !== null ? source[key] : {})
						};
					} else {
						output[key] = source[key];
					}
				}
			}
		}
	}

	return output;
};
