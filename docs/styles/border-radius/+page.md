---
title: Border radius
---

<script lang="ts">
    import {presets} from "../index.js"
    import Corner from "./modules/corner.svelte";
</script>

# Border Radius {#rounded}

<div class="table">
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
</div>

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
	border-radius: var(--a-rounded-xl);
}
```

root css `--a-rounded-{n}`;
