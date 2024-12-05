<script lang="ts">
	import { innerWidth } from '$lib/composables/display.js';
	import MytrilProvider from '$lib/labs/MytrilProvider.svelte';

	// state
	let width = 0;

	$: {
		if (width > 0) {
			innerWidth.set(width);
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<MytrilProvider>
	<slot />
</MytrilProvider>
