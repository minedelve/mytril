<script lang="ts">
	import type { AppBarTitleProps } from '$lib/types/index.js';

	let { children, is = 'div', ...rest }: AppBarTitleProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-app-bar-title', rest.class]}>
	{@render children?.()}
</svelte:element>
