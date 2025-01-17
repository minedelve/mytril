<script lang="ts">
	import type { ListSubTitleProps } from '../types/index.js';

	let { children, is = 'div', ...rest }: ListSubTitleProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-list-item-subtitle', rest.class]}>
	{@render children?.()}
</svelte:element>
