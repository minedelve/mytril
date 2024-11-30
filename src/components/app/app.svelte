<script lang="ts">
	import { innerHeight, innerWidth } from '$lib/composables/display.js';
	import Provider from './provider.svelte';

	// state
	let width = 0;
	let height = 0;

	$: {
		if (width > 0) {
			innerWidth.set(width);
		}
		if (height > 0) {
			innerHeight.set(height);
		}
	}
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<Provider>
	<slot />
</Provider>
