import { writable } from 'svelte/store';

export const colors = {
	primary: { light: '#1976D2', dark: '#2196F3' },
	secondary: { light: '#424242', dark: '#424242' },
	tertiary: { light: '#82B1FF', dark: '#FF4081' },
	text: { light: '#1d1b20', dark: '#e6e0e9' },
	'text-variant': { light: '#322f35', dark: '#e6e0e9' },
	'text-soft': { light: '#49454f', dark: '#cac4d0' },
	'text-mute': { light: '#79747e', dark: '#938f99' },
	surface: { light: '#FEF7FF', dark: '#141218' },
	'surface-variant': { light: '#E7E0EC', dark: '#49454F' },
	'surface-container': { light: '#F3EDF7', dark: '#211F26' },
	info: { light: '#2196F3', dark: '#2196F3' },
	success: { light: '#4CAF50', dark: '#4CAF50' },
	error: { light: '#FF5252', dark: '#FF5252' },
	warning: { light: '#FB8C00', dark: '#FB8C00' },
	shadow: { light: '#000000', dark: '#000000' },
	outline: { light: '#79747e', dark: '#938f99' }
};

export const getThemes = writable(colors);
