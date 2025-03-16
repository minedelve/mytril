---
title: Add tooltip on you action elements.
section: Tooltip
head:
  title: Mytril Tooltip component
  description: The Tooltip component provides contextual information for interactive elements like buttons, icons, and chips in your Svelte or SvelteKit project. It's lightweight, customizable, and fully integrated into Mytril's design system.
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

The Tooltip component comes with **four main configurable features** that make it versatile and easy to integrate in any project:

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

Tooltips can use variant styles such as **default** or **arrow**.

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

### Snippet Tooltip

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

- **Don’t overload tooltips**: Tooltips should be concise, providing only essential information.
- **Use for non-obvious elements**: If the action is self-explanatory, avoid using a tooltip.
- **Combine with reactivity**: Use **Svelte reactivity** to dynamically render tooltips when necessary.
- **Test for accessibility**: Ensure keyboard users can trigger the tooltip via focus and that screen readers announce the content.

## Next Steps

1. Start exploring more **components** like [Buttons](https://www.notion.so/button) or [Icons](https://www.notion.so/icon).
2. Combine `Tooltips` with other components for better interactivity.
3. Custom themes? Check out the [Theming Guide](https://www.notion.so/theming).

Overview: Tooltip component

The **Tooltip** component in Mytril enables developers to display contextual labels when users hover, focus, or interact with interface elements such as buttons, icons, or chips. With accessible settings, dynamic theming, and a lightweight approach, tooltips in Mytril seamlessly enhance any UI.

Ideal for **modern design systems**, tooltips ensure that users can interact intuitively with your app while maintaining visual consistency.

## Key features

- **Placement options**: adjust the position of the Tooltip (`top`, `bottom`, `left`, `right`)
- **Customizable density**: choose between `comfortable` or `compact` spacing
- **Built for Svelte**: reactive and SSR-compatible for **SvelteKit**
- **Variants**: apply different styles like `default`, `success`, or `error`
- **Accessible**: ARIA-ready for screen readers

{#snippet properties()}

### API Reference

| Property             | Type            | Default     | Description                                                                                                                                                               |
| :------------------- | :-------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **open** $bindable() | `boolean`       | `false`     | The open state of the tooltip component.                                                                                                                                  |
| **label**            | `string`        | `undefined` | The props content to render in tooltip.                                                                                                                                   |
| **dark**             | `boolean`       | `false`     | Force color scheme `dark` on tooltip.                                                                                                                                     |
| **light**            | `boolean`       | `false`     | Force color scheme `light` on tooltip.                                                                                                                                    |
| **rounded**          | `enum` `string` | `undefined` | Define shape radius on tooltip with predined variant `xs`,`sm`,`md`,`lg`,`xl` or your custom value.                                                                       |
| **color**            | `enum` `string` | `undefined` | Customize color content in tooltip with `x11 color`,`hex`,`rgb`,`rgba`,`hsl` or `mytril theme color`.                                                                     |
| **background**       | `enum` `string` | `undefined` | Customize background color content in tooltip with `x11 color`,`hex`,`rgb`,`rgba`,`hsl` or `mytril theme color`.                                                          |
| **location**         | `enum`          | `bottom`    | Set position tooltip with position element, but the position is calculated for adapative position with collisions except if you activate **avoidCollisions** property.    |
| **delayDuration**    | `number`        | `850`       | The amount of time in milliseconds to delay opening the tooltip when hovering over the trigger.                                                                           |
| **density**          | `enum`          | `default`   | Customize padding tooltip content with `default`, `compact`, `comfortable` properties.                                                                                    |
| **variant**          | `enum`          | `undefined` | Set a different style for tooltip rendering.                                                                                                                              |
| **disabled**         | `boolean`       | `false`     | Whether or not the tooltip is disabled.                                                                                                                                   |
| **avoidCollisions**  | `boolean`       | `true`      | When true, this option is based on the **location** property, and adapts it to the border edges to avoid collisions.                                                      |
| **forceMount**       | `boolean`       | `false`     | When true, this option activates tooltip **pre-rendering**, to ensure relative size (like images) and also SEO of tooltip content. If true if you use Snippet **tooltip** |

### Snippet References

| Snippet      | Type      | Properties | Description                                                        |
| :----------- | :-------- | :--------- | :----------------------------------------------------------------- |
| **children** | `Snippet` | `nothing`  | Display activator element for tooltip.                             |
| **tooltip**  | `Snippet` | `nothing`  | Display custom content on tooltip, **label** property has ignored. |

### Styles References

| Variables        | Default                      | Description                      |
| :--------------- | :--------------------------- | :------------------------------- |
| **tooltip-c**    | `--color-on-surface-variant` | Property CSS `color`.            |
| **tooltip-bg**   | `--color-surface-variant`    | Property CSS `background-color`. |
| **tooltip-br**   | `--radius-md`                | Property CSS `border-radius`.    |
| **border-size**  | `thin`                       | Property CSS `border-size`.      |
| **border-color** | `--color-surface-variant`    | Property CSS `border-color`.     |
| **font-size**    | `0.875rem`                   | Property CSS `font-size`.        |

{/snippet}
