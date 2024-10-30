<script lang="ts">
	import { innerWidth } from '$lib/composables/display.js';
	$: width = 0;

	$: {
		if (width > 0) {
			innerWidth.set(width);
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<slot />
