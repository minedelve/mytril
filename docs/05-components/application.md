---
title: Application component is essential
section: Application
head:
  title: Application component essential setup for scoped UI
  description: The Mytril Application component is mandatory to activate all Mytril features and keep styles scoped. Learn how it isolates styles, prevents conflicts, and ensures your Svelte components work seamlessly.
related:
  - /mytril/docs/getting-started/installation
  - /mytril/docs/components/app-bar
  - /mytril/docs/components/cards
features:
  github: 05-components/application.md
  bug: 'Application component'
  feature: 'Application component'
---

<script>
  import Code from "$components-docs/code.svelte"
  import ApplicationHead from '$content/mytril/examples/application-head.svelte';
</script>

<Code previewOnly file={ApplicationHead}></Code>

The **application component is mandatory** in Mytril. Without it, **Mytril components won’t work**. It acts as the foundation, activating all features and keeping styles properly scoped.

**How styles in component libraries**

When using a component library, styles can either:

1. **Apply globally** across your entire project (which can create conflicts).
2. **Be scoped** to a specific section, keeping everything isolated and conflict-free.

Mytril follows the second approach. The application component **defines where Mytril applies its styles,** ensuring they don’t affect the rest of your app.

**Why do you need it?**

- **It isolates Mytril styles: n**o conflicts with global CSS or other UI libraries.
- It ensures components work properly.

**How to use the application component**

Simply wrap your main layout inside `<App>` to enable Mytril:

<Code>

```svelte
<script>
	import { App } from 'mytril/components';
</script>

<App>// your content</App>
```

</Code>

Now, all Mytril components inside this wrapper will work **without affecting the rest of your project**.

## Scoped styling: no clutter in your CSS

One big problem with component libraries? **Global styles can break everything**. With Mytril, that won’t happen.

**Example use case**

Say you have a **blog template** and a **product template** in your Svelte app. You want **Mytril styles only on the product pages**, not the blog.

**Solution:** wrap the product layout with `<Application>`, while keeping the blog untouched:

<Code>

```svelte
<script>
	// +layout.svelte
	import { App } from 'mytril/components';

	let { children } = $props();
</script>

<App>
	{@render children?.()}
</App>
```

</Code>

**Result:** Mytril applies only where you need it.

> Important rules to complement your project\*

- **You must use `<App>` to activate Mytril**. Without it, components won’t work.
- **Application must be at the root** of a template (e.g., `+layout.svelte`).
- **No nested application components**. You can only define it once at the top level.

## Ready to use Mytril application

With **application**, you get a **clean, conflict-free UI setup**, ready to build, customize, and scale.

{#snippet properties()}

## Snippet References

The Application component in Mytril has a single essential prop: `children`. It defines where your app’s content will be rendered within Mytril’s scoped environment.

| Snippet      | Type      | Properties | Description                       |
| :----------- | :-------- | :--------- | :-------------------------------- |
| **children** | `Snippet` | `nothing`  | Display your application content. |

{/snippet}
