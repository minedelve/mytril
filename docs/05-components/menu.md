---
title: Menu Component
description: jsp
---

# Menu Component a comprehensive guide {#menu-component-a-comprehensive-guide}

The **Menu** component shows a menu at the position of the element used to activate it.

## Using the Menu component {#using-the-menu-component}

Implementing the Menu in your project:

```svelte
<script>
	import { Menu } from 'mytril';
</script>

<Menu>
	<span slot="activator">
		<Btn>Button Menu</Btn>
	</span>

	<List>
		<ListItem>Item 1</ListItem>
		<ListItem>Item 2</ListItem>
		<ListItem>Item 3</ListItem>
	</List>
</Menu>
```

## Menu component properties {#menu-component-properties}

| Property  | Type    | Default   | Description                                                                                                                           |
| :-------- | :------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| tag       | string  | div       | Specify a custom tag for the root element                                                                                             |
| dark      | boolean | false     | Force a **dark** theme                                                                                                                |
| light     | boolean | false     | Force a **light** theme                                                                                                               |
| bottom    | boolean | false     | display menu on bottom element                                                                                                        |
| top       | boolean | false     | display menu on top element                                                                                                           |
| left      | boolean | false     | display menu on left element                                                                                                          |
| right     | boolean | false     | display menu on right element                                                                                                         |
| open      | boolean | false     | Open props, for open or close menu                                                                                                    |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Menu                                                                        |
| color     | string  | undefined | Add color scheme on your Menu, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string  | undefined | Add color scheme on your text Menu                                                                                                    |
