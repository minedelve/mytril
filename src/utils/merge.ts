/* eslint-disable @typescript-eslint/no-explicit-any */
export const merge = (target: any, source?: any) => {
	const output = { ...target };

	if (source) {
		for (const key in source) {
			if (typeof source[key] === 'string' || typeof source[key] === 'number') {
				output[key] = source[key];
			} else {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					if (output[key]) {
						output[key] = { ...output[key], ...source[key] };
					} else {
						output[key] = source[key];
					}
				}
			}
		}
	}

	return output;
};
