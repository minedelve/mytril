---
title: Optimize your layout with Mytril's application component
description: Explore how to use the application component in Mytril to enhance your web application's layout and functionality. Learn about key features like useDisplay and improve your development process with structured, responsive designs.
---

# Application component with Mytril {#application-component-with-mytril}

The **Application** component is an optional yet powerful feature in Mytril that serves as the root layout component for your application. It not only provides a structured foundation for your UI but also enables specific functionalities that enhance your project's capabilities.

## Using the application component {#using-the-application-component}

To integrate the Application component into your project, simply import it and wrap your content within the `<App>` tags. This setup establishes a consistent layout across your application.

```svelte
<script>
	import { App } from 'mytril';
</script>

<App>// your content</App>
```

### Key features supported by the application component {#key-features-supported-by-the-application-component}

The application component acts as a cornerstone for various tools and functionalities within Mytril. Below is a list of key features that rely on the application component to function effectively in your project:

| Tool         | Description                                                                        | Documentation                                     |
| :----------- | :--------------------------------------------------------------------------------- | :------------------------------------------------ |
| `useDisplay` | Control the display width of your content based on the innerWidth of the viewport. | [useDisplay Docs](/mytril/docs/tools/use-display) |

### Why use the application component?

- **Centralized layout management:** by utilizing the Application component, you ensure a consistent layout and styling across different views in your app, making your codebase cleaner and more maintainable.
- **Enhanced functionality:** the application component unlocks essential tools like `useDisplay`, which provides responsive control over content display, improving user experience on various devices.
- **Flexible integration:** the ease of wrapping your content within the `<App>` component allows for quick adjustments and enhancements to your application's structure.

With Mytril's application component, you benefit not only from a flexible layout solution, but also from the ability to take advantage of various integrated tools that streamline your development process.
