---
title: Install the Svelte Component Library
description: Discover Mytril, a Svelte Component library, and follow our  guide to install it. Perfect for developers looking to streamline their Svelte projects with efficient components.
---

<script lang="ts">

</script>

# Installation. {#installation}

Quickly install and configure mytril for your svelte project.

## Create your project. {#create-your-project}

Start by creating a new SvelteKit project if you don't have one set up already. The most common approach is outlined in the [Getting Started](https://kit.svelte.dev/docs/introduction#introduction-getting-started) with SvelteKit introduction.

```shell
# terminal
npx sv create my-app
cd my-app
npm install
npm run dev
```

### Requirement {#requirement}

- Svelte v4
- Node v18 or more
- Vite.js v4.5 or more

> Mytril is compatible with Svelte 5, and we are actively working to offer Svelte's new functions directly via Mytril.

## Install Mytril. {#install-mytril}

Install **mytril** within your project. Mytril has no external dependencies in order to facilitate its integration and limit potential version conflicts

```shell
# terminal
npm install -D mytril
```

## Add Mytril on your vite configuration. {#add-mytril-on-your-vite-configuration}

Add mytril plugin vite on your `vite.config.(js|ts)` file.

```javascript
// vite.config.(js|ts)
import { mytril } from 'mytril/vite';

export default defineConfig({
	plugins: [sveltekit(), mytril()]
});
```

And launch your project with `npm run dev`, mytril create automaticly file configuration in `plugins/mytril.(js|ts)`.

## Import Mytril on your svelte environement. {#import-mytril-on-your-svelte-environement}

To import the various mytril styles into your application. Depending on your configuration, there may be variations in the way Mytril is imported into your application.

**On Sveltekit, you have 2 possibilities for importing Mytril.**

You can import Mytril directly into the **+layout.svelte** page at the top of your tree.

```svelte
<script lang="ts">
	// +layout.svelte
	import '../plugins/mytril.ts';
</script>

your content
```

Alternatively, you can use **+layout.ts** at the start of your tree to ensure style preloading and configuration before rendering.

```js
// +layout.(js|ts)
import '../plugins/mytril.ts';
```

**If you're on Svelte, first import the Mytril configuration into your App.svelte or index.svelte.**

```svelte
<script lang="ts">
	// (App|index).svelte
	import '../plugins/mytril.ts';
</script>

your content
```

> After importing Mytril into your project, we strongly recommend that you restart your development environment.

## Start your developement process

Run your developement process with `npm run dev`.

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
