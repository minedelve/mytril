import type { Snippet } from 'svelte';

export interface ComponentBase {
	id?: string;
	class?: string;
	style?: string;
	children: Snippet;
}
