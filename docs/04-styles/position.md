---
title: Manage element positioning CSS classes
description: Learn how to manage CSS positioning properties using Mytril’s predefined classes. Simplify responsive layouts in your Svelte project with Mytril’s positioning utilities.
---

# Managing positioning styles with Mytril {#managing-positioning-styles-with-mytril}

Mytril offers a collection of CSS classes that make it easy to manage the positioning of elements in your layout. These classes cover all the essential CSS position properties, giving you a simple way to implement responsive and adaptable positioning without writing complex custom code.

## Predefined position classes in Mytril {#predefined-position-classes-in-mytril}

Mytril provides the following classes for positioning elements:

| Class    | Properties          |
| :------- | :------------------ |
| static   | position: static;   |
| relative | position: relative; |
| absolute | position: absolute; |
| fixed    | position: fixed;    |
| sticky   | position: sticky;   |

These classes allow you to control how elements are positioned within the document flow, whether it's fixed on the page, relative to its parent, or static within the normal flow.

## Usage example: applying position classes {#usage-example-applying-position-classes}

You can directly use Mytril’s position classes in your HTML markup to control element layout behavior. Mytril also supports breakpoints, allowing different positioning styles based on the screen size.

Here’s an example:

```html
<header class="custom-class fixed md:absolute">
	<h1>Mytril</h1>
</header>
```

**Explanation:**

- **Default Behavior**: The header is positioned as fixed (`position: fixed;`), keeping it visible at the same place on the screen as the user scrolls.
- **Responsive Adjustment**: At the medium (`md`) breakpoint, the header changes to absolute (`position: absolute;`), making it relative to the nearest positioned ancestor.

This approach simplifies creating responsive layouts without needing to manually write media queries, allowing you to focus on efficient design.

### Responsive positioning made easy: {#responsive-positionning-made-easy}

With Mytril, implementing **responsive positioning** is straightforward. You can easily adapt the position of elements to different screen sizes using built-in breakpoints. This flexibility ensures that your layout responds to changes in device size, maintaining a clean and functional user interface across desktop, tablet, and mobile devices.

While breakpoints allow for responsive behavior, they are optional. You can still create flexible layouts without them, but their availability helps ensure your projects are adaptable without additional effort.

## Why use Mytril for positioning styles ?{#why-use-mytril-for-positionning-styles}

1. **Predefined Classes**: Mytril’s predefined positioning classes reduce the need for custom CSS, speeding up development.
2. **Responsive Breakpoints**: Easily manage element positions at different screen sizes without writing media queries manually.
3. **Clean and Efficient Code**: By using Mytril’s utilities, your code remains clean, minimal, and adaptable, ensuring your layout performs well on all devices.

By using Mytril’s positioning classes, you can manage the layout behavior of elements across various screen sizes, ensuring that their Svelte projects are both responsive and efficient. Whether you're positioning elements statically, relatively, or using advanced techniques like sticky positioning, Mytril provides the tools to streamline your development workflow.
