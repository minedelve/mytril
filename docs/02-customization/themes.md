---
title: Customize svelte themes
description: Quickly modify default themes or create new ones in Mytril. Adjust colors, add themes, and control your Svelte UI with a simple config file
---

<script lang="ts">
    import ColorRow from "../modules/color-row.svelte";
    import { themes, colorScheme } from "../modules/themes.js";

    const colorKeys = Object.keys(themes);
    let mode: string = 'light'
</script>

# Theme configuration {#theme-configuration}

Customize default surfaces, text colors, breakpoints and more. Easily modify your theme in real time with one file configuration! Mytril comes with standard support for light and dark variants with theme process.

## Basic {#basic}

Mytril comes pre-installed with two default themes: light and dark. To set your app's default theme, edit the `defaultTheme` option in the `plugins/mytril.(js|ts)` file.

```javascript
// plugins/mytril.(js|ts)
export default createMytril({
	theme: {
		defaultTheme: 'light'
	}
});
```

By default, the **light** theme is applied, but you can easily switch to **dark** or any custom theme you've created.

### Custumizing default themes {#customizing-default-themes}

You can modify existing themes or create new ones by adjusting properties. Mytril generates style variables for each property, linked to the theme name. The default theme is also included in the global CSS **root**.

```javascript
// plugins/mytril.(js|ts)

export default createMytril({
	theme: {
		defaultTheme: 'light',
		colors: {
			primary: {
				light: 'var(--green-6)',
				dark: 'var(--green-2)'
			},
			secondary: '#eaea',
			background: {
				dark: 'var(--stone-10)'
			}
		}
	}
});
```

To customize theme colors, you can:

- **key: string,** : Apply the same color across all themes. For example, setting `secondary: "#eaea"` will apply this color to both the light and dark themes.
- **key: object** – Define specific colors for each theme. For example, `primary` can have different shades of green for light and dark themes.

_If you create a new property, it will only apply to the specified theme unless you define it for others._

### Adding a new theme {#adding-a-new-themes}

To add a new theme, simply define a new color property to your application.

```javascript
// plugins/mytril.(js|ts)

export default createMytril({
	theme: {
		defaultTheme: 'dark',
		colors: {
			primary: {
				light: 'var(--green-6)',
				dark: 'var(--green-2)',
				'my-theme': 'var(--green-10)'
			},
			secondary: '#eaea'
		}
	}
});
```

To add a new theme, simply define a new color property, like **my-theme** in primary. This will generate a new CSS class `.my-theme`, **which inherits variables from the default theme**.

## Default color set

Mytril comes with a generous set of default colors.

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

We provide a **well-balanced default theme** with an extensive set of color values to start your project. However, **the real power of Mytril lies in its flexibility** you’re not confined to the defaults. Mytril encourages you to **tailor the theme to your exact design needs**. Whether you want to tweak a few colors or create entirely new themes, Mytril makes it easy to customize every detail.

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
</style>
