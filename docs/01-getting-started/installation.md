---
title: Install the Svelte Component Library
description: Discover Mytril, a Svelte Component library, and follow our  guide to install it. Perfect for developers looking to streamline their Svelte projects with efficient components.
---

# Installation Guide for Mytril {#installation-guide-for-mytril}

Get started with Mytril, a lightweight and versatile component library for Svelte projects. Follow this step-by-step guide to integrate Mytril seamlessly into your SvelteKit application.

## Step 1: create your SvelteKit project {#create-your-sveltekit-project}

If you don’t already have a SvelteKit project, you can create one using the following commands:

```shell
# terminal
npx sv create my-app
cd my-app
npm install
npm run dev
```

For more details, refer to the official [SvelteKit getting started guide](https://kit.svelte.dev/docs/introduction#introduction-getting-started).

### Requirement {#requirement}

### **Requirements**

To use Mytril, ensure your development environment meets the following prerequisites:

- **Svelte**: v4 or later
- **Node.js**: v18 or later
- **Vite.js**: v4.5 or later

> Note: Mytril is compatible with Svelte v5, and we’re actively enhancing Mytril to leverage new Svelte features.

## Step 2: install Mytril {#install-mytril}

Mytril can be added to your project with a simple npm command. Its design avoids external dependencies to minimize version conflicts.

```shell
# terminal
npm install -D mytril
```

## Step 3: configure Vite to use Mytril {#configure-vite-to-use-mytril}

Update your `vite.config.(js|ts)` file to include the Mytril plugin:

```javascript
// vite.config.(js|ts)
import { sveltekit } from '@sveltejs/kit/vite';
import { mytril } from 'mytril/vite';

export default defineConfig({
	plugins: [sveltekit(), mytril()]
});
```

And launch your project with `npm run dev`, mytril create automaticly file configuration in `plugins/mytril.(js|ts)`.

## Step 4: Import Mytril on your svelte environement. {#import-mytril-on-your-svelte-environement}

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

## Step 5: start your development server {#start-your-development}

Run the build process to initialize your project and preview your application:

```shell
# terminal
npm run dev
```

## Step 6: start building with Mytril {#start-building-with-mytril}

You’re ready to start using Mytril’s components, utility classes, and themes. Here’s a quick example of adding a button to your application:

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

### Why choose Mytril? {#why-choose-mytril}

- **Lightweight and dependency-Free**: Designed for seamless integration and minimal version conflicts.
- **Full Svelte compatibility**: Works effortlessly with the latest Svelte and Vite versions.
- **Customizable and flexible**: Supports utility-first classes and theming for complete design control.
- **Future-ready**: Actively maintained with support for upcoming Svelte features.
