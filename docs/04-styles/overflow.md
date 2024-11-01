---
title: Effortless Overflow Management with Mytril
description: Learn how to manage overflow styles with Mytril's pre-built CSS classes. Discover effective techniques for responsive design and control element overflow effortlessly. Explore examples and optimize your web layouts.
---

# Overflow styles with Mytril {#overflow-styles-with-mytril}

Mytril provides a simple and effective way to manage the overflow properties of your DOM elements using pre-built CSS classes. These classes allow for straightforward implementation of overflow control in your web layouts, enhancing the responsiveness and usability of your applications.

## Overflow class properties {#overflow-class-properties}

| Class               | Properties           |
| :------------------ | :------------------- |
| .overflow-auto      | overflow: auto;      |
| .overflow-hidden    | overflow: hidden;    |
| .overflow-visible   | overflow: visible;   |
| .overflow-x-auto    | overflow-x: auto;    |
| .overflow-x-hidden  | overflow-x: hidden;  |
| .overflow-x-visible | overflow-x: visible; |
| .overflow-y-auto    | overflow-y: auto;    |
| .overflow-y-hidden  | overflow-y: hidden;  |
| .overflow-y-visible | overflow-y: visible; |

**Usage example**

Integrating overflow management in your HTML is seamless with Mytril’s classes. The framework also supports breakpoints, enabling you to apply different overflow styles based on screen size.

```html
<div class="custom-class overflow-hidden md:overflow-auto">
	<h1>Mytril</h1>
</div>
```

**Explanation:**

In this example:

- By default, the header’s overflow is set to hidden, concealing any overflowing content within the div.
- Once the screen size reaches the `md` (medium) breakpoint, the overflow style switches to `overflow-auto`, allowing the content to overflow and enabling scrolling as necessary.

This configuration empowers you to efficiently manage responsive layouts without the complexity of writing manual media queries.
