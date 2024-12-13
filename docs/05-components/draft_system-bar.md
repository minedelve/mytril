---
title: SystemBar Component
description: Jsp
---

# SystemBar component with Mytril {#system-bar-component-with-mytril}

he **SystemBar** component can be used for displaying statuses to the user.

## Using the SystemBar {#using-the-system-bar}

```svelte
<script>
	import { SystemBar } from 'mytril';
</script>

<SystemBar>
	<!-- your content -->
</SystemBar>
```

### SystemBar component properties {#system-bar-component-properties}

| Property  | Type    | Default   | Description                                                                                                                          |
| :-------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string  | div       | Specify a custom tag for the root element                                                                                            |
| dark      | boolean | false     | Applies a dark theme                                                                                                                 |
| light     | boolean | false     | Applies a light theme                                                                                                                |
| window    | boolean | false     | Add height system bar to 32px                                                                                                        |
| absolute  | boolean | false     | Add position absolute on system bar component                                                                                        |
| fixed     | boolean | false     | Add position fixed on system bar component                                                                                           |
| rounded   | string  | undefined | Adds [border radius](/mytril/docs/styles/border-radius) to the toolbar                                                               |
| color     | string  | undefined | Sets the background color. Accepts **HEX**, **RGB**, **RGBA**, **X11**, or [Mytril themes](/mytril/docs/customization/themes) colors |
| colorText | string  | undefined | Sets the text color                                                                                                                  |

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
