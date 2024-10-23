---
title: Color schemes Material Design
description: Implement flexible color schemes Material Design in Mytril with Hex codes and CSS variables. Easily apply or tweak colors in your components and styles to match your design system.
---

<script lang="ts">
    import Color from "../modules/color.svelte";
    import ColorSummary from "../modules/color-summary.svelte";
    import { materialColors } from "../modules/colorsMaterial.js";
    

    let formatColor = "variable"
    const colorKeys = Object.keys(materialColors);
</script>

# Color scheme Material Design {#color-scheme}

Mytril integrates the full Material Design color chart, which provides `:root' variables that you can use directly in your project. These color values are accessible in your style sheets and component files, and can be applied to actual components using the color accessory. Whether you're working with CSS variables or hexadecimal codes.

To use the Material Design color palette, you need to activate the palette in `mytril.config.js`.

```javascript
export default {
	theme: {
		palette: 'material'
	}
};
```

_Once the option has been activated, restart your environment to take advantage of the color variables._

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
