---
title: Add tooltip component on your actions elements
section: Tooltip
head:
  title: Tooltip Component
  description: Use Mytril Tooltip, a lightweight Svelte UI component. Add hover or focus-based tooltips on buttons, icons, and elements for better user experiences.
related:
  - /mytril/docs/components/btn
  - /mytril/docs/components/chip
  - /mytril/docs/components/icons
features:
  github: 05-components/tooltip.md
  bug: 'Tooltip component'
  feature: 'Tooltip component'
---

<script>
  	import Code from "$components-docs/code.svelte"
	import TooltipHead from '$content/mytril/examples/tooltip-head.svelte';
	import TooltipLocation from '$content/mytril/examples/tooltip-location.svelte';
	import TooltipLabel from '$content/mytril/examples/tooltip-label.svelte';
	import TooltipVariant from '$content/mytril/examples/tooltip-variant.svelte';
	import TooltipDensity from '$content/mytril/examples/tooltip-density.svelte';
	import TooltipSnippetTooltip from '$content/mytril/examples/tooltip-snippet-tooltip.svelte';
</script>

<Code previewOnly file={TooltipHead}></Code>

The tooltip component provides contextual information for interactive elements like buttons, icons, and chips in your Svelte or SvelteKit project. It's lightweight, customizable, and fully integrated into Mytril design system.

With its four configurable functions, the Mytril tooltip component is both versatile and easy to implement, making it an ideal addition and easy integred to your project.

## Properties tooltip

### Label

label is the content displayed inside the tooltip. This can be text or dynamic Svelte-bound variables.

<Code file={TooltipLabel}>

```svelte
<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<Tooltip label="Hello world! It's a tooltip">
	<Btn>Discover Tooltip power</Btn>
</Tooltip>
```

</Code>

### Location

Control the tooltip's position use `location` property to set where the tooltip will appear relative to the element. Available positions: `top`, `bottom`, `left`, and `right`.

<Code file={TooltipLocation}>

```svelte
<script lang="ts">
	import { Btn, Icon, Tooltip } from 'mytril/components';
</script>

<Tooltip label="Tooltip top" location="top">
	<Btn>
		Top
		{#snippet append()}
			<Icon icon="font:mgc_arrow_up_fill" />
		{/snippet}
	</Btn>
</Tooltip>

<Tooltip label="Tooltip bottom" location="bottom">
	<Btn>
		Bottom
		{#snippet append()}
			<Icon icon="font:mgc_arrow_down_fill" />
		{/snippet}
	</Btn>
</Tooltip>

<Tooltip label="Tooltip left" location="left">
	<Btn>
		Left
		{#snippet append()}
			<Icon icon="font:mgc_arrow_left_fill" />
		{/snippet}
	</Btn>
</Tooltip>

<Tooltip label="Tooltip right" location="right">
	<Btn>
		Right
		{#snippet append()}
			<Icon icon="font:mgc_arrow_right_fill" />
		{/snippet}
	</Btn>
</Tooltip>
```

</Code>

### Variant

Tooltip can use variant styles such as **default** or **arrow**.

<Code file={TooltipVariant}>

```svelte
<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<Tooltip label="Wow it's a default style tootlip">
	<Btn>Default</Btn>
</Tooltip>

<Tooltip label="OMG arrow discover !" variant="arrow">
	<Btn>Arrow</Btn>
</Tooltip>
```

</Code>

### Density

Change the padding/spacing inside the tooltip using the `density` option.
Options: `comfortable`, `default` or `compact` for tighter spaces.

<Code file={TooltipDensity}>

```svelte
<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<Tooltip label="Small tooltip" density="compact">
	<Btn>Compact</Btn>
</Tooltip>

<Tooltip label="Default style">
	<Btn>Default</Btn>
</Tooltip>

<Tooltip label="It's large !" density="comfortable">
	<Btn>Comfortable</Btn>
</Tooltip>
```

</Code>

## Snippet tooltip

The snippet tooltip lets you display complex personalized content. It replaces the label property, which displays a simple string.

> When you use this snippet, the tooltip will be automatically pre-rendered to ensure your content is rendered correctly.

<Code file={TooltipSnippetTooltip}>

```svelte
<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<Tooltip>
	<Btn>See my message</Btn>

	{#snippet tooltip()}
		<div style="max-width: 200px;">
			<p>Tooltip custom content</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio, dignissimos
				sapiente error temporibus dolorum ipsam nobis harum nulla facere tempore perferendis ullam
				ut quibusdam quisquam corrupti aut exercitationem quasi!
			</p>
		</div>
	{/snippet}
</Tooltip>
```

</Code>

## Best practices for tooltips

