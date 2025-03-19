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
	import ToolbarHead from '$content/mytril/examples/toolbar-head.svelte';
	import ToolbarVariant from '$content/mytril/examples/toolbar-variant.svelte';
	import ToolbarDensity from '$content/mytril/examples/toolbar-density.svelte';
	import ToolbarOrientation from '$content/mytril/examples/toolbar-orientation.svelte';
	import ToolbarChildTooltbarTitle from '$content/mytril/examples/toolbar-child--tooltbar-title.svelte';
</script>

<Code previewOnly file={ToolbarHead}></Code>

## Core Toolbar subcomponents

| Component    | Description                               |
| :----------- | :---------------------------------------- |
| Toolbar      | The main container for your tools actions |
| ToolbarTitle | Displays the title in the Toolbar         |

## Properties toolbar

### Variant

Toolbar variant style

<Code file={ToolbarVariant}>

```svelte
<script lang="ts">
	import { Btn, Divider, Icon, Toolbar } from 'mytril/components';
</script>

<Toolbar>
	<Btn variant="text">Default</Btn>
	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_large_arrow_down_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_right_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_up_fill" />
	</Btn>
</Toolbar>

<Toolbar variant="outline">
	<Btn variant="text">Outline</Btn>
	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_large_arrow_down_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_right_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_up_fill" />
	</Btn>
</Toolbar>

<Toolbar variant="text">
	<Btn variant="text">Text</Btn>
	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_large_arrow_down_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_right_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_up_fill" />
	</Btn>
</Toolbar>

<Toolbar variant="dash">
	<Btn variant="text">Dash</Btn>
	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_large_arrow_down_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_right_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_up_fill" />
	</Btn>
</Toolbar>
```

</Code>

### Density

Toolbar sizing

<Code file={ToolbarDensity}>

```svelte
<script lang="ts">
	import { Btn, Divider, Icon, Toolbar } from 'mytril/components';
</script>

<Toolbar density="compact">
	<Btn variant="text">Compact</Btn>
	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_large_arrow_down_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_right_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_up_fill" />
	</Btn>
</Toolbar>

<Toolbar>
	<Btn variant="text">Default</Btn>
	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_large_arrow_down_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_right_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_up_fill" />
	</Btn>
</Toolbar>

<Toolbar density="comfortable">
	<Btn variant="text">Comfortable</Btn>
	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_large_arrow_down_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_right_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_large_arrow_up_fill" />
	</Btn>
</Toolbar>
```

</Code>

### Orientation

Toolbar vertical

<Code file={ToolbarOrientation}>

```svelte
<script lang="ts">
	import { Btn, Divider, Icon, Toolbar } from 'mytril/components';
</script>

<Toolbar variant="outline" style="background-color: var(--color-surface)" orientation="vertical">
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_bold_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_italic_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_strikethrough_fill" />
	</Btn>

	<Divider style="margin-top: 0.25rem; margin-bottom: 0.25rem;" />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_align_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_align_justify_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_align_right_fill" />
	</Btn>
</Toolbar>
```

</Code>

### ToolbarTitle

Toolbar + ToolbarTitle

<Code file={ToolbarChildTooltbarTitle}>

```svelte
<script lang="ts">
	import { Toolbar, ToolbarTitle } from 'mytril/components';
</script>

<Toolbar variant="outline" style="background-color: var(--color-surface); width: 100%;">
	<ToolbarTitle>Title</ToolbarTitle>
</Toolbar>
```

</Code>

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
