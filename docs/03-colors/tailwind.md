---
title: Tailwind CSS color palette
description: Integrate the Tailwind CSS color palette into your Svelte project with Mytril. Learn how to configure and apply responsive Tailwind colors using Mytril’s theme system.
---

<script lang="ts">
    import Color from "../modules/color.svelte";
    import ColorSummary from "../modules/color-summary.svelte";
    import { colors } from "../modules/colors.js";
    

    let formatColor = "variable"
    const colorKeys = Object.keys(colors);
</script>

# Tailwind CSS color scheme with Mytril {#color-scheme}

Mytril offers seamless integration with the **Tailwind CSS** color palette, allowing developers to harness the power of Tailwind’s extensive color options directly in their Svelte projects. With easy setup and a wide range of utility classes, you can ensure your components are responsive and visually cohesive.

## How to enable the tailwind palette

1. Open **mytril.config.js**.
2. Add this configuration to activate the **Tailwind** palette:

```javascript
//mytril.config.js
export default {
	theme: {
		palette: 'tailwind'
	}
};
```

3. Restart your environment to load the Tailwind color variables.

### Tailwind Color Options

Once activated, you can use Tailwind's extensive color options.

Apply **Tailwind colors** using CSS variables for streamlined styling:

```css
button {
	background-color: var(--stone-4);
	color: var(--slate-1);
}
```

<ul>
    {#each colorKeys as colorKey}
        {#each colors[colorKey] as color}
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
{#each colors[colorKey] as color}
<Color color={color} format={formatColor}/>
{/each}
</section>
{/each}

### Why use Tailwind colors?

Tailwind’s utility-first approach gives you more flexibility to apply responsive colors. It’s perfect for developers who want full control over their UI design without relying on predefined themes.

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
