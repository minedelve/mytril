---
title: Sizing
---

<script lang="ts">
    import {presets} from "../index.js"
</script>

# Sizing {#sizing}

Sizing utility classes are used to modify the dimensions of an element.

<div class="table">
    <table>
        <thead>
            <tr>
                <th>Class</th>
                <th>Properties</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(presets.sizing) as [key, values]}
                 {#each values as size}
                    <tr style="margin-bottom: 5px;">
                        <td style="min-width: 150px;">{key === 'height' ? 'h-' : 'w-'}{size.replaceAll('%', '').replaceAll('100dvh', 'full')}</td>
                        <td>
                            {size}
                        </td>
                    </tr>
                 {/each}
            {/each}
        </tbody>
    </table>
</div>

## Width

<div class="wrapper-width">
{#each Object.entries(presets.sizing) as [key, values]}
{#if key === 'width'}
{#each values as size}

<div class={`w-${size.replaceAll('%', '')}`}>
<span>{'w-'}{size.replaceAll('%', '')}</span>
</div>
{/each}
{/if}
{/each}
</div>

## Height

<div class="wrapper-height">
{#each Object.entries(presets.sizing) as [key, values]}
{#if key === 'height'}
{#each values as size}

<div class={`h-${size.replaceAll('%', '')}.replaceAll('100dvh', 'full')`}>
<span>{'h-'}{size.replaceAll('%', '').replaceAll('100dvh', 'full')}</span>
</div>
{/each}
{/if}
{/each}
</div>

## Breakpoints

The helper classes apply height and width at a given breakpoint. These classes can be applied using the following format: `{breakpoint}:{property}-{size}`. This does not apply to xs as it is inferred; e.g. **lg:w-lg** equals **w-lg**.

<style>
    .wrapper-width {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .wrapper-width div {
        height: 36px;
        background-color: var(--c-sky-2)
    }

    .wrapper-height {
        display: flex;
        gap: 8px;
        height: 300px;
    }

    .wrapper-height div {
        width: 36px;
        background-color: var(--c-sky-2)
    }
</style>
