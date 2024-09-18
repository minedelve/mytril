---
title: Position
---

<script lang="ts">
    import {presets} from "../index.js";
</script>

# Position {#position}

Class CSS to define the position of an element in your view.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Properties</th>
        </tr>
    </thead>
    <tbody>
        {#each presets.position as position}
            <tr>
                <td>.{position}</td>
                <td>position: {position};</td>
            </tr>
        {/each}
    </tbody>
</table>

## Usage {#usage}

You can add class position directly in your html. **Position** supports breakpoints, so thanks to this functionality you can define the different states of your html element via css classes subject to media queries rules.

```html
<header class="custom-class fixed md:absolute">
	<h1>Mytril</h1>
</header>
```

In this example the fixed class applies by default to your html **header** element, when your screen reaches the size defined by the media queries `md` then the **header** element will move to absolute position. It's quick and easy!
