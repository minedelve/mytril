---
title: AppBar Components Mytril
description: jsp
---

# AppBar component with Mytril {#appbar-component-with-mytril}

The **AppBar** component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation.

> AppBar is based on the Toolbar component, and offers additional options to provide more functionality. It's recommended to use only one on your application rendering.

## Using the AppBar {#using-the-app-bar}

To create application bar

```svelte
<script>
	import { AppBar } from 'mytril';
</script>

<AppBar>
	<!-- your content -->
</AppBar>
```

## Core app-bar sub components {#core-app-bar-sub-components}

| Component | Description                             |
| :-------- | :-------------------------------------- |
| AppBar    | The main element for a application bar. |
| AppTitle  | Used to display title on AppBar         |

```svelte
<script>
	import { AppBar, AppBarTitle } from 'mytril';
</script>

<AppBar>
	<AppBarTitle>Application</AppBarTitle>
</AppBar>
```

### AppBar component properties {#app-bar-component-properties}

| Property | Type          | Default | Description                                     |
| :------- | :------------ | :------ | :---------------------------------------------- |
| tag      | string        | div     | Specify a custom tag used on the root element.  |
| location | top or bottom | top     | Used to display AppBar on top or bottom screen. |

> AppBar inherits properties from the [Toolbar](/mytril/docs/components/toolbar) component.

**AppBarTitle**

```svelte
<script>
	import { AppBar, AppBarTitle } from 'mytril';
</script>

<AppBar>
	<AppBarTitle>// your content</AppBarTitle>
</AppBar>
```

| Property | Type   | Default | Description                                    |
| :------- | :----- | :------ | :--------------------------------------------- |
| tag      | string | div     | Specify a custom tag used on the root element. |
