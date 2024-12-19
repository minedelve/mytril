import { _defaultLegacy } from '$lib/composables/defaults.js';
import { colors } from '$lib/styles/js/colors.js';

export const prototypeTheme = () => {
	const content = colors('light', _defaultLegacy.theme.colors);

	return content;
};
