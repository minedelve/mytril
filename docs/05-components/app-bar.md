---
title: AppBar Component a comprehensive guide
section: AppBar
head:
  title: AppBar component
  description: Discover Mytril's AppBar component for Svelte applications. Create intuitive navigation with a lightweight, customizable, and accessible interface.
related:
  - /mytril/docs/components/toolbar
  - /mytril/docs/components/application
  - /mytril/docs/components/btn
features:
  github: 05-components/app-bar.md
  bug: 'AppBar component'
  feature: 'AppBar component'
---

The **AppBar** component is a cornerstone of application navigation, offering enhanced functionality and usability. Built on top of the [**Toolbar**](/mytril/docs/components/toolbar) component, the AppBar is ideal for creating a consistent and customizable navigation experience. Mytril’s AppBar ensures that your application remains visually appealing and accessible across devices.

> Note: it’s recommended to use a single AppBar instance per application to maintain design consistency and reduce complexity.

## Using the AppBar component {#using-the-app-bar-component}

Implementing the AppBar in your project is straightforward:

```svelte
<script>
	import { AppBar } from 'mytril';
</script>

<AppBar>
	<!-- your content -->
</AppBar>
```

## Core AppBar subcomponents {#core-appbar-subcomponents}

Mytril’s AppBar includes powerful subcomponents that simplify the creation of structured navigation.

| Component   | Description                                 |
| :---------- | :------------------------------------------ |
| AppBar      | The main container for your application bar |
| AppBarTitle | Displays the title in the AppBar            |

Here’s an example of a fully implemented AppBar with a title:

```svelte
<script>
	import { AppBar, AppBarTitle } from 'mytril';
</script>

<AppBar>
	<AppBarTitle>Application</AppBarTitle>
</AppBar>
```

## AppBar component properties {#appbar-component-properties}

The AppBar is highly customizable, with properties designed for flexibility and ease of use.

| Property | Type          | Default | Description                                                                    |
| :------- | :------------ | :------ | :----------------------------------------------------------------------------- |
| tag      | string        | div     | Specify a custom tag for the root element                                      |
| location | top or bottom | top     | UDetermines whether the AppBar is displayed at the top or bottom of the screen |

> The AppBar component inherits additional properties from the Toolbar component, such as dark, light, dense, and color, making it highly versatile for different design requirements.

## AppBarTitle subcomponent {#appbar-subcomponent}

The **AppBarTitle** is used to define a clear, prominent title within the AppBar. It supports minimal configuration for quick setup:

```svelte
<script>
	import { AppBar, AppBarTitle } from 'mytril';
</script>

<AppBar>
	<AppBarTitle>// your content</AppBarTitle>
</AppBar>
```

| Property | Type   | Default | Description                               |
| :------- | :----- | :------ | :---------------------------------------- |
| tag      | string | div     | Specify a custom tag for the root element |

## Why use Mytril’s AppBar? {#why-use-mytril-appbar}

1. **Enhanced navigation:** Mytril's AppBar offers flexible positioning, supporting both top and bottom screen placement
2. **Seamless integration:** leverages Toolbar component features for smooth implementation
3. **Customizable and accessible:** includes dark and light themes, dynamic color schemes, and utility classes
4. **Built for performance:** optimized specifically for Svelte, without external dependencies

{#snippet properties()}

## API reference in Mytril app bar component

### Properties for app bar

| Property         | Type                | Default      | Description                                                                                                               |
| :--------------- | :------------------ | :----------- | :------------------------------------------------------------------------------------------------------------------------ |
| **variant**      | `enum`              | `undefined`  | Set a different style (`outline`, `text`, `dash`) for app bar rendering.                                                  |
| **location**     | `enum`              | `undefined`  | Set app bar on `top` or `bottom` application with position **fixed**.                                                     |
| **density**      | `enum`              | `default`    | Adjusts height and space padding inside the app bar content area (`default`, `comfortable`, `compact`).                   |
| **orientation**  | `enum`              | `horizontal` | Display content app bar with `horizontal` or `vertical` position.                                                         |
| **classContent** | `string` `string[]` | `undefined`  | Add class directly on child `div`                                                                                         |
| **dark**         | `boolean`           | `false`      | Forces a `dark` color scheme on the app bar.                                                                              |
| **light**        | `boolean`           | `false`      | Forces a `light` color scheme on the app bar.                                                                             |
| **rounded**      | `enum` `string`     | `undefined`  | Sets the shape radius of the app bar. Choose from predefined values (`xs`, `sm`, `md`, `lg`, `xl`) or custom values.      |
| **color**        | `enum` `string`     | `undefined`  | Customizes the content text color using `X11 color names`, `HEX`, `RGB`, `RGBA`, `HSL`, or `Mytril theme colors`.         |
| **background**   | `enum` `string`     | `undefined`  | Customizes the app bar’s background color using `X11 color names`, `HEX`, `RGB`, `RGBA`, `HSL`, or `Mytril theme colors`. |

### Snippet references

| Snippet      | Type      | Properties | Description                            |
| :----------- | :-------- | :--------- | :------------------------------------- |
| **children** | `Snippet` | `nothing`  | Display activator element for app bar. |

### Styles references

| Variables               | Default                   | Description                                                          |
| :---------------------- | :------------------------ | :------------------------------------------------------------------- |
| **app-bar-c**           | `--color-on-surface`      | Property CSS `color`.                                                |
| **app-bar-bg**          | `--color-surface`         | Property CSS `background-color`.                                     |
| **app-bar-br**          | `--radius-md`             | Property CSS `border-radius`.                                        |
| **app-bar-size**        | `thin`                    | Property CSS `border-size`.                                          |
| **app-bar-color**       | `--color-surface-variant` | Property CSS `border-color`.                                         |
| **app-bar-spacing**     | `0.25rem`                 | Property CSS `border-radius calculate` and `padding-line calculate`. |
| **layout-content-area** | `100%`                    | Property CSS `width` on **child** .                                  |

{/snippet}
