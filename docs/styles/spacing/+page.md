---
title: Spacing
---

<script lang="ts">
    import {presets} from "../index.js"
    import Spacing from "./modules/spacing.svelte";
</script>

# Spacing {#spacing}

<Spacing datas={presets?.spacing}/>

## Usage {#usage}

The helper classes apply margin, padding, or gap to an element ranging. These classes can be applied using the following format `{property}{direction}-{size}`.

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

### List {#list}

<div class="table">
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
</div>

## Breakpoints

The helper classes apply margin, padding and gap at a given breakpoint. These classes can be applied using the following format: `{breakpoint}:{property}-{direction}-{size}`. This does not apply to xs as it is inferred; e.g. **md:ma-2** equals **ma-2**.
