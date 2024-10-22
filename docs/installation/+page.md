---
title: Install the Svelte Component Library
description: Discover Mytril, a Svelte Component library, and follow our  guide to install it. Perfect for developers looking to streamline their Svelte projects with efficient components.
---

<script lang="ts">

</script>

# Installation {#installation}

Quickly install and configure mytril for your svelte project.

## Create your project

Start by creating a new SvelteKit project if you don't have one set up already. The most common approach is outlined in the [Getting Started](https://kit.svelte.dev/docs/introduction#introduction-getting-started) with SvelteKit introduction.

```shell
# terminal
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```

### Requirement

- Svelte v4
- Node v18 or more
- Vite.js v4.5 or more

## Install Mytril

Install **mytril** within your project. Mytril has no external dependencies in order to facilitate its integration and limit potential version conflicts

```shell
# terminal
npm install -D mytril
```

## Add Mytril on your vite configuration.

Add mytril plugin vite on your `vite.config.(js|ts)` file.

```javascript
// vite.config.(js|ts)
import { mytril } from 'mytril/vite';

export default defineConfig({
	plugins: [sveltekit(), mytril()]
});
```

## Add the Mytril to your CSS

Create a `./src/app.css` file and add the **mytril/styles**.

```css
/** app.css */
@import 'mytril/styles';
```

## Import the CSS file

Create a `./src/routes/+layout.svelte` file and import the newly created app.css file.

```svelte
<script>
	// +layout.svelte
	import '../app.css';
</script>

<slot />
```

## Start your build process

Run your build process with `npm run dev`.

```shell
# terminal
npm run dev
```

## Start using Mytril in your project

Start using Mytril components, utility classes, and themes to create your interface and content.

```svelte
<script>
	// +page.svelte
	import { Btn } from 'mytril';
</script>

<Btn class="custom-class ma-2 px-3">Click on this button</Btn>

<style>
	.custom-class {
		color: var(--primary);
	}
</style>
```
