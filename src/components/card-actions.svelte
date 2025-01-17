<script lang="ts">
	import type { CardActionsProps } from '../types/index.js';

	let { children, is = 'div', ...rest }: CardActionsProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-card-actions', rest.class]}>
	{@render children?.()}
</svelte:element>
