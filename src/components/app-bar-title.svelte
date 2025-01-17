<script lang="ts">
	import type { ToolbarTitleProps } from '../types/index.js';

	// components
	import ToolbarTitle from './toolbar-title.svelte';

	let { children, ...rest }: ToolbarTitleProps = $props();
</script>

<ToolbarTitle {...rest} class={['myt-app-bar-title', rest.class]} {...rest}>
	{@render children?.()}
</ToolbarTitle>
