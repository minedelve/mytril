---
title: Customizable Color Schemes
description: Implement flexible color schemes in Mytril with Hex codes and CSS variables. Easily apply or tweak colors in your components and styles to match your design system.
---

<script lang="ts">
    import Color from "./modules/color.svelte";
    import ColorSummary from "./modules/color-summary.svelte";
    import { colors } from "./modules/colors.js";
    

    let formatColor = "variable"
    const colorKeys = Object.keys(colors);
</script>

# Color Scheme {#color-scheme}

Mytril integrates a comprehensive color chart that provides `:root variables`, which you can use directly in your project. These color values are accessible within your style sheets, component files, and can be applied to actual components using the color prop. Whether you're working with CSS variables or Hex codes.

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
