<script lang="ts">
	import type { ListTitleProps } from '$lib/types/index.js';

	let { children, is = 'div', ...rest }: ListTitleProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-list-item-title', rest.class]}>
	{@render children?.()}
</svelte:element>
