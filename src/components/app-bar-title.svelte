<script lang="ts">
	import type { ToolbarTitleProps } from '$lib/types/index.js';

	// components
	import ToolbarTitle from './toolbar-title.svelte';

	let { children, ...rest }: ToolbarTitleProps = $props();
</script>

<ToolbarTitle {...rest} class={['myt-app-bar-title']}>
	{@render children?.()}
</ToolbarTitle>
