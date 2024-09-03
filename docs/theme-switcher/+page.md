---
title: Theme changer
---

# Change theme on your application {#change-theme}

Here is a complete example of an integration to manage the display of themes in your application. Thanks to the theme manager integrated into Mytril you can create an action button which will select the right theme following your user's selection.

This example is based on the following principles:

- Store SvelteKit
- prefers-color-scheme
- localStorage

You are free to adapt it to your application.

## Set up {#set-up}

In the `app.html` file, add the following code:

```html
<script>
	const colorScheme = localStorage.getItem('nameKey');
	if (colorScheme) document.documentElement.classList.add(colorScheme);
</script>
```

You must add it to this location, it ensures that it retrieves the name of the theme selected by your user.

```html
<!-- app.html -->
<!doctype html>
<html lang="en">
	<head>
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<!--add at this line -->
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

In your store, create a `changeTheme.(js|ts)` file, and copy the following code:

```javascript
// changeTheme.(js|ts)
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storage = browser ? localStorage : null;
const value = storage == null ? void 0 : storage.getItem('nameKey');

export const colorScheme = writable(
	value
		? value
		: browser
			? window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			: 'light'
);

colorScheme.subscribe(($theme: string) => {
	if (!browser) return;
	document.documentElement.classList.remove('light', 'dark');
	document.documentElement.classList.add($theme);
});
```

In the store, you manage the case of displaying the light and dark theme, depending on the value selected by the user or if no value is selected, the state of **prefers-color-scheme**.

Then create a component in your application and add the code below which will display a toggle button to change between light and dark.

```svelte
<script lang="ts">
	import { browser } from '$app/environment';
	import { colorScheme, setColorScheme } from '$lib/store/app';

	function handleScheme(scheme: string) {
		setColorScheme(scheme);
		localStorage.setItem('nameKey', scheme);
	}
</script>

<button on:click={() => handleScheme($colorScheme === 'dark' ? 'light' : 'dark')}>
	{#if browser}
		{#if $colorScheme === 'dark'}
			dark
		{:else}
			light
		{/if}
	{/if}
</button>
```

It is important to take into account that this example only takes into account the **dark** and **light** themes, you are free to add them in the code in order to manage other themes. **Happy customization!**
