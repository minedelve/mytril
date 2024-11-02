<script lang="ts">
	import type { Snippet } from 'svelte';
	import { innerWidth } from '$lib/composables/display.js';

	let { children }: { children: Snippet } = $props();
	let width = $state(0);

	$effect(() => {
		if (width > 0) {
			innerWidth.set(width);
		}
	});
</script>

<svelte:window bind:innerWidth={width} />

{@render children?.()}
