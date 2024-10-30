export const cssMinimify = (css: string): string => {
	css = css.replace(/\/\*[\s\S]*?\*\//g, '');
	css = css.replace(/\s*([{};:,\s])\s*/g, '$1');
	css = css.replace(/\n/g, '');
	css = css.trim();
	return css;
};
