<script lang="ts">
	import { browser } from '$app/environment';
	import '$lib/styles/fonts.css';
	import '$lib/styles/code.css';
	import '$lib/styles/doc.css';
	import '../app.css';

	import Tracking from '$lib/analytics/tracking.svelte';
	import Rgpd from '$lib/components/rgpd.svelte';
	import FooterCopyright from '$lib/components/footer-copyright.svelte';
	import { onMount } from 'svelte';
	import { setTheme } from 'mytril';

	onMount(() => {
		const storage = browser ? localStorage : null;
		const value = storage == null ? void 0 : storage.getItem('color-scheme');

		setTheme(
			value
				? value
				: browser
					? window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light'
					: 'light'
		);
	});
</script>

<Tracking />

<slot />

<FooterCopyright />

<Rgpd />
