let idCounter = 0;

export const uniqueID = (prefix: string = 'el'): string => {
	const uniquePart = Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
	idCounter++;
	return `${prefix}:${uniquePart}:${idCounter}`;
};
