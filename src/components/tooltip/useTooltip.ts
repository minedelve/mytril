import { getContext } from 'svelte';

export type TooltipContextFn = (param?: {
	id: string;
	content: string | undefined;
	screen: { x: number; y: number };
}) => void;

export const useTooltip = (): TooltipContextFn => {
	// Récupérer la fonction définie dans `Provider`
	const showTooltip = getContext<TooltipContextFn>('showTooltip');

	if (!showTooltip) {
		throw new Error('Tooltip context is not defined.');
	}

	return showTooltip;
};
