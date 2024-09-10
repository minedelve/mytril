import { spacing } from '$lib/api/spacing.js';

const spacingList = [
	{
		property: 'margin',
		name: 'm',
		negative: true
	},
	{
		property: 'padding',
		name: 'p',
		negative: false
	},
	{
		property: 'gap',
		name: 'g',
		negative: false
	}
];

export function convertJStoCSS() {
	let cssDefault = ``;

	spacingList.map((_class) => {
		if (_class?.property === 'margin') cssDefault += makeCssClassName(_class, 'auto', 'auto');
		for (const [key, value] of Object.entries(spacing)) {
			if (_class?.property === 'margin' || _class?.property === 'padding')
				cssDefault += makeCssClassName(_class, key, value);
			if (_class?.property === 'gap') cssDefault += makeCssClassNameGap(_class, key, value);

			if (_class?.property === 'margin' && value !== '0')
				cssDefault += makeCssClassName(_class, key, value, true);
		}
	});

	console.log('RESULT', cssDefault);
	return cssDefault;
}

const makeCssClassName = (element: any, key: string, value: string, negative?: boolean) => {
	let css = '';

	// top
	css += `.${element?.name}t-${negative ? 'n' : ''}${key} {\n`;
	css += `${element?.property}-top: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// bottom
	css += `.${element?.name}b-${negative ? 'n' : ''}${key} {\n`;
	css += `${element?.property}-bottom: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// left
	css += `.${element?.name}l-${negative ? 'n' : ''}${key} {\n`;
	css += `${element?.property}-left: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// right
	css += `.${element?.name}r-${negative ? 'n' : ''}${key} {\n`;
	css += `${element?.property}-right: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// auto
	css += `.${element?.name}x-${negative ? 'n' : ''}${key} {\n`;
	css += `${element?.property}-left: ${negative ? '-' : ''}${value};\n`;
	css += `${element?.property}-right: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;

	css += `.${element?.name}y-${negative ? 'n' : ''}${key} {\n`;
	css += `${element?.property}-top: ${negative ? '-' : ''}${value};\n`;
	css += `${element?.property}-bottom: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;
	// all
	css += `.${element?.name}a-${negative ? 'n' : ''}${key} {\n`;
	css += `${element?.property}: ${negative ? '-' : ''}${value};\n`;
	css += `};\n`;

	return css;
};

const makeCssClassNameGap = (element: any, key: string, value: string) => {
	let css = '';

	// x
	css += `.${element?.name}x-${key} {\n`;
	css += `column-${element?.property}: ${value};\n`;
	css += `};\n`;
	// y
	css += `.${element?.name}y-${key} {\n`;
	css += `row-${element?.property}: ${value};\n`;
	css += `};\n`;
	// gap
	css += `.${element?.name}a-${key} {\n`;
	css += `${element?.property}: ${value};\n`;
	css += `};\n`;

	return css;
};
