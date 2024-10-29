<script lang="ts">
	import { useInnerWidth, useBreakpoint } from '$lib/store/breakpoint.js';

	$: innerWidth = 0;

	$: {
		if (innerWidth > 0) {
			useInnerWidth.set(innerWidth);
		}
	}
</script>

<svelte:window bind:innerWidth />

<p>
	Inner Width: {innerWidth}
</p>
<p>
	breakpoint: {$useBreakpoint}
</p>

<slot />
