---
title: Typography Utility Classes for Responsive Text Styling
description: Control text size, font weight, alignment, and more with Mytril's typography utility classes. Easily apply responsive styles for text across different breakpoints in your projects.
---

<script lang="ts">
    import {presets} from "../index.js"
</script>

# Typography {#typography}

Manage text size, alignment, wrapping, overflow, and transformations with utility classes. Mytril’s typography helpers offer flexibility for a range of font properties, making it easier to control the look and feel of your content across different breakpoints.

## Text size {#text-size}

Apply predefined font sizes and line heights using simple classes:

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(presets.typography.style) as [key, values]}
            <tr style="margin-bottom: 5px;">
                <td style="min-width: 150px;">text-{key}</td>
                <td>
                    {#each Object.entries(values) as [property, value]}
                        <div>{property}:{value};</div>
                    {/each}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<table>
    <tbody>
        {#each Object.entries(presets.typography.style) as [key, values]}
            <tr>
                <td class={`text-{key}`}>text-{key}</td>
            </tr>
        {/each}
    </tbody>
</table>

### Breakpoints {#breakpoints}

The helper classes apply typography at a given breakpoint. These classes can be applied using the following format: `{breakpoint}:{property}-{size}`.

### Font Weight & Emphasis {#font-weight-emphasis}

Control the weight of your text with ease using Mytril’s font weight properties. The following classes provide a range of font weights and styles:

- `font-thin`: Thin text (100)
- `font-light`: Light text (300)
- `font-regular`: Regular text (400)
- `font-medium`: Medium text (500)
- `font-bold`: Bold text (700)
- `font-black`: Black text (900)
- `font-italic`: Italic text

### Text Alignment {#text-alignement}

Align text across your layout using these properties classes:

- `text-start`: Aligns text to the start
- `text-end`: Aligns text to the end
- `text-center`: Centers the text
- `text-justify`: Justifies the text
- `text-left`: Aligns text to the left
- `text-right`: Aligns text to the right

### Text Transform & Decoration {#text-transform-decoration}

Modify text appearance with transformations or add design touches:

- `text-uppercase`: Converts text to uppercase
- `text-lowercase`: Converts text to lowercase
- `text-capitalize`: Capitalizes the first letter of each word

### Text Wrapping & Overflow {#text-wrapping-overflow}

Ensure text behaves as needed in your layout with these helpers:

- `text-truncate`: Truncates overflowing text with an ellipsis
- `text-no-wrap`: Prevents text from wrapping
- `text-break`: Forces long words to break and wrap to the next line

### Responsive Typography {#responsive-typography}

To apply text styles at specific breakpoints, use the format `{breakpoint}:{property}-{size}`. For example, `lg:text-2xl` applies `text-2xl` on large screens.

**Example Usage:**

```html
<p class="text-sm md:text-lg font-bold text-center">
    Responsive typography made easy with Mytril
</p>

```

With Mytril’s comprehensive typography utilities, you can effortlessly style text for any project, ensuring consistency and adaptability across different devices.
