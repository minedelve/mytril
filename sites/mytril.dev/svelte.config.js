import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// remarkModules
import remarkHeadingId from 'remark-heading-id';

// node
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			remarkPlugins: [remarkHeadingId],
			extensions: ['.md'],
			layout: {
				docs: dirname(fileURLToPath(import.meta.url)) + '/src/lib/mdsvex/docs.svelte',
				_: dirname(fileURLToPath(import.meta.url)) + '/src/lib/mdsvex/default.svelte'
			}
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			out: 'build',
			precompress: true,
			envPrefix: ''
		}),
		paths: {
			relative: true
		}
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
