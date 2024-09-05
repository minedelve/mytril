---
title: Theme swicther
---
<script lang="ts">
    import Note from "$lib/components/note.svelte";
</script>


# Change theme on your application {#change-theme}

With Mytril you can dynamically change the theme of your application. The theme manager integrated into Mytril, you can create an action button which will select the right theme following your user's selection.

<Note>

Mytril bases this on its **store** in order to keep it in memory for the entire duration of the user's navigation. It is recommended to save this data in a `cookie` or in `localstorage` to be able to display the correct theme as soon as the user returns to your application.

</Note>

### useTheme

- Return: `string`
- Default: `'default'

Returns the name of the theme to use in your application. This value is available in all svelte components. By default, the theme used corresponds to that indicated in `mytril.config.js` on the `defaultTheme` property.

```svelte
<script lang="ts">
	import { useTheme } from 'mytril';
</script>
<p>{$useTheme}</p>
<!-- output: 'default' -->
```

### setTheme

- Params: `string`
- Required

Changes the overall theme of the application. This adds a class having the name of the selected theme to the `<html>` element of the DOM.

```svelte
<script lang="ts">
	import { setTheme } from 'mytril';
</script>
<button on:click={() => setTheme('light')}> Light </button>
```

## Example with backup

Here is an example that takes into account saving in localstorage and defining the theme with the `prefers-color-scheme`.

```html
<!-- app.html -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<script>
			const colorScheme = localStorage.getItem("theme-storage");
			if (colorScheme) document.documentElement.classList.add(colorScheme);
		</script>
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

```svelte
<!--+(layout | page | component).svelte  -->
<script lang="ts">
	import { useTheme, setTheme } from 'mytril';

	function toggleTheme(type: string) {
		const scheme = type === 'dark' ? 'light' : 'dark'
		localStorage.setItem('theme-storage', scheme);
		setTheme(scheme);
	}
</script>

<button on:click={() = toggleTheme($useTheme)}>Toggle Theme</button>
```