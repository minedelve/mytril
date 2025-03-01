<script lang="ts">
	import type { SpacerProps } from '$lib/types/index.js';

	let { is = 'div', ...rest }: SpacerProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-spacer', rest.class]}> </svelte:element>
