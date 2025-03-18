---
title: Toolbar component with Mytril
section: Toolbar
head:
  title: Toolbar Component
  description: Create dynamic navigation bars using Mytril’s Toolbar component. Learn about its properties, subcomponents, and customization options for responsive and accessible designs.
related:
  - /mytril/docs/components/card
  - /mytril/docs/components/list
  - /mytril/docs/components/expansion-panel
features:
  github: 05-components/toolbar.md
  bug: 'Toolbar component'
  feature: 'Toolbar component'
---

<script>
  	import Code from "$components-docs/code.svelte"
</script>

## Core Toolbar subcomponents

| Component    | Description                               |
| :----------- | :---------------------------------------- |
| Toolbar      | The main container for your tools actions |
| ToolbarTitle | Displays the title in the Toolbar         |

## Properties toolbar

### Basic

Toolbar basic

### Variant

Toolbar variant style

### Density

Toolbar sizing

### Orientation

Toolbar vertical

### ToolbarTitle

Toolbar + ToolbarTitle

{#snippet properties()}

## API reference in Mytril toolbar component

### Properties for toolbar

| Property        | Type            | Default      | Description                                                                                                               |
| :-------------- | :-------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------ |
| **variant**     | `enum`          | `undefined`  | Set a different style (`outline`, `text`, `dash`) for toolbar rendering.                                                  |
| **density**     | `enum`          | `default`    | Adjusts height and space padding inside the toolbar content area (`default`, `comfortable`, `compact`).                   |
| **orientation** | `enum`          | `horizontal` | Display content toolbar with `horizontal` or `vertical` position.                                                         |
| **dark**        | `boolean`       | `false`      | Forces a `dark` color scheme on the toolbar.                                                                              |
| **light**       | `boolean`       | `false`      | Forces a `light` color scheme on the toolbar.                                                                             |
| **rounded**     | `enum` `string` | `undefined`  | Sets the shape radius of the toolbar. Choose from predefined values (`xs`, `sm`, `md`, `lg`, `xl`) or custom values.      |
| **color**       | `enum` `string` | `undefined`  | Customizes the content text color using `X11 color names`, `HEX`, `RGB`, `RGBA`, `HSL`, or `Mytril theme colors`.         |
| **background**  | `enum` `string` | `undefined`  | Customizes the toolbar’s background color using `X11 color names`, `HEX`, `RGB`, `RGBA`, `HSL`, or `Mytril theme colors`. |

### Snippet references

| Snippet      | Type      | Properties | Description                            |
| :----------- | :-------- | :--------- | :------------------------------------- |
| **children** | `Snippet` | `nothing`  | Display activator element for toolbar. |

### Styles references

| Variables           | Default                   | Description                                                          |
| :------------------ | :------------------------ | :------------------------------------------------------------------- |
| **toolbar-c**       | `--color-on-surface`      | Property CSS `color`.                                                |
| **toolbar-bg**      | `--color-surface`         | Property CSS `background-color`.                                     |
| **toolbar-br**      | `--radius-md`             | Property CSS `border-radius`.                                        |
| **border-size**     | `thin`                    | Property CSS `border-size`.                                          |
| **border-color**    | `--color-surface-variant` | Property CSS `border-color`.                                         |
| **toolbar-spacing** | `0.25rem`                 | Property CSS `border-radius calculate` and `padding-line calculate`. |

{/snippet}
