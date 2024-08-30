---
title: Themes toolkit
---

<script lang="ts">
    import ColorRow from "./modules/color-row.svelte";
    import { themes, colorScheme } from "mytril/api";

    const colorKeys = Object.keys(themes);
    let mode: string = 'light'
</script>

# Themes

Customizing the default theme for your project.

Mytril offers a default theme configuration in order to be propagated across all Mytril components.

<div class="select-color-scheme">
{#each colorScheme as scheme}
<button on:click={() => mode = scheme} class={mode === scheme && 'active'}>{scheme}</button>

{/each}

</div>

{#each colorKeys as colorKey}

    <h4>{colorKey}</h4>

    <section class="wrapper-colors">
        {#each themes[colorKey] as color}
            <ColorRow {color} theme={mode}/>
        {/each}
    </section>

{/each}

We provide a sensible default theme with a very generous set of values to get you started, but don’t be afraid to change it or extend it; you’re encouraged to customize it as much as you need to fit the goals of your design.

<style lang="postcss">
    .wrapper-colors {
        display: grid;
        grid-template-rows: 1fr;
        gap: 0.5rem;

        @media (min-width: 544px) {
            grid-template-columns: repeat(2, calc(100% / 2 - 0.5rem));
        }

        @media (min-width: 748px) {
            grid-template-columns: repeat(3, calc((100% / 3 - 0.5rem)));
        }
    }

    .select-color-scheme {
        display: flex;
        width: 100%;
        margin-top: 0.5rem;

        button {
            border: 1px solid var(--c-text-1);
            color: var(--c-text-1);
            border-radius: 1rem;
            padding: 0.25rem 1rem;
            background-color: transparent;
            cursor: pointer;

            &.active {
                border: 1px solid var(--c-brand);
                background-color: var(--c-brand);
            }

            &:first-child {
                margin-left: auto;
            }
            &:last-child {
                margin-left: 0.5rem;
            }
        }
    }
</style>
