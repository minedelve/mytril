<script lang="ts">
	import type { CardItemProps } from '../types/index.js';

	let { children, prepend, append, is = 'div', ...rest }: CardItemProps = $props();
</script>

<svelte:element this={is} {...rest} class={['myt-card-item', rest.class]}>
	{#if prepend}
		<div class="myt-card-item--prepend">
			{@render prepend?.()}
		</div>
	{/if}
	<div class="myt-card-item--content">
		{@render children?.()}
	</div>
	{#if append}
		<div class="myt-card-item--append">
			{@render append?.()}
		</div>
	{/if}
</svelte:element>
