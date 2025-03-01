<script lang="ts">
	import type { CardSubtitleProps } from '$lib/types/index.js';

	let { children, is = 'div', opacity, ...rest }: CardSubtitleProps = $props();
</script>

<svelte:element
	this={is}
	{...rest}
	class={['myt-card-subtitle', rest.class]}
	style:--opacity={opacity}
>
	{@render children?.()}
</svelte:element>
