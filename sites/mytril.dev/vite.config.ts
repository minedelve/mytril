import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { mytril } from 'mytril/vite';

export default defineConfig({
	plugins: [sveltekit(), mytril()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
