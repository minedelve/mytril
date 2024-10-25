---
title: Manage element positioning CSS classes
description: Use Mytril's CSS classes like static, relative, absolute, and fixed to control element positioning in your project. Easily implement responsive layouts with minimal code.
---

<script lang="ts">
    import {presets} from "../index.js";
</script>

# Positioning styles with Mytril {#position}

Mytril offers of CSS classes to easily manage the positioning of elements in your layout. These classes cover all common CSS position properties, providing a straightforward way for developers to implement responsive and adaptable positioning without complex code.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.position as position}
            <tr>
                <td>.{position}</td>
                <td>position: {position};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Predefined Position Classes in Mytril {#usage}

You can directly apply the position class in your HTML, making it simple to control the layout behavior of elements. Additionally, Mytril supports breakpoints, allowing you to apply different position styles depending on screen size when necessary.

```html
<header class="custom-class fixed md:absolute">
	<h1>Mytril</h1>
</header>
```

In this example:

- The header is set to `fixed` position by default, keeping it in a fixed place as the user scrolls.
- Once the screen size hits the `md` (medium) breakpoint, the header switches to `absolute` position, moving it relative to its nearest positioned ancestor.

This setup enables developers to manage responsive layouts quickly, without the need to manually write media queries.

### Responsive positioning made easy: {#responsive-positionning-made-easy}

With Mytril’s positioning utilities, you can easily manage **element positions** for different screen sizes, ensuring your layout adapts as needed. While breakpoints are available, they’re just an option to help you create flexible layouts, not a required feature.

By applying Mytril’s pre-defined position classes, you streamline the development process, focusing on **clean and efficient code** that works across devices.
