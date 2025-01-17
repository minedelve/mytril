<script lang="ts">
	import type { AppBar } from '../types/index.js';

	// components
	import Toolbar from './toolbar.svelte';

	let { children, location, ...rest }: AppBar = $props();
</script>

<Toolbar
	{...rest}
	class={['myt-app-bar', location && `myt-app-bar--${location}`, rest.class]}
	{...rest}
>
	{@render children?.()}
</Toolbar>
