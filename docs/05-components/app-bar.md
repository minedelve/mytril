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

<script>
  import Code from "$components-docs/code.svelte"
	import AppBarHead from '$content/mytril/examples/app-bar-head.svelte';
	import AppBarVariant from '$content/mytril/examples/app-bar-variant.svelte';
	import AppBarDensity from '$content/mytril/examples/app-bar-density.svelte';
	import AppBarOrientation from '$content/mytril/examples/app-bar-orientation.svelte';
	import AppBarChildAppBarTitle from '$content/mytril/examples/app-bar-child--app-bar-title.svelte';
</script>

<Code previewOnly file={AppBarHead}></Code>

## Core AppBar subcomponents

| Component   | Description                                 |
| :---------- | :------------------------------------------ |
| AppBar      | The main container for your application bar |
| AppBarTitle | Displays the title in the AppBar            |

## Properties toolbar

### Variant

AppBar variant style

<Code file={AppBarVariant}>

```svelte
<script lang="ts">
	import { Btn, Divider, Icon, AppBar, AppBarTitle, Spacer } from 'mytril/components';
</script>

<AppBar>
	<AppBarTitle>Default</AppBarTitle>
	<Spacer />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_bilibili_line" />
		{/snippet}
		Docs
	</Btn>
</AppBar>

<AppBar variant="outline">
	<AppBarTitle>Outline</AppBarTitle>
	<Spacer />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_bilibili_line" />
		{/snippet}
		Docs
	</Btn>
</AppBar>

<AppBar variant="text">
	<AppBarTitle>Text</AppBarTitle>
	<Spacer />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_bilibili_line" />
		{/snippet}
		Docs
	</Btn>
</AppBar>

<AppBar variant="dash">
	<AppBarTitle>Dash</AppBarTitle>
	<Spacer />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_bilibili_line" />
		{/snippet}
		Docs
	</Btn>
</AppBar>

<AppBar variant="linear">
	<AppBarTitle>Linear</AppBarTitle>
	<Spacer />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_bilibili_line" />
		{/snippet}
		Docs
	</Btn>
</AppBar>
```

</Code>

### Density

AppBar density

<Code file={AppBarDensity}>

```svelte
<script lang="ts">
	import { Btn, Divider, Icon, AppBar, AppBarTitle, Spacer } from 'mytril/components';
</script>

<AppBar density="compact">
	<AppBarTitle>Compact</AppBarTitle>
	<Spacer />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_bilibili_line" />
		{/snippet}
		Docs
	</Btn>
</AppBar>

<AppBar>
	<AppBarTitle>Default</AppBarTitle>
	<Spacer />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_bilibili_line" />
		{/snippet}
		Docs
	</Btn>
</AppBar>

<AppBar desnity="comfortable">
	<AppBarTitle>Comfortable</AppBarTitle>
	<Spacer />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_bilibili_line" />
		{/snippet}
		Docs
	</Btn>
</AppBar>
```

</Code>

### Orientation

AppBar orientation

<Code file={AppBarOrientation}>

```svelte
<script lang="ts">
	import { Btn, Icon, AppBar, Spacer } from 'mytril/components';
</script>

<AppBar orientation="vertical" style="height: 200px;">
	<Btn icon variant="text">
		<Icon icon="font:mgc_home_1_line" />
	</Btn>

	<Spacer />

	<Btn icon variant="text">
		<Icon icon="font:mgc_share_2_line" />
	</Btn>

	<Btn icon variant="text" active>
		<Icon icon="font:mgc_bilibili_line" />
	</Btn>
</AppBar>
```

</Code>

### ToolbarTitle

AppBar + AppBarTitle

<Code file={AppBarChildAppBarTitle}>

```svelte
<script lang="ts">
	import { AppBar, AppBarTitle } from 'mytril/components';
</script>

<AppBar>
	<AppBarTitle>App Bar Title</AppBarTitle>
</AppBar>
```

</Code>

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
