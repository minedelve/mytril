import { spacing, spacingList } from '$lib/api/spacing.js';
import { sizing } from '$lib/api/sizing.js';
import { position } from '$lib/api/position.js';
import { display } from '$lib/api/display.js';
import { rounded } from '$lib/api/rounded.js';
import { elevation } from '$lib/api/elevation.js';

export function convertJStoCSS() {
	let cssDefault = ``;

	// spacing
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

	// sizing
	for (const property in sizing) {
		for (const element of sizing[property]) {
			if (property === 'height') {
				cssDefault += `.h-${element} {\n`;
				cssDefault += `height: ${element};\n`;
				cssDefault += `};\n`;
			}

			if (property === 'width') {
				cssDefault += `.w-${element} {\n`;
				cssDefault += `width: ${element};\n`;
				cssDefault += `};\n`;
			}
		}
	}

	// position
	for (const element of position) {
		cssDefault += `.${element} {\n`;
		cssDefault += `position: ${element};\n`;
		cssDefault += `};\n`;
	}

	// display
	for (const element of display) {
		cssDefault += `.d-${element} {\n`;
		cssDefault += `display: ${element};\n`;
		cssDefault += `};\n`;
	}

	// border-radius
	for (const [key, value] of Object.entries(rounded)) {
		cssDefault += makeCssClassNameRounded(key, value);
	}

	//elevation
	for (const [index, value] of Object.entries(elevation)) {
		cssDefault += `.elevation-${index} {\n`;
		cssDefault += `box-shadow: ${value[0]} color-mix(in oklab, var(--c-shadow) 20%, transparent),
		${value[1]} color-mix(in oklab, var(--c-shadow) 14%, transparent),
		${value[2]} color-mix(in oklab, var(--c-shadow) 12%, transparent);\n`;
		cssDefault += `};\n`;
	}

	// console.log('RESULT', cssDefault);
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

const makeCssClassNameRounded = (key: string, value: string) => {
	let css = '';

	css += `.rounded${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-radius: ${value};\n`;
	css += `};\n`;
	// top
	css += `.rounded-t${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `};\n`;
	// top right
	css += `.rounded-tr${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `};\n`;
	// top left
	css += `.rounded-tl${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `};\n`;
	// bottom
	css += `.rounded-b${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `};\n`;
	// bottom right
	css += `.rounded-br${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `};\n`;
	// bottom left
	css += `.rounded-bl${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `};\n`;
	// left
	css += `.rounded-l${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-left-radius: ${value};\n`;
	css += `border-bottom-left-radius: ${value};\n`;
	css += `};\n`;
	// right
	css += `.rounded-r${key !== 'default' ? '-' + key : ''} {\n`;
	css += `border-top-right-radius: ${value};\n`;
	css += `border-bottom-right-radius: ${value};\n`;
	css += `};\n`;
	return css;
};
