import { _default } from '$lib/composables/defaults.js';
import { rootVariables } from '$lib/utils/formater.js';

type typographyFamily = { [key: string]: string };
type TypographySize = { [key: string]: string | { [variant: string]: string } };
type CornerSize = { [key: string]: string };

export const prototypeVariables = () => {
	const typographyFamily: typographyFamily = _default.typography.fontFamily;
	const typographySize: TypographySize = _default.typography.fontSize;
	const cornerSize: CornerSize = _default.shape;

	let rootFontFamilyCSS: string = ':root {\n';
	for (const key in typographyFamily) {
		rootFontFamilyCSS += `${rootVariables({ key, type: 'typescale' })}: ${typographyFamily[key]};\n`;
	}
	rootFontFamilyCSS += '}\n';

	let rootFontSizeCSS: string = ':root {\n';
	for (const key in typographySize) {
		rootFontSizeCSS += `${rootVariables({ key, type: 'typescale' })}: ${typographySize[key]};\n`;
	}
	rootFontSizeCSS += '}\n';

	let rootCornerSizeCSS: string = ':root {\n';
	for (const key in cornerSize) {
		rootCornerSizeCSS += `${rootVariables({ key, type: 'corner' })}: ${cornerSize[key]};\n`;
	}
	rootCornerSizeCSS += '}\n';

	return rootFontFamilyCSS + rootFontSizeCSS + rootCornerSizeCSS;
};
