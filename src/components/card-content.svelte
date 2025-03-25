<script lang="ts">
	import type { CardContentProps } from '$lib/types/index.js';

	let { children, is = 'div', ...rest }: CardContentProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-card-content', rest.class]}>
	{@render children?.()}
</svelte:element>
