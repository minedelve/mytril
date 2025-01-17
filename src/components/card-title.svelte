<script lang="ts">
	import type { CardTitleProps } from '../types/index.js';

	let { children, is = 'div', ...rest }: CardTitleProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-card-title', rest.class]}>
	{@render children?.()}
</svelte:element>
