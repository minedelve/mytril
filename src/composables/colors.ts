import { writable, type Writable } from 'svelte/store';
import { _default } from './defaults.js';

const colors: Writable<{ [key: string]: string | { [key: string]: string } }> = writable(
	_default.theme.colors
);

export const setColors = (list: { [key: string]: string | { [key: string]: string } }) => {
	colors.set(list);
};
