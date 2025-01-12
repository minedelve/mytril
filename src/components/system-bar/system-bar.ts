import type { ComponentBase } from '$lib/types/component.js';

export interface SystemBarProps extends ComponentBase {
	is?: 'div';
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	window?: boolean;
	absolute?: boolean;
	fixed?: boolean;
	color?: string;
	background?: string;
}
