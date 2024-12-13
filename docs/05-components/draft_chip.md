---
title: Chip Component
description: jsp
---

# Chip Component a comprehensive guide {#chip-component-a-comprehensive-guide}

The **Chip** component is used to convey small pieces of information.

## Using the Chip component {#using-the-chip-component}

Implementing the Chip in your project:

```svelte
<script>
	import { Chip } from 'mytril';
</script>

<Chip>Chip</Chip>
```

## Btn component properties {#btn-component-properties}

| Property  | Type    | Default   | Description                                                                                                                           |
| :-------- | :------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| tag       | string  | div       | Specify a custom tag for the root element                                                                                             |
| dark      | boolean | false     | Force a **dark** theme                                                                                                                |
| light     | boolean | false     | Force a **light** theme                                                                                                               |
| density   | string  | default   | Resize padding on Btn component with 3 options, **compact**, **comfortable**, **default**                                             |
| label     | boolean | false     | Add small border on chip                                                                                                              |
| active    | boolean | false     | Add class active on Btn                                                                                                               |
| disabled  | boolean | false     | Disable chip action                                                                                                                   |
| outlined  | boolean | false     | Add border on Btn and disabled background                                                                                             |
| circle    | boolean | false     | Add rounded-full on icon                                                                                                              |
| closable  | boolean | false     | Add close button on Alert                                                                                                             |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Chip                                                                        |
| link      | boolean | undefined | Add class link on Chip                                                                                                                |
| color     | string  | undefined | Add color scheme on your Chip, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string  | undefined | If properties outline or text is activate, this propertie is disabled                                                                 |
| size      | string  | md        | Add size Chip for **all** breakpoints, Chip use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                 |
| sizeXs    | string  | -         | Add size Chip for **xs** breakpoint, Chip use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                   |
| sizeSm    | string  | -         | Add size Chip for **sm** breakpoint, Chip use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                   |
| sizeMd    | string  | -         | Add size Chip for **md** breakpoint, Chip use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                   |
| sizeLg    | string  | -         | Add size Chip for **lg** breakpoint, Chip use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                   |
| sizeXs    | string  | -         | Add size Chip for **xl** breakpoint, Chip use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                   |
