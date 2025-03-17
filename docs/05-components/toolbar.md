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

The toolbar is an essential element of modern graphical interfaces, often serving as the navigation center for applications. With Mytril, creating versatile, responsive and visually appealing toolbars is effortless.

## Using the Toolbar {#using-the-toolbar}

To create a navigation bar, wrap your content inside the `Toolbar` component:

```svelte
<script>
	import { Toolbar } from 'mytril';
</script>

<Toolbar>
	<!-- your content -->
</Toolbar>
```

## Core Toolbar sub components {#core-toolbar-sub-components}

Mytril’s toolbar system is built on modular components, making it easy to organize titles, navigation items, and actions.

| Component    | Description                                 |
| :----------- | :------------------------------------------ |
| Toolbar      | The main container for your navigation bar  |
| ToolbarTitle | Displays a title within the toolbar         |
| ToolbarItems | Holds navigation content, buttons, or icons |

### Example {#example}

```svelte
<script>
	import { Toolbar, ToolbarTitle, ToolbarItems, Btn } from 'mytril';
</script>

<Toolbar>
	<ToolbarTitle>Application</ToolbarTitle>
	<ToolbarItems>
		<Btn>Menu 1</Btn>
		<Btn>Menu 2</Btn>
		<Btn>Menu 2</Btn>
	</ToolbarItems>
</Toolbar>
```

### Toolbar component properties {#toolbar-component-properties}

| Property  | Type             | Default   | Description                                                                                                                          |
| :-------- | :--------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string           | div       | Specify a custom tag for the root element                                                                                            |
| dark      | boolean          | false     | Applies a dark theme                                                                                                                 |
| light     | boolean          | false     | Applies a light theme                                                                                                                |
| absolute  | boolean          | false     | Positions the toolbar absolutely within its container                                                                                |
| dense     | boolean          | false     | Reduces toolbar height to 48px                                                                                                       |
| height    | string or number | 64px      | ets the toolbar height                                                                                                               |
| floating  | boolean          | false     | Makes the toolbar inline (floating)                                                                                                  |
| outlined  | boolean          | false     | Adds a border to the toolbar and removes its background                                                                              |
| text      | boolean          | false     | Removes both background and border styles                                                                                            |
| rounded   | string           | undefined | Adds [border radius](/mytril/docs/styles/border-radius) to the toolbar                                                               |
| color     | string           | undefined | Sets the background color. Accepts **HEX**, **RGB**, **RGBA**, **X11**, or [Mytril themes](/mytril/docs/customization/themes) colors |
| colorText | string           | undefined | Sets the text color. Ignored when `outline` or `text` is active                                                                      |

### ToolbarTitle {#toolbar-title}

The `ToolbarTitle` subcomponent is used for adding a title to the toolbar.

```svelte
<script>
	import { Toolbar, ToolbarTitle } from 'mytril';
</script>

<Toolbar>
	<ToolbarTitle>// your content</ToolbarTitle>
</Toolbar>
```

| Property | Type   | Default | Description                                 |
| :------- | :----- | :------ | :------------------------------------------ |
| tag      | string | div     | Specifies a custom tag for the root element |

### ToolbarItems {#toolbar-items}

The `ToolbarItems` subcomponent contains navigational items, buttons, or other interactive elements.

```svelte
<script>
	import { Toolbar, ToolbarItems } from 'mytril';
</script>

<Toolbar>
	<ToolbarItems>// your content</ToolbarItems>
</Toolbar>
```

| Property | Type   | Default | Description                                 |
| :------- | :----- | :------ | :------------------------------------------ |
| tag      | string | div     | Specifies a custom tag for the root element |

### Why choose Mytril’s Toolbar component? {#why-choose-mytril-toolbar-component}

- **Simplified navigation**: build clean, intuitive navigation bars with minimal code
- **Responsive design**: adapts effortlessly to different screen sizes
- **Customizable**: includes properties for color schemes, themes, sizes, and border styles
- **Semantic and accessible**: designed with semantic HTML to ensure better accessibility and SEO compliance
