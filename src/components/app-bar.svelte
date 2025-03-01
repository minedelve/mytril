<script lang="ts">
	import type { AppBarProps } from '$lib/types/index.js';

	// components
	import Toolbar from './toolbar.svelte';

	let { children, location, ...rest }: AppBarProps = $props();
</script>

<Toolbar
	{...rest}
	class={['myt-app-bar', location && `myt-app-bar--${location}`, rest.class]}
	{...rest}
>
	{@render children?.()}
</Toolbar>
