---
title: Overflow
description: 'jsp'
---

<script lang="ts">
    import {presets} from "../index.js";
</script>

# Overflow styles with Mytril {#display-styles}

With Mytril, you can manage the overflow of your DOM elements directly with pre-built CSS classes.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.overflow as overflow}
            <tr>
                <td>.overflow-{overflow}</td>
                <td>overflow: {overflow};</td>
            </tr>
        {/each}
        {#each presets.overflow as overflow}
            <tr>
                <td>.overflow-x-{overflow}</td>
                <td>overflow-x: {overflow};</td>
            </tr>
        {/each}
        {#each presets.overflow as overflow}
            <tr>
                <td>.overflow-y-{overflow}</td>
                <td>overflow-y: {overflow};</td>
            </tr>
        {/each}
    </tbody>
</table>

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
