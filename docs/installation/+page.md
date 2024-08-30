---
title: Installation
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

## Install Mytril

Install **mytril** and **mytril-tools** (not required) within your project. Mytril has no external dependencies in order to facilitate its integration and limit potential version conflicts

```shell
# terminal
npm install -D mytril
npm install -D mytril-tools
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

_work in progress_

```svelte
<script>
	// +page.svelte
	import { Btn } from 'mytril';
</script>

<Btn class="custom-class ma-2 px-3">Click on this button</Btn>

<style>
	.custom-class {
		color: var(--c-theme-1);
	}
</style>
```
