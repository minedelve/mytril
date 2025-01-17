<script lang="ts">
	import type { ToolbarItemsProps } from '../types/index.js';

	let { children, is = 'div', ...rest }: ToolbarItemsProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-toolbar-items', rest.class]}>
	{@render children?.()}
</svelte:element>
