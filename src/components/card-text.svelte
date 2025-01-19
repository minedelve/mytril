<script lang="ts">
	import type { CardTextProps } from '$lib/types/index.js';

	let { children, is = 'div', opacity, ...rest }: CardTextProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-card-text', rest.class]} style:--opacity={opacity}>
	{@render children?.()}
</svelte:element>
