---
title:
section:
head:
  title: Configurating spacing for Margin, Padding, and Gap Classes
  description: Learn how to use Mytril’s spacing utilities to adjust margins, padding, and gaps in your Svelte components. Apply spacing with easy-to-use classes and responsive breakpoints for layout control.
features:
  legacy: 0.4.14
---

<script lang="ts">
    import {presets} from "../index.js"
    import Spacing from "../modules/spacing.svelte";
</script>

# Spacing utilities {#spacing-utilities}

Mytril provides a set of spacing properties that allow you to easily control the margin, padding, and gap of elements using simple CSS classes. These property are flexible and can be applied across different breakpoints, making layout adjustments straightforward and efficient.

<Spacing datas={presets?.spacing}/>

## How to use spacing classes {#how-to-use-spacing-classes}

The spacing classes in Mytril follow a consistent naming convention: `{property}{direction}-{size}`. Here's a breakdown:

The **property** applies the type of spacing:

- m - applies margin
- p - applies padding
- g - applies gap

The **direction** designates the side the property applies to:

- t - applies the spacing for margin-top and padding-top
- b - applies the spacing for margin-bottom and padding-bottom
- l - applies the spacing for margin-left and padding-left
- r - applies the spacing for margin-right, padding-right, and row-gap
- x - applies the spacing for margin and padding _-left and _-right
- y - applies the spacing for margin and padding _-top and _-bottom
- a - applies the spacing for margin, padding and gap in all directions

### Available sizes {#available-sizes}

The size defines the spacing amount and is expressed in rem units. Here’s a list of available sizes:

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(presets.spacing) as [key, values]}
            <tr style="margin-bottom: 5px;">
                <td style="min-width: 150px;">{key}</td>
                <td>
                    {values}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

### Example usage {#example-usage}

To apply margin or padding, you can combine the property, direction, and size to target specific elements.

```html
<div class="p-4 m-2">
	<!-- This div has padding of 1rem and margin of 0.5rem -->
	Content
</div>
```

This would apply 1rem of padding on all sides and 0.5rem of margin.

## Breakpoints for responsive spacing {#breakpoints-for-responsive-spacing}

Mytril also supports responsive spacing, allowing you to adjust spacing at specific screen sizes using breakpoints. The format is: `{breakpoint}:{property}-{direction}-{size}`.

**Breakpoints:**

- `sm` - Small (640px and up)
- `md` - Medium (768px and up)
- `lg` - Large (1024px and up)
- `xl` - Extra-large (1280px and up)
- `xxl` - Extra-extra-large (1536px and up)

For example:

```html
<div class="md:mx-4 lg:px-2">
	<!-- Applies 1rem horizontal margin at medium screens, and 0.5rem padding at large screens -->
	Responsive content
</div>
```

### Advanced usage: custom spacing with Root variables {#advanced-usage}

In addition to the predefined classes, developers can also leverage CSS root variables for more granular control over spacing values.

```css
.custom-class {
	padding: var(--spacing-4);
	margin: var(--spacing-2);
}
```

This provides even more flexibility in tailoring your layouts.

### Summary of spacing classes {#summary-class}

- **`m-{size}`**: Margin on all sides
- **`p-{size}`**: Padding on all sides
- **`g-{size}`**: Gap for flexbox or grid layouts
- **`t`, `b`, `l`, `r`, `x`, `y`, `a`**: Directional modifiers for top, bottom, left, right, horizontal, vertical, and all sides.

By using Mytril's spacing properties, you can create highly customizable, responsive layouts with minimal effort.
