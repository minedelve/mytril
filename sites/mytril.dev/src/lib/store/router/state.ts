import { writable } from 'svelte/store';

export const navigation = writable([
	{
		name: 'docs',
		path: '/docs'
	}
]);

export const packageLink = writable([]);

export const social = writable([
	{
		name: 'github',
		icon: 'mdi:github',
		path: 'https://github.com/minedelve/mytril',
		color: ''
	}
]);

export const byMinedelveLink = writable([
	{
		name: 'Go to Mytril Homepage',
		path: '/'
	},
	{
		name: 'Go to Github',
		path: 'https://github.com/minedelve/mytril',
		external: true
	},
	{
		name: 'Join Discord',
		path: 'https://github.com/minedelve/mytril',
		external: true
	}
]);

export const docs = writable([
	{
		section: 'getting started',
		routes: [
			{
				name: 'introduction',
				path: '/docs/introduction'
			}
		]
	}
]);
