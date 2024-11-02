---
title: Material CSS color palette
description: Learn how to integrate the Material Design color palette in your Svelte projects with Mytril. Use Material’s predefined colors and CSS variables to style your components.
---

<script lang="ts">
    import Color from "../modules/color.svelte";
    import ColorSummary from "../modules/color-summary.svelte";
    import { materialColors } from "../modules/colorsMaterial.js";
    

    let formatColor = "variable"
    const colorKeys = Object.keys(materialColors);
</script>

# Material Design color scheme with Mytril {#color-scheme}

Mytril integrates the full **Material Design** color chart, giving developers access to Google’s design standards directly in their Svelte projects. By activating the Material Design palette in your configuration, you can apply consistent and visually appealing colors across your components using simple CSS variables.

## How to Enable the Material Design Palette

1. Open **plugins/mytril.(js|ts)**.
2. Add this configuration to activate the **Material** palette:

```javascript
// plugins/mytril.(js|ts)
export default {
	theme: {
		palette: 'material'
	}
};
```

3. Restart your environment to load the Material color variables.

## Material Design color options

Once activated, you can access a wide range of colors directly in your stylesheets.

Use material colors in components by easily applying material colors to your components using **CSS variables** like this one:

```css
button {
	background-color: var(--red-500);
	color: var(--blue-100);
}
```

Or use hex codes provided within the palette for more detailed control.

<ul>
    {#each colorKeys as colorKey}
        {#each materialColors[colorKey] as color}
            {#if color.default === true}
                <li>
                    <ColorSummary name={colorKey} color={color}/>
                </li>
            {/if}
        {/each}
    {/each}
</ul>

<div class="select-format">
    <button on:click={() => formatColor = "variable"} class={formatColor === "variable" && 'active'}>Variables</button>
    <button on:click={() => formatColor = "hex"} class={formatColor === "hex" && 'active'}>Hex</button>
</div>

{#each colorKeys as colorKey}

<h3 id={colorKey}>{colorKey}</h3>
<section class="wrapper-colors">
{#each materialColors[colorKey] as color}
<Color color={color} format={formatColor}/>
{/each}
</section>
{/each}

### Why choose Material Design colors?

Material Design colors ensure your interface follows a consistent and standardized color scheme, making it a great choice for developers building with **Material Design principles**.

<style lang="postcss">

ul {
    height: 300px;
    column-count: 3;
    column-gap: 4px;
    column-fill: auto;

    list-style: none;
    margin-bottom: 26px;
    margin-top: 0;
    padding: 0;
    border-bottom: 1px solid var(--c-divider);

    & li {
        list-style: none;
        margin-top: 0;
        margin-bottom: 0;

        &:before {
            display: none;
        }
    }

    & > li+li {
        margin-top: 0.25em;
    }
}

    .select-format {
        display: flex;
        width: 100%;
        margin-top: 0.5rem;

        button {
            border: 1px solid var(--c-text-1);
            color: var(--c-text);
            border-radius: 1rem;
            padding: 0.25rem 1rem;
            background-color: transparent;
            cursor: pointer;

            &.active {
                border: 1px solid var(--c-primary);
                background-color: var(--c-primary);
            }

            &:first-child {
                margin-left: auto;
            }
            &:last-child {
                margin-left: 0.5rem;
            }
        }
    }

    h3 {
        text-transform: capitalize;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 5vw;
        padding: 2vw 0;
        font-size: 20px;

         @media (min-width: 544px) {
            padding: 0;
            margin: 0 0 30px;
            font-size: 24px;
         }
    }

    .wrapper-colors {
        display: grid;
        grid-template-rows: 1fr;
        gap: 0.5rem;

       @media (min-width: 544px) {
            grid-template-columns: repeat(5, calc(100% / 5 - 0.5rem));
       }

        @media (min-width: 748px) {
            grid-template-columns: repeat(6, calc((100% / 6 - 0.5rem)));
       }
    }
</style>
