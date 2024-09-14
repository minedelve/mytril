---
title: Typography
---

<script lang="ts">
    import {presets} from "../index.js"
</script>

# Typography {#typography}

Control text size, alignment, wrapping, overflow, transforms and more.

<div class="table">
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
</div>

## Text

<div class="table">
    <table>
        <tbody>
            {#each Object.entries(presets.typography.style) as [key, values]}
                <tr>
                    <td class={`text-{key}`}>text-{key}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

### Breakpoints

The helper classes apply typography at a given breakpoint. These classes can be applied using the following format: `{breakpoint}:{property}-{size}`.

## Font emphasis

Mytril, by default, supports 100, 300, 400, 500, 700, 900 font weights and italicized text.

<div class="table">
    <table>
        <thead>
            <tr>
                <th>Class</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(presets.typography.weight) as [key, values]}
                <tr style="margin-bottom: 5px;">
                    <td style="min-width: 150px;">font-{key}</td>
                    <td>
                        <div class={`font-${key}`}>{key} text</div>
                    </td>
                </tr>
            {/each}
            <tr style="margin-bottom: 5px;">
                <td style="min-width: 150px;">font-italic</td>
                <td>
                    <div class="font-italic">italic text</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## Alignment

<ul>
{#each presets.typography.align as align}
<li>text-{align}</li>
{/each}
</ul>

## Decoration

<ul>
{#each presets.typography.transform as transform}
<li class={`text-${transform}`}>text-{transform}</li>
{/each}
</ul>

## Other class

- text-truncate
- text-no-wrap
- text-break

<style>

</style>
