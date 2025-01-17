import type { ComponentBase } from '$lib/types/component.js';
import type { Snippet } from 'svelte';

export interface TooltipProps extends ComponentBase {
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	label?: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
	color?: string;
	background?: string;
	tooltip?: Snippet;
}
