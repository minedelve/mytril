<script lang="ts">
	import type { AlertTitleProps } from '../types/index.js';

	let { children, is = 'div', ...rest }: AlertTitleProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-alert-title', rest.class]}>
	{@render children?.()}
</svelte:element>
