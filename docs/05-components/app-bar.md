---
title:
section:
head:
  title: AppBar component
  description: Discover Mytril's AppBar component for Svelte applications. Create intuitive navigation with a lightweight, customizable, and accessible interface.
features:
  legacy: 0.4.14
---

# AppBar Component a comprehensive guide {#appbar-component-a-comprehensive-guide}

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
