---
title: Toolbar Components Mytril
description: jsp
---

# Toolbar component with Mytril {#toolbar-component-with-mytril}

The **Toolbar** component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation.

## Using the Toolbar {#using-the-toolbar}

To create navigation bar

```svelte
<script>
	import { Toolbar } from 'mytril';
</script>

<Toolbar>
	<!-- your content -->
</Toolbar>
```

## Core toolbar sub components {#core-toolbar-sub-components}

| Component    | Description                                    |
| :----------- | :--------------------------------------------- |
| Toolbar      | The main element for a navigation bar.         |
| ToolbarTitle | Used to display title on Toolbar               |
| ToolbarItems | Used to diplay content / navigation on Toolbar |

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

| Property  | Type             | Default   | Description                                                                                                                                                                                                                    |
| :-------- | :--------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string           | div       | Specify a custom tag used on the root element.                                                                                                                                                                                 |
| dark      | boolean          | false     | Force color theme on **dark**.                                                                                                                                                                                                 |
| light     | boolean          | false     | Force color theme on **light**.                                                                                                                                                                                                |
| absolute  | boolean          | false     | Add position absolute on your Toolbar.                                                                                                                                                                                         |
| dense     | boolean          | false     | Force height Toolbar on 48px.                                                                                                                                                                                                  |
| height    | string or number | 64px      | Change height on Toolbar.                                                                                                                                                                                                      |
| floating  | boolean          | false     | Add display-inline on Toolbar.                                                                                                                                                                                                 |
| outlined  | boolean          | false     | Add border on your Toolbar and delete background.                                                                                                                                                                              |
| text      | boolean          | false     | Remove background and border on your Toolbar.                                                                                                                                                                                  |
| rounded   | string           | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Toolbar.                                                                                                                                                             |
| color     | string           | undefined | Add color scheme on your card, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes). If properties outline or text is activate, color is property used border and text color |
| colorText | string           | undefined | Add color scheme on your content, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes). If properties outline or text is activate, this propertie is disabled                |

**ToolbarTitle**

```svelte
<script>
	import { Toolbar, ToolbarTitle } from 'mytril';
</script>

<Toolbar>
	<ToolbarTitle>// your content</ToolbarTitle>
</Toolbar>
```

| Property | Type   | Default | Description                                    |
| :------- | :----- | :------ | :--------------------------------------------- |
| tag      | string | div     | Specify a custom tag used on the root element. |

**ToolbarItems**

```svelte
<script>
	import { Toolbar, ToolbarItems } from 'mytril';
</script>

<Toolbar>
	<ToolbarItems>// your content</ToolbarItems>
</Toolbar>
```

| Property | Type   | Default | Description                                    |
| :------- | :----- | :------ | :--------------------------------------------- |
| tag      | string | div     | Specify a custom tag used on the root element. |
