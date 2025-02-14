---
title:
section:
head:
  title: Dynamic theme light and dark mode
  description: Learn how to easily switch between light and dark themes in your Svelte app using Mytril. Save theme preferences with local storage and customize your UI with simple functions like useTheme and setTheme.
features:
  legacy: 0.4.14
---

# Change the theme of your application {#change-theme}

With **Mytril**, you can dynamically switch themes in your Svelte application. The integrated **theme manager** allows you to create an action button that changes the theme based on user selection.

Mytril uses its **store** to keep the theme persistent throughout the user’s session. For guarantee a good user experience, it's recommended to save the theme preference in a `cookie` or `local storage` so the correct theme is applied when the user returns.

### useTheme

- Return: `string`
- Default: `'default'

This function returns the current theme name used in your application. It is available in all Svelte components. By default, it returns the theme set in `plugins/mytril.(js|ts)` under the `defaultTheme` property.

```svelte
<script lang="ts">
	import { useTheme } from 'mytril/tools';
</script>

<p>{$useTheme}</p>
<!-- output: 'default' -->
```

### setTheme

- Params: `string`
- Required

This function changes the theme globally by adding a class having the name of the selected theme’s to the `<html>` element in the DOM.

```svelte
<script lang="ts">
	import { setTheme } from 'mytril/tools';
</script>

<button on:click={() => setTheme('light')}> Light </button>
```

### getLocalTheme

- Params: `key: string;` `colorScheme: boolean`
- Required `key`

This function allows you to retrieve the value saved in the application’s localstorage and stored in the `mytril` store. There is an additional option based on `prefers-color-scheme` to set a **light** or **dark**  theme by default

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { getLocalTheme } from 'mytril/tools';

	onMount(() => {
		getLocalTheme('key-local', true);
		// set on local storage (dark | light)
	});
</script>
```

## Example with save state theme

Here’s an example that saves in localstorage and set the theme with `prefers-color-scheme`.

```html
<!-- app.html -->
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<script>
			const colorScheme = localStorage.getItem('theme-storage');
			if (colorScheme) document.documentElement.classList.add(colorScheme);
		</script>
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

```svelte
<!--+(layout | page | component).svelte  -->
<script lang="ts">
	import { useTheme, setTheme } from 'mytril/tools';

	function toggleTheme(type: string) {
		const scheme = type === 'dark' ? 'light' : 'dark'
		localStorage.setItem('theme-storage', scheme);
		setTheme(scheme);
	}
</script>

<button on:click={() = toggleTheme($useTheme)}>Toggle Theme</button>
```

```svelte
<!--+(layout | page).svelte  -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { getLocalTheme } from 'mytril/tools';

	onMount(() => {
		getLocalTheme('key-local', true);
	});
</script>
```
