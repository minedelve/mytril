---
title: Overflow
description: 'jsp'
---

# Overflow styles with Mytril {#overflow-styles}

With Mytril, you can manage the overflow of your DOM elements directly with pre-built CSS classes.

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

## Usage example {#usage}

You can apply the overflow management class directly in your HTML, making it easy to control the layout of elements. What's more, Mytril supports breakpoints, allowing you to apply different overflow styles according to screen size if required.

```html
<div class="custom-class overflow-hidden md:overflow-auto">
	<h1>Mytril</h1>
</div>
```

In this example:

- By default, the header is set to `none`, which hides the element overflow in the `div`.
- When the screen size reaches the `md` (medium) breakpoint, the `div` is displayed in the `overflow-auto` state, allowing overflow.

This configuration allows developers to quickly manage responsive layouts, without having to manually write media requests.