- 🔹**Don’t overload tooltips**: tooltips should be concise, providing only essential information.
- 🔹**Use for non-obvious elements**: if the action is self-explanatory, avoid using a tooltip.
- 🔹**Test for accessibility**: ensure keyboard users can trigger the tooltip via focus and that screen readers announce the content.

## Next Steps

1. Start exploring more **components** like Buttons or [Icons](/mytril/docs/components/icons).
2. Combine `Tooltips` with other components for better interactivity.
3. Custom themes? Check out the [Theming Guide](/mytril/docs/customization/themes).

## Overview for tooltip component

The **tooltip** component in Mytril enables developers to display contextual labels when users hover, focus, or interact with interface elements such as buttons, icons, or chips. With accessible settings, dynamic theming, and a lightweight approach, tooltips in Mytril seamlessly enhance any UI.

Ideal for **modern design systems**, tooltips ensure that users can interact intuitively with your app while maintaining visual consistency.

**Key features**

- 🔹**Placement options**: adjust the position of the Tooltip (`top`, `bottom`, `left`, `right`)
- 🔹**Customizable density**: choose between `comfortable`, `default` or `compact` spacing
- 🔹**Built for Svelte**: reactive and SSR-compatible for **SvelteKit**
- 🔹**Variants**: apply different styles like `default` or `arrow`
- 🔹**Accessible**: ARIA-ready for screen readers

{#snippet properties()}

## API reference in Mytril tooltip component

Below is the complete API specification for the tooltip component. Each property is well-documented to simplify implementation and configuration.

### Properties for tooltip

| Property             | Type            | Default     | Description                                                                                                                |
| :------------------- | :-------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------- |
| **open** $bindable() | `boolean`       | `false`     | Controls the open state of the Tooltip component. Useful for programmatic state management.component.                      |
| **label**            | `string`        | `undefined` | Defines the content displayed inside the tooltip.                                                                          |
| **dark**             | `boolean`       | `false`     | Forces a `dark` color scheme on the tooltip.                                                                               |
| **light**            | `boolean`       | `false`     | Forces a `light` color scheme on the tooltip.                                                                              |
| **rounded**          | `enum` `string` | `undefined` | Sets the shape radius of the Tooltip. Choose from predefined values (`xs`, `sm`, `md`, `lg`, `xl`) or custom values.       |
| **color**            | `enum` `string` | `undefined` | Customizes the content text color using `X11 color names`, `HEX`, `RGB`, `RGBA`, `HSL`, or `Mytril theme colors`.          |
| **background**       | `enum` `string` | `undefined` | Customizes the tooltip’s background color using `X11 color names`, `HEX`, `RGB`, `RGBA`, `HSL`, or `Mytril theme colors`.  |
| **location**         | `enum`          | `bottom`    | Sets the tooltip’s position (`top`, `bottom`, `left`, `right`). Adapts dynamically unless **avoidCollisions** is disabled. |
| **delayDuration**    | `number`        | `850`       | Sets the delay (in milliseconds) before the tooltip appears when hovering or focusing on the trigger element.              |
| **density**          | `enum`          | `default`   | Adjusts space padding inside the tooltip’s content area (`default`, `comfortable`, `compact`).                             |
| **variant**          | `enum`          | `undefined` | Set a different style (`arrow`) for tooltip rendering.                                                                     |
| **disabled**         | `boolean`       | `false`     | Disables the functionality of the tooltip when true.                                                                       |
| **avoidCollisions**  | `boolean`       | `true`      | Ensures the tooltip position automatically adjusts to avoid clipping on the window edges.                                  |
| **forceMount**       | `boolean`       | `false`     | Pre-renders tooltips for better SEO performance (e.g., for dynamic content like Snippets or large images).                 |

### Snippet references

Here are snippets for integrating activators and custom tooltip content into your application:

| Snippet      | Type      | Properties | Description                                                                           |
| :----------- | :-------- | :--------- | :------------------------------------------------------------------------------------ |
| **children** | `Snippet` | `nothing`  | Display activator element for tooltip.                                                |
| **tooltip**  | `Snippet` | `nothing`  | Allows custom content inside the tooltip. Overrides the `label` property if provided. |

### Styles references

Customize tooltips with these CSS variables and properties, ensuring effortless alignment with your design system.

| Variables        | Default                      | Description                      |
| :--------------- | :--------------------------- | :------------------------------- |
| **tooltip-c**    | `--color-on-surface-variant` | Property CSS `color`.            |
| **tooltip-bg**   | `--color-surface-variant`    | Property CSS `background-color`. |
| **tooltip-br**   | `--radius-md`                | Property CSS `border-radius`.    |
| **border-size**  | `thin`                       | Property CSS `border-size`.      |
| **border-color** | `--color-surface-variant`    | Property CSS `border-color`.     |
| **font-size**    | `0.875rem`                   | Property CSS `font-size`.        |

{/snippet}
