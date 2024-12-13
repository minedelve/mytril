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
