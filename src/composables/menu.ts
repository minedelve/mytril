import { writable, get } from 'svelte/store';

export const menuState = writable<string[]>([]);

export const setMenuListState = (_id: string) => {
	menuState.update((currentState) => {
		if (!currentState.includes(_id)) {
			return [_id];
		}
		return currentState;
	});
};

export const hasMenuListExist = (_id: string): string | undefined => {
	const currentState = get(menuState);
	return currentState.includes(_id) ? _id : undefined;
};

export const removeMenuListState = (_id: string) => {
	menuState.update((currentState) => {
		// Supprimer l'élément si présent
		return currentState.filter((item) => item !== _id);
	});
};
