import { writable } from 'svelte/store';

const value = {};

export const getConfig = writable(value);
