<script lang="ts">
	import { innerHeight, innerWidth, scrollOrientation, scrollY } from '$lib/composables/display.js';
	import Provider from './provider.svelte';

	// state
	let width = 0;
	let height = 0;
	let y = 0;

	$: {
		if (width > 0) {
			innerWidth.set(width);
		}
		if (height > 0) {
			innerHeight.set(height);
		}
		if (y > 0) {
			scrollY.set(y);

			if (y > $scrollOrientation.position) {
				scrollOrientation.set({
					position: y,
					orientation: 'down'
				});
			} else if (y < $scrollOrientation.position) {
				scrollOrientation.set({
					position: y,
					orientation: 'up'
				});
			}
		}
	}
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} bind:scrollY={y} />

<Provider>
	<slot />
</Provider>
