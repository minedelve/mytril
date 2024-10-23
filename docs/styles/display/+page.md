---
title: Display element in your page
description: 'jsp'
---

<script lang="ts">
    import {presets} from "../index.js";
</script>

# Display styles with Mytril {#display-styles}

Mytril offers CSS classes to easily manage the display of elements in your layout. These classes cover all common CSS display properties, giving developers a simple way to implement responsive, adaptable rendering without complex code.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.display as display}
            <tr>
                <td>.{display}</td>
                <td>display: {display};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Usage example {#usage}

You can apply the display class directly in your HTML, making it easy to control the layout of elements. What's more, Mytril supports breakpoints, allowing you to apply different display styles according to screen size when necessary.

```html
<header class="custom-class none md:block">
	<h1>Mytril</h1>
</header>
```

In this example:

- By default, the header is set to `none`, which doesn't display it to the user, but renders it on the DOM side.
- When the screen size reaches the `md` (medium) breakpoint, the header is displayed in the `block` state, making it visible to users.

This setup enables developers to manage responsive layouts quickly, without the need to manually write media queries.

### A responsive display made easy: {#responsive-display-made-easy}

With Mytril's display utilities, you can easily manage **element displays** according to screen size, ensuring that your layout adapts as required. Although breakpoints are available, they are only an option to help you create flexible layouts, not a mandatory feature.

By applying Mytril's predefined display classes, you streamline the development process, focusing on **clean and efficient** code that works on all devices.
