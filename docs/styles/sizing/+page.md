---
title: Sizing Easily Control Element Width and Height
description: Learn how to use Mytril’s sizing utility classes to set element dimensions. Apply width and height with responsive breakpoints for flexible layouts in your Svelte projects.
---

<script lang="ts">
    import {presets} from "../index.js"
</script>

# Sizing {#sizing}

Easily control the width and height of elements using utility classes. These flexible and responsive classes allow you to define sizes that adapt to various breakpoints. With Mytril, you can seamlessly apply predefined height and width values, streamlining your layout process.

## Width classes {#width-classes}

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(presets.sizing) as [key, values]}
            {#if key === 'width'}
                {#each values as size}
                    <tr style="margin-bottom: 5px;">
                        <td style="min-width: 150px;">{key === 'height' ? 'h-' : 'w-'}{size.replaceAll('%', '').replaceAll('100dvh', 'full')}</td>
                        <td>
                            {size}
                        </td>
                    </tr>
                {/each}
             {/if}
        {/each}
    </tbody>
</table>

## Height classes {#height-classes}

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(presets.sizing) as [key, values]}
            {#if key === 'height'}
                {#each values as size}
                    <tr style="margin-bottom: 5px;">
                        <td style="min-width: 150px;">{key === 'height' ? 'h-' : 'w-'}{size.replaceAll('%', '').replaceAll('100dvh', 'full')}</td>
                        <td>
                            {size}
                        </td>
                    </tr>
                {/each}
             {/if}
        {/each}
    </tbody>
</table>

## Responsive breakpoints

Use these sizing classes in combination with breakpoints to ensure your layouts are responsive. The format `{breakpoint}:{property}-{size}` allows for easy adjustment. For instance:

- `lg:w-50` sets the width to 50% on large screens.

Breakpoints don't apply to the smallest `xs` size, which is inferred.

### Usage example:

```html
<div class="h-auto w-75 lg:w-50">My content</div>
```

This example applies a width of 75% by default and switches to 50% on large screens, using Mytril’s utility classes to enhance layout control.

<style>
    .wrapper-width {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .wrapper-width div {
        height: 36px;
        background-color: var(--sky-2)
    }

    .wrapper-height {
        display: flex;
        gap: 8px;
        height: 300px;
    }

    .wrapper-height div {
        width: 36px;
        background-color: var(--sky-2)
    }
</style>
