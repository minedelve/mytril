---
title: Tooltip component
description: jsp
---

# Tooltip component with Mytril {#tooltip-component-with-mytril}

Tooltip is a hover element

## Using the Tooltip {#using-the-tooltip}

```svelte
<script>
	import { Tooltip, Btn } from 'mytril';
</script>

<Tooltip text='hello world'>
    <Btn>Button</Btn>
</Toolip>
```

### Tooltip component properties {#tooltip-component-properties}

| Property  | Type    | Default   | Description                                                                                                                          |
| :-------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| open      | boolean | false     | Force open tooltip                                                                                                                   |
| dark      | boolean | false     | Force color theme on **dark**                                                                                                        |
| light     | boolean | false     | Force color theme on **light**                                                                                                       |
| text      | string  | undefined | Add content on tooltip                                                                                                               |
| bottom    | boolean | false     | display tooltip on bottom element                                                                                                    |
| top       | boolean | false     | display tooltip on top element                                                                                                       |
| left      | boolean | false     | display tooltip on left element                                                                                                      |
| right     | boolean | false     | display tooltip on right element                                                                                                     |
| dense     | boolean | false     | Change padding tooltip                                                                                                               |
| opacity   | string  | undefined | Change opacity on Divider                                                                                                            |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Tooltip                                                                    |
| color     | string  | undefined | Sets the background color. Accepts **HEX**, **RGB**, **RGBA**, **X11**, or [Mytril themes](/mytril/docs/customization/themes) colors |
| colorText | string  | undefined | Sets text color                                                                                                                      |

**Tooltip slot**

```svelte
<script>
	import { Tooltip, Btn } from 'mytril';
</script>

<Tooltip>
    <Btn>Button</Btn>

    <div slot="tooltip">
        Hello world
    </div>
</Toolip>
```

### API Reference

| Property             | Type            | Default     | Description                                                                                                                                                            |
| :------------------- | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **open** $bindable() | `boolean`       | `false`     | The open state of the tooltip component.                                                                                                                               |
| **label**            | `string`        | `undefined` | The props content to render in tooltip.                                                                                                                                |
| **dark**             | `boolean`       | `false`     | Force color scheme `dark` on tooltip.                                                                                                                                  |
| **light**            | `boolean`       | `false`     | Force color scheme `light` on tooltip.                                                                                                                                 |
| **rounded**          | `enum` `string` | `undefined` | Define shape radius on tooltip with predined variant `xs`,`sm`,`md`,`lg`,`xl` or your custom value.                                                                    |
| **color**            | `enum` `string` | `undefined` | Customize color content in tooltip with `x11 color`,`hex`,`rgb`,`rgba`,`hsl` or `mytril theme color`.                                                                  |
| **background**       | `enum` `string` | `undefined` | Customize background color content in tooltip with `x11 color`,`hex`,`rgb`,`rgba`,`hsl` or `mytril theme color`.                                                       |
| **location**         | `enum`          | `bottom`    | Set position tooltip with position element, but the position is calculated for adapative position with collisions except if you activate **avoidCollisions** property. |
| **delayDuration**    | `number`        | `850`       | The amount of time in milliseconds to delay opening the tooltip when hovering over the trigger.                                                                        |
| **density**          | `enum`          | `default`   | Customize padding tooltip content with `default`, `compact`, `comfortable` properties.                                                                                 |
| **variant**          | `enum`          | `undefined` | Set a different style for tooltip rendering.                                                                                                                           |
| **disabled**         | `boolean`       | `false`     | Whether or not the tooltip is disabled.                                                                                                                                |
| **avoidCollisions**  | `boolean`       | `true`      | When true, this option is based on the **location** property, and adapts it to the border edges to avoid collisions.                                                   |

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
