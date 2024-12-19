import { _default } from '$lib/composables/defaults.js';
import { rootVariables } from '$lib/utils/formater.js';

export const prototypeVariables = () => {
	const typographyFamily = _default.typography.fontFamily;
	const typographySize = _default.typography.fontSize;

	let rootFontFamilyCSS: string = '';
	rootFontFamilyCSS += `:root {\n`;
	for (const key in typographyFamily) {
		rootFontFamilyCSS += `${rootVariables({ key, type: 'typography' })}: ${typographyFamily[key]};\n`;
	}
	rootFontFamilyCSS += `}\n`;

	let rootFontSizeCSS: string = '';
	rootFontSizeCSS += `:root {\n`;
	for (const key in typographySize) {
		if (typeof typographySize[key] === 'string') {
			rootFontSizeCSS += `${rootVariables({ key: `size-${key}`, type: 'typography' })}: ${typographySize[key]};\n`;
		} else {
			for (const variant in typographySize[key]) {
				rootFontSizeCSS += `${rootVariables({ key: `size-${key}-${variant}`, type: 'typography' })}: ${typographySize[key][variant]};\n`;
			}
		}
	}
	rootFontSizeCSS += `}\n`;

	return rootFontFamilyCSS + rootFontSizeCSS;
};
