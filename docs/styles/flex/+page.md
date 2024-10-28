---
title: flex
description: 'jsp'
---

<script lang="ts">
    import {presets} from "../index.js";
</script>

# Flex styles with Mytril {#flex-styles}

## Flexbox

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids.flex as flex}
            <tr>
                <td>.flex-{flex}</td>
                <td>flex: {float};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Flex direction

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids['flex-direction'] as flex}
            <tr>
                <td>.flex-{flex}</td>
                <td>flex-direction: {flex};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Flex direction

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids['flex-direction'] as flex}
            <tr>
                <td>.flex-{flex}</td>
                <td>flex-direction: {flex};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Align items

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids.align as flex}
            <tr>
                <td>.align-{flex}</td>
                <td>align-items: {flex};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Align self

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids['align-self'] as flex}
            <tr>
                <td>.align-self-{flex}</td>
                <td>align-self: {flex};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Align content

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids['align-content'] as flex}
            <tr>
                <td>.align-content-{flex}</td>
                <td>align-content: {flex};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Flex wrap

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids.wrap as flex}
            <tr>
                <td>.flex-{flex}</td>
                <td>flex-wrap: {flex};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Order

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids.order as order}
            <tr>
                <td>.order-{order}</td>
                <td>order: {order};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Shrink & grow

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.grids.shrink as shrink}
            <tr>
                <td>.flex-shrink-{shrink}</td>
                <td>flex-shrink: {shrink};</td>
            </tr>
        {/each}
        {#each presets.grids.grow as grow}
            <tr>
                <td>.flex-grow-{grow}</td>
                <td>flex-grow: {grow};</td>
            </tr>
        {/each}
    </tbody>
</table>
