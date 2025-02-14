---
title:
section:
head:
  title: Use useDisplay in Mytril for responsive layouts
  description: Learn how to use the useDisplay function in Mytril to create responsive, breakpoint-based content rendering in your Svelte applications. Improve user experience with dynamic visibility control.
features:
  legacy: 0.4.14
---

# The useDisplay function in Mytril: reactive display in your render DOM {#useDisplay-function-in-mytril}

**useDisplay** lets you define a display zone for your content based on the [breakpoint](/mytril/docs/customization/breakpoints) keys defined in your Mytril configuration. It returns a boolean indicating whether or not you are in this rendering range. This allows you to control the display of an element or define special cases directly in svelte.

## How to implement useDisplay {#how-to-implement-useDisplay}

To utilize the `useDisplay` function, you first need to import it from the Mytril tools module. You can then define display zones for your content based on the breakpoints you've set up. Here’s a simple example to illustrate its usage:

```svelte
<script>
	import { useDisplay } from 'mytril/tools';

	const isMdDisplay = useDisplay('md');
</script>

{#if $isMdDisplay}
	<div>// Display only on md breakpoint</div>
{/if}
```

## Key features of useDisplay {#key-features-of-useDisplay}

- **Responsive control:** `useDisplay` allows you to conditionally render components or HTML based on the current viewport size, ensuring your UI is adaptable and user-friendly across different devices.
- **Easy integration:** the straightforward syntax makes it easy to integrate `useDisplay` into your existing Svelte components, enabling rapid development without compromising on responsiveness.
- **Breakpoint awareness:** by using the breakpoint keys defined in your Mytril configuration, you can create tailored experiences for users based on their device size, enhancing usability and aesthetics.

## Benefits of using useDisplay {#benefits-of-using-useDisplay}

1. **Enhanced user experience:** by controlling the visibility of elements according to the viewport size, you can improve the user experience and accessibility of your application.
2. **Cleaner code:** using `useDisplay` helps keep your templates tidy and focused on logic rather than manually writing media queries or CSS.
3. **Dynamic layout adjustments:** quickly adapt your layout to meet specific design requirements for different screen sizes, ensuring that your content is always presented optimally.

By leveraging the `useDisplay` function in Mytril, you can build responsive web applications that not only look great but also function seamlessly across all devices.
