---
title: Elevation
---

<script lang="ts">
    import {presets} from "../index.js"
    import Elevations from "./modules/elevations.svelte";
</script>

# Elevation {#elevation}

<div class="table">
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
</div>

## Usage {#usage}

<Elevations datas={presets?.elevation}/>

```html
<div class="custom-class elevation-2">
	<h1>Mytril</h1>
</div>
```

And you have a possibility to use elevation directly on your css with :root var.

```css
.custom-class {
	box-shadow: var(--a-elevation-3);
}
```

root css `--a-elevation-{n}`;
