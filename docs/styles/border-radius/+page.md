---
title: Border radius
description: Using border-radius in Mytril is simple using simple classes and CSS variables. Easily customize rounded corners for the different parts of your project.
---

<script lang="ts">
    import {presets} from "../index.js"
    import Corner from "./modules/corner.svelte";
</script>

# Border Radius {#rounded}

ytril its a straightforward way for you why using the CSS to apply border-radius to elements using predefined rounded classes. These classes range from .rounded-0 for no rounding to .rounded-xl for a larger border radius. Developers can easily implement these options to customize the appearance of UI elements.

## Predefined Rounded Classes {#predefined-rounded-classes}

The following classes allow you to set different border-radius values for various elements:

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        
        {#each Object.entries(presets.rounded) as [index, value]}
            <tr style="margin-bottom: 5px;">
                <td>
                    {#if index === 'default'}
                        rounded
                    {:else}
                        rounded-{index}
                    {/if}
                </td>
                <td>
                    border-radius: {value};
                </td>
            </tr>
        {/each}
    </tbody>
</table>

## Usage {#usage}

### Rounded corners

Use the rounded, rounded-0, rounded-sm, rounded-lg, and rounded-xl classes to set the border-radius of an element.

<Corner datas={presets?.rounded}/>

### Rounding by side

Use the rounded-t-_, rounded-b-_, rounded-l-_, and rounded-r-_ classes to set the border-radius of an element on a specific side.

<Corner datas={presets?.rounded} property="t"/>
<Corner datas={presets?.rounded} property="b"/>
<Corner datas={presets?.rounded} property="l"/>
<Corner datas={presets?.rounded} property="r"/>

Use the rounded-tr-_, rounded-tl-_, rounded-br-_, rounded-bl-_.

<Corner datas={presets?.rounded} property="tr"/>
<Corner datas={presets?.rounded} property="tl"/>
<Corner datas={presets?.rounded} property="br"/>
<Corner datas={presets?.rounded} property="bl"/>

```html
<button class="custom-class rounded-xl">Button</button>
```

And you have a possibility to use border radius directly on your css with :root var.

```css
.custom-class {
	border-radius: var(--rounded-xl);
}
```

root css `--rounded-{n}`;
