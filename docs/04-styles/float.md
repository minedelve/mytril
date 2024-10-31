---
title: float
description: 'jsp'
---

# Float styles with Mytril {#float-styles}

With Mytril, you can manage the float of your DOM elements directly with pre-built CSS classes.

| Class        | Properties    |
| :----------- | :------------ |
| .float-left  | float: left;  |
| .float-right | float: right; |
| .float-start | float: start; |
| .float-end   | float: end;   |
| .float-none  | float: none;  |

## Usage example {#usage}

You can apply the display management class directly in your HTML, giving you easy control over the layout of elements. What's more, Mytril supports breakpoints, allowing you to apply different display styles according to screen size if required.

```html
<div class="custom-class float-left md:float-start">
	<h1>Mytril</h1>
</div>
```

In this example:

- By default, the header is set to `none`, which displays the `div` on the left of the screen.
- When the screen size reaches the `md` (medium) breakpoint, the `div` is displayed in `float-start`, ensuring alignment at the start of the parent element.

This configuration allows developers to quickly manage responsive layouts, without having to manually write media requests.
