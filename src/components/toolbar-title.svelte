<script lang="ts">
	import type { ToolbarTitleProps } from '$lib/types/index.js';

	let { children, is = 'div', ...rest }: ToolbarTitleProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-toolbar-title', rest.class]}>
	{@render children?.()}
</svelte:element>
