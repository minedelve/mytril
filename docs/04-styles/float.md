---
title:
section:
head:
  title: Efficient Float Styles with Mytril
  description: Explore practical examples and enhance your web applications projects. Discover how Mytril's float streamline layout management for you. Learn to use pre-defined CSS classes to control element positioning, making responsive design easy and efficient.
features:
  legacy: 0.4.14
---

# Float styles with Mytril {#float-styles-with-mytril}

Mytril's float style you provide with quick ways to manage element positioning using pre-defined CSS classes. These classes support adaptable layouts with minimal code, streamlining your workflow without adding styling complexity.

With Mytril, you can manage the float of your DOM elements directly using pre-built CSS classes.

## Available float classes in Mytril {#available-float-classes-in-mytril}

| Class        | Properties    |
| :----------- | :------------ |
| .float-left  | float: left;  |
| .float-right | float: right; |
| .float-start | float: start; |
| .float-end   | float: end;   |
| .float-none  | float: none;  |

## Float usage example {#float-usage-example}

Mytril's float classes offer direct control over layout positioning in HTML. With built-in responsive breakpoints, you can easily adjust float behavior across different screen sizes.

```html
<div class="custom-class float-left md:float-start">
	<h1>Mytril</h1>
</div>
```

In this example:

- The default `float-left` aligns the element to the left side of the screen.
- At the medium (`md`) breakpoint, the element switches to `float-start`, aligning it with the start of its parent container.

Mytril's float style streamline responsive layout creation, allowing you to focus on coding efficient, clean user interfaces.
