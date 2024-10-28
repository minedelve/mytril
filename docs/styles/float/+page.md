---
title: float
description: 'jsp'
---

<script lang="ts">
    import {presets} from "../index.js";
</script>

# Float styles with Mytril {#display-styles}

With Mytril, you can manage the float of your DOM elements directly with pre-built CSS classes.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.float as float}
            <tr>
                <td>.float-{float}</td>
                <td>float: {float};</td>
            </tr>
        {/each}
    </tbody>
</table>

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
