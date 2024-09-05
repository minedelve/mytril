import { writable } from 'svelte/store';

export const navigation = writable([
	{
		name: 'docs',
		path: '/docs/introduction'
	}
]);

export const packageLink = writable([
	{
		name: 'README',
		path: 'https://github.com/minedelve/mytril/blob/main/README.md'
	},
	{
		name: 'CHANGELOG',
		path: 'https://github.com/minedelve/mytril/blob/main/CHANGELOG.md'
	}
]);

export const social = writable([
	{
		name: 'github',
		icon: 'mdi:github',
		path: 'https://github.com/minedelve/mytril',
		color: ''
	},
	{
		name: 'discord',
		icon: 'ic:baseline-discord',
		path: 'https://discord.gg/fwyaGUhbav',
		color: ''
	}
]);

export const docs = writable([
	{
		section: 'getting started',
		routes: [
			{
				name: 'introduction',
				path: '/docs/introduction'
			},
			{
				name: 'installation',
				path: '/docs/installation'
			}
		]
	},
	{
		section: 'Customization',
		routes: [
			{
				name: 'themes',
				path: '/docs/themes'
			},
			{
				name: 'theme switcher',
				path: '/docs/theme-switcher'
			},
			{
				name: 'colors',
				path: '/docs/colors'
			},
			{
				name: 'breakpoints',
				path: '/docs/breakpoints'
			}
		]
	},
	{
		section: 'tools',
		routes: [
			{
				name: 'capitalize',
				path: '/docs/tools/capitalize'
			}
		]
	}
]);
