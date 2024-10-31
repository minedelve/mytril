---
title: useDisplay, reactive display in your render
description: jsp
---

# useDisplay function in Mytril: reactive display in your render DOM {#display}

**useDisplay** lets you define a display zone for your content based on the [breakpoint](mytril/docs/customization/breakpoints) keys defined in your Mytril configuration. It returns a boolean indicating whether or not you are in this rendering range. This allows you to control the display of an element or define special cases directly in svelte.

```svelte
<script>
	import { useDisplay } from 'mytril/tools';

	const isMdDisplay = useDisplay('md');
</script>

{#if $isMdDisplay}
	<div>// Display only on md breakpoint</div>
{/if}
```
