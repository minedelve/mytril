<script lang="ts">
	import type { GridProps } from '$lib/types/index.js';
	let { children, is = 'div', fluid, fillHeight, ...rest }: GridProps = $props();
</script>

<svelte:element
	this={is}
	{...rest}
	class={['myt-grid', fluid && 'myt-grid--fluid', fillHeight && 'fill-height', rest.class]}
>
	{@render children?.()}
</svelte:element>
