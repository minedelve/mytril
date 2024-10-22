---
title: Elevation Classes
description: Apply shadows and control depth in Svelte projects using Mytril's elevation classes or root variables. Customize elevation levels from 0 to 24 for flexible UI shadow options.
---

<script lang="ts">
    import {presets} from "../index.js"
    import Elevations from "./modules/elevations.svelte";
</script>

# Elevation Styles {#elevation-styles}

Mytril is simple way to manage elevation (box-shadow) in your project through pre-configured CSS classes. These classes help you quickly apply different levels of shadow effects to elements, improving the visual depth and user experience of your application.

## Available Elevation Classes: {#elevation-clasess}

The elevation classes in Mytril range from elevation-0 (no shadow) to elevation-24 (maximum shadow). Each class applies a specific box-shadow value, which gives you a wide range of depth options for UI elements.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(presets.elevation) as [index, values]}
            <tr style="margin-bottom: 5px;">
                <td style="min-width: 150px;">elevation-{index}</td>
                <td>
                    box-shadow: {#each values as value}
                        {value},
                    {/each};
                </td>
            </tr>
        {/each}
    </tbody>
</table>

With 25 different elevation levels, it's easy to apply varying degrees of shadow to your components, whether you're working with lightweight UIs or complex layouts that require enhanced depth perception.

## Usage Example {#usage}

<Elevations datas={presets?.elevation}/>

Simply add the desired elevation class directly into your HTML elements:

```html
<div class="custom-class elevation-2">
	<h1>Mytril</h1>
</div>
```

In this example, the elevation-2 class applies a subtle shadow effect, giving the element a raised appearance.

### Customizing Elevation with Root Variables: {#customizing-elevation-with-root-variables}

You can also leverage Mytril’s root CSS variables to directly control the shadow in your custom classes. Mytril exposes variables like `--elevation-{n}`, where `{n}` represents the shadow depth from 0 to 24. This allows you to seamlessly integrate shadows into your existing custom styles:

```css
.custom-class {
	box-shadow: var(--elevation-3);
}
```

This flexibility makes it easy for developers to adapt the elevation system into custom components and styles, without being locked into predefined classes.

### Elevation with Svelte: {#elevation-with-svelte}

Mytril's elevation system integrates effortlessly into **Svelte** applications. Whether you're building dynamic interfaces or simply looking for a quick way to add depth to elements, the provided **CSS classes** and **variables** make it straightforward to apply shadow effects.
