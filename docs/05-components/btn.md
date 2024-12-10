---
title: Btn Component
description: jsp
---

# Btn Component a comprehensive guide {#btn-component-a-comprehensive-guide}

The **Btn** component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.

## Using the Btn component {#using-the-btn-component}

Implementing the Btn in your project:

```svelte
<script>
	import { Btn } from 'mytril';
</script>

<Btn>Button</Btn>
```

## Btn component properties {#btn-component-properties}

| Property  | Type    | Default   | Description                                                                                                                          |
| :-------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string  | div       | Specify a custom tag for the root element                                                                                            |
| dark      | boolean | false     | Force a **dark** theme                                                                                                               |
| light     | boolean | false     | Force a **light** theme                                                                                                              |
| density   | string  | default   | Resize padding on Btn component with 3 options, **compact**, **comfortable**, **default**                                            |
| block     | boolean | false     | Add class _block_ on Btn component for use all space                                                                                 |
| disabled  | boolean | false     | Disable chip action                                                                                                                  |
| active    | boolean | false     | Add class active on Btn                                                                                                              |
| square    | boolean | false     | add small radius on icon Btn                                                                                                         |
| outlined  | boolean | false     | Add border on Btn and disabled background                                                                                            |
| circle    | boolean | false     | Add rounded-full on icon                                                                                                             |
| text      | boolean | false     | disabled background and border on Btn                                                                                                |
| error     | boolean | false     | Add color error on Btn                                                                                                               |
| warning   | boolean | false     | Add color warning on Btn                                                                                                             |
| info      | boolean | false     | Add color info on Btn                                                                                                                |
| success   | boolean | false     | Add color success on Btn                                                                                                             |
| icon      | boolean | false     | Btn style for display icon only, It's recomanded to use [Icon component](/mytril/docs/components/icons)                              |
| wide      | boolean | false     | Display fixed width 16rem on Btn                                                                                                     |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Btn                                                                        |
| link      | boolean | undefined | Add class link on Btn                                                                                                                |
| color     | string  | undefined | Add color scheme on your Btn, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string  | undefined | If properties outline or text is activate, this propertie is disabled                                                                |
| size      | string  | md        | Add size Btn for **all** breakpoints, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                  |
| sizeXs    | string  | -         | Add size Btn for **xs** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeSm    | string  | -         | Add size Btn for **sm** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeMd    | string  | -         | Add size Btn for **md** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeLg    | string  | -         | Add size Btn for **lg** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeXs    | string  | -         | Add size Btn for **xl** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
