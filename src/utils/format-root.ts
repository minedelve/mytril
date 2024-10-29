export const rootCss = (list: { [key: string]: string | number }) => {
	let css: string = `:root {\n`;
	for (const element in list) {
		const key = `--${element.replaceAll(' ', '-')}`;
		css += `--${key.replaceAll(' ', '-')}: ${list[key]};\n`;
	}
	return (css += `}\n`);
};
