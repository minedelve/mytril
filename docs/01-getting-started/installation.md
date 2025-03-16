---
title: Installation guide to Mytril
section: Installation
head:
  title: Install the Mytril Svelte Component Library
  description: Discover Mytril, a Svelte Component library, and follow our guide to install it. Perfect for developers looking to streamline their Svelte projects with efficient components.
related:
  - /mytril/docs/components/application
  - /mytril/docs/customization/themes
  - /mytril/docs/customization/breakpoints
features:
  github: 01-getting-started/installation.md
---

<script>
    import Code from "$lib/components/code.svelte";
</script>

Get started integrating Mytril, a lightweight and powerful Svelte component library, into your SvelteKit application. Below is a step-by-step guide to help you install and configure Mytril with ease.

## Follow the steps to install Mytril

**🔹Step 1: create your SvelteKit project**

If you haven’t already created a SvelteKit project, initialize one using the following command:

<Code>

```bash
npx sv create my-mytril-app
```

</Code>

Replace `my-mytril-app` with your desired project name.

**🔹 Step 2: install Mytril**

Mytril provides two installation methods: a streamlined CLI or manual setup. Choose the one that suits your development workflow.

<Code>

```bash
npm i -D mytril
```

</Code>

### install Mytril with CLI (Recommended)

The Mytril CLI simplifies the integration process. It will automatically configure necessary files like `vite.config.js` and your main style file.

**Command:**

<Code>

```bash
npx mytril init [path-css]
```

</Code>

**Options install with CLI:**

- Replace `[path-css]` with the path to your main CSS file (e.g., `src/app.css`).
- If no path is provided, it defaults to `src/app.css`.

**Example CLI configuration:**

By default path-css is auto set at src/app.css

<Code>

```bash
npx mytril init src/app.css
```

</Code>

**Example CLI output**

Here is a preview of what the terminal looks like during the CLI installation:

![](/images/mytril/terminal-cli-mytril.png)

### Or use manual installation

Follow these steps for manual integration:

**🔹 Step 1: create a configuration file**

Create a new **`mytril.config.js`** file in the root of your project and paste the following code:

<Code>

```javascript
/** @type {import('mytril').Config} */
export default {
	colorScheme: 'system', // Use 'light', 'dark', or 'system'
	colors: {}
};
```

</Code>

**🔹Step 2: update `vite.config.js`**

Add Mytril as a plugin within your `vite.config.js` file:

<Code>

```javascript
import { mytril } from 'mytril/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), mytril()]
});
```

</Code>

**🔹Step 3: import styles**

Finally, import Mytril's CSS directly into your main stylesheet:

<Code>

```css
/* Import Mytril styles */
@import 'mytril/css';
```

</Code>

And that's all! You've successfully completed Mytril’s manual installation.

**Requirements**

Before installing Mytril, verify that your project meets the following minimum requirements:

| Package | Minimum version | Official documentation                                                                                                                                                          |
| ------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Svelte  | v5.16 +         | [Svelte Docs support by Mytril](https://svelte.dev/docs?utm_source=minedelve&utm_medium=documentation&utm_campaign=tech_resources&utm_term=svelte&utm_content=svelte_docs)      |
| Vite    | v5 +            | [Vite Docs support by Mytril](https://vitejs.fr/config/?utm_source=minedelve&utm_medium=documentation&utm_campaign=tech_resources&utm_term=vitejs&utm_content=vite_config_docs) |
| Node    | v20 +           | [Node.js Docs support by Mytril](https://nodejs.org/en?utm_source=minedelve&utm_medium=documentation&utm_campaign=tech_resources&utm_term=nodejs&utm_content=nodejs_docs)       |

For enhanced features, consider integrating optional tools:

| Package | Minimum version | Official documentation                                                                                                                                                                                           |
| ------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iconify | v4 +            | [Iconify Docs support by Mytril](https://iconify.design/docs/icon-components/svelte/?utm_source=minedelve&utm_medium=documentation&utm_campaign=tech_resources&utm_term=iconify&utm_content=iconify_svelte_docs) |

## Get started with Mytril

Congratulations! You’ve installed Mytril on your SvelteKit project. You’re now ready to start building modern, customizable user interfaces using Mytril’s powerful design system. Be sure to check the official [Mytril component library documentation](/mytril/docs/changelog) for more advanced features and component usage.

**Next Step**: dive into the [**Components Documentation**](/mytril/docs) to learn how to use Mytril in your project.
