---
title: Add tooltip on you action elements.
section: Tooltip
head:
  title: Tooltip Component
  description: jsp.
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

<Code previewOnly file={TooltipHead}>demo</Code>

### Label

<Code file={TooltipLabel}>demo</Code>

### Location

<Code file={TooltipLocation}>demo</Code>

### Variant

<Code file={TooltipVariant}>demo</Code>

### Density

<Code file={TooltipDensity}>demo</Code>

### Snippet Tooltip

<Code file={TooltipSnippetTooltip}>demo</Code>

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
