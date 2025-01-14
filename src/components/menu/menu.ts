import type { ComponentBase } from '$lib/types/component.js';
import type { Snippet } from 'svelte';

export interface MenuProps extends ComponentBase {
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
	openOnHover?: boolean;
	closeOnClick?: boolean;
	color?: string;
	background?: string;
	activator?: Snippet<[object, (state: string) => void]>;
}
