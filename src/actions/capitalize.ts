/**
 * Capitalizes the first letter of each sentence in a given string.
 * Sentences are determined by punctuation marks such as '.', '!', '?', and '…' followed by whitespace.
 *
 * @param sentence - The string to be capitalized.
 * @returns The capitalized string.
 */
export function capitalize(sentence: string) {
	if (sentence.length === 0) return sentence;
	const separators = /([.!?…]\s*)/;
	const parts = sentence.split(separators);
	for (let i = 0; i < parts.length; i++) {
		if (i % 2 === 0) {
			parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
		}
	}
	return parts.join('');
}
