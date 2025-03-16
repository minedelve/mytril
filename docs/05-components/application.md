---
title: Application component with Mytril
section: Application
head:
  title: Optimize your layout with Mytril's application component
  description: Explore how to use the application component in Mytril to enhance your web application's layout and functionality. Learn about key features like useDisplay and improve your development process with structured, responsive designs.
related:
  - /mytril/docs/components/btn
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

The **Application** component is an optional yet powerful feature in Mytril that serves as the root layout component for your application. It not only provides a structured foundation for your UI but also enables specific functionalities that enhance your project's capabilities.

## Using the application component

To integrate the Application component into your project, simply import it and wrap your content within the `<App>` tags. This setup establishes a consistent layout across your application.

<Code>

```svelte
<script>
	import { App } from 'mytril/components';
</script>

<App>// your content</App>
```

</Code>

### Why use the application component?

- **Centralized layout management:** by utilizing the Application component, you ensure a consistent layout and styling across different views in your app, making your codebase cleaner and more maintainable.
- **Flexible integration:** the ease of wrapping your content within the `<App>` component allows for quick adjustments and enhancements to your application's structure.

With Mytril's application component, you benefit not only from a flexible layout solution, but also from the ability to take advantage of various integrated tools that streamline your development process.

{#snippet properties()}

### Snippet References

| Snippet      | Type      | Properties | Description                       |
| :----------- | :-------- | :--------- | :-------------------------------- |
| **children** | `Snippet` | `nothing`  | Display your application content. |

{/snippet}
