---
title: Theme Configuration
---

<script lang="ts">
    import ColorRow from "./modules/color-row.svelte";
    import { themes, colorScheme } from "mytril/api";

    const colorKeys = Object.keys(themes);
    let mode: string = 'light'
</script>

# Theme Configuration {#theme-configuration}

Customize your application's default surfaces, text colors, breakpoints and more. Easily modify your theme in real time with one file configuration! Mytril comes with standard support for light and dark variants with theme process.

## Basic {#basic}

Mytril comes with two themes pre-installed, **light** and **dark**.
To set the default theme of your application; use the `defaultTheme` option in the _mytril.config.js_ file.

```javascript
export default {
  theme: {
    defaultTheme: "light",
  },
};
```

By default, the configured theme is light, you can change it to dark or any other theme name you have created.

### Customize default themes {#customize-default-themes}

You can modify existing properties or create new ones. The logic of mytril is to generate style variables for each property in classes that correspond to the theme name. However, a nuance exists for the default theme which, in addition to being included in a class, will be present in **root** css.

```javascript
export default {
  theme: {
    defaultTheme: "light",
    colors: {
      primary: {
        light: "var(--c-green-6)",
        dark: "var(--c-green-2)",
      },
      secondary: "#eaea",
      background: {
        dark: "var(--c-stone-10)",
      },
    },
  },
};
```

To modify a color of an existing theme you have several possibilities:

- **key: string,** : A string property, apply the same color for all generated themes. For example for the secondary property, you will have the color #eaea diffused on light and dark.
- **key: object,** : An object type property that allows you to refine your color charts according to the theme. In our example, primary will have a different shade of green between the dark and light theme.

_If you create a new property it will be distributed only on the theme indicated for the other themes it will be undefined. If you do not have a nuance for other themes we recommend that you define it as a string._

### Add new theme {#add-new-themes}

You can quickly add new themes to your application.

```javascript
export default {
  theme: {
    defaultTheme: "dark",
    colors: {
      primary: {
        light: "var(--c-green-6)",
        dark: "var(--c-green-2)",
        "my-theme": "var(--c-green-10)",
      },
      secondary: "#eaea",
    },
  },
};
```

To add a theme to your project, simply define a new shade in a property. For example in primary we added the **my-theme** nuance. This generated a new class named `.my-theme`. **This new theme directly inherits the existing variables in the selected default theme.**

## Default colors set

All the color properties installed by default in mytril are presented to you here.

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
            border: 1px solid var(--c-text);
            color: var(--c-text);
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
