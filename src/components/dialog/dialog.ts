import type { ComponentBase } from '$lib/types/component.js';

export interface DialogProps extends ComponentBase {
	open?: boolean;
	classContent?: string;
	size?: DialogSize;
	persistent?: boolean;
	fullscreen?: boolean;
	closeWithEsc?: boolean;
	position?: 'bottom' | 'center' | 'top';
	dark?: boolean;
	light?: boolean;
	color?: string;
	background?: string;
}

type DialogSize = 'xs' | 'sm' | 'md' | 'default' | 'lg' | 'xl';
