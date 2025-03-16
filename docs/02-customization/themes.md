---
title: Introduction to themes
section: Theme
head:
  title: Customize svelte themes
  description: Quickly modify default themes or create new ones in Mytril. Adjust colors, add themes, and control your Svelte UI with a simple config file.
related:
  - /mytril/docs/getting-started/installation
  - /mytril/docs/components/application
  - /mytril/docs/customization/breakpoints
features:
  github: 02-customization/themes.md
---

<script>
    import ThemesExamples from "$components-docs/themes-examples.svelte"
    import Code from "$components-docs/code.svelte"
</script>

Themes are at the heart of Mytril's flexible design system, powered by custom CSS variables generated via **JS-to-CSS**. This allows for simple and complete customization of your application. With Mytril, you can build:

- Customize surfaces, text colors, and other styling elements
- Modify the **default theme** or create entirely new themes
- Leverage a **color-scheme** (light/dark modes supported)
- Enjoy auto-inherited styles for all Mytril components

## Preset themes

Mytril default theme supports both light and dark color schemes. These are applied automatically or are user-configurable, allowing you to start styling right from the start without additional configuration.

> Other themes will be added with new versions of Mytril

<ThemesExamples/>

## Theme variables

Theme variables are defined in the `mytril.config.js` file. Mytril uses these variables to ensure consistent styles across all components in your app.

### Example structure:

- The theme is applied to the `<html>` tag through the `mytril-theme="default"` attribute.
- Light and dark variants are appended as `.light` or `.dark` classes.

### Compatibility:

Mytril variables follow a strict format to prevent conflicts with popular CSS frameworks such as **UnoCSS** or **TailwindCSS**.

## Define your custom theme

Easily customize your own theme by defining keys for variables like colors, fonts, and more. Below are examples of different configurations.

### Single Color Key Example

Use for themes with identical light and dark setups.

<Code>

```javascript
// mytril.config.js

/** @type {import('mytril').Config} */
export default {
	themes: {
		myTheme: {
			primary: '#4ade80' // applies the same color to both light and dark schemes
		}
	}
};
```

</Code>

### Light and dark color variants

Create themes with separate values for **light** and **dark** modes.

<Code>

```javascript
// mytril.config.js

/** @type {import('mytril').Config} */
export default {
	themes: {
		myTheme: {
			primary: {
				light: '#4ade80',
				dark: '#22c55e'
			} // different colors for light & dark
		}
	}
};
```

</Code>

### Advanced nested configurations

Use nested keys for variations or hover states.

<Code>

```javascript
// mytril.config.js

/** @type {import('mytril').Config} */
export default {
	themes: {
		myTheme: {
			primary: {
				_default: '#1d4ed8',
				hover: '#1e40af',
				variant: {
					light: '#4ade80',
					dark: '#22c55e'
				}
			}
		}
	}
};
```

</Code>

## **Normalize Mytril variables**

Customize Mytril using well-structured variables for consistent application-wide styles.

Here’s a breakdown of available variable types:

| **Variable**     | **Usage**                                               |
| ---------------- | ------------------------------------------------------- |
| `--color-{key}`  | Customize theme colors for design consistency.          |
| `--font-{key}`   | Define font family for Mytril components.               |
| `--radius-{key}` | Set consistent border-radius values for all components. |

**Example:**

<Code>

```css
/* Example of normalized variables */
--color-primary: #1d4ed8;
--font-base: 'Inter', sans-serif;
--radius-md: 16px;
```

</Code>

## Dynamic theme switching

Customize themes based on user interaction, content sections, or preferences using Mytril’s built-in API.

### Define your themes in config:

<Code>

```javascript
// mytril.config.js

/** @type {import('mytril').Config} */
export default {
	themes: ['default', 'minedelve'],
	defaultTheme: 'default'
};
```

</Code>

**Switch themes using setTheme:**

<Code>

```javascript
setTheme('minedelve');
// return: <html mytril-theme="minedelve">
```

</Code>

This dynamically updates themes and propagates the changes to all components.

## Dark mode: easy setup

Dark mode is becoming a fundamental design element in web apps. Mytril simplifies its implementation with built-in support for light and dark themes.

### Default behavior

By default, **Mytril adapts to the operating system’s color mode** (light or dark). You can override this behavior in the `mytril.config.js` file.

### Color scheme configuration:

Set your preferred default color scheme:

| **Key**  | **Description**                             |
| -------- | ------------------------------------------- |
| `system` | Automatically adjusts based on OS mode.     |
| `dark`   | Forces dark mode regardless of OS settings. |
| `light`  | Always uses the light theme.                |

<Code>

```javascript
// mytril.config.js

/** @type {import('mytril').Config} */
export default {
	colorScheme: 'system' // options: 'system', 'dark', 'light'
};
```

</Code>

## Theming utilities

Mytril includes utilities to handle theme-related functionality programmatically:

| **Utility**      | **Description**                                  |
| ---------------- | ------------------------------------------------ |
| `themeStore`     | Tracks the current active theme (`system`, etc.) |
| `setColorScheme` | Switch between modes (`system`, `dark`, `light`) |

### Example:

<Code>

```javascript
import { themeStore, setColorScheme } from 'mytril';

// display actual theme
console.log(themeStore); // return light (for this example)

// switch to dark mode
setColorScheme('dark');
```

</Code>

## Start customizing your themes

By fully utilizing Mytril’s theming system, you can create stunning, adaptable, and user-oriented UIs. Mytril’s flexibility allows you to define color schemes, seamlessly switch between dark and light modes, and customize designs down to the smallest detail.

Explore further by experimenting with **dynamic themes**, integrating with CSS frameworks like TailwindCSS or UnoCSS, or setting preferences through the built-in API tools. Build the exact experience your users expect with Mytril’s tailored theming capabilities.

Does this improved version align better? Let me know if you'd like more refinement!

**Next steps**: Experiment with advanced theme configurations for tailored user experiences!
