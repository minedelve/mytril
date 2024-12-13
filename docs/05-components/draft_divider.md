---
title: Dividers component
description: jsp
---

# Divider component with Mytril {#divider-component-with-mytril}

The `Divider` component is used to separate sections of lists or layouts.

## Using the Divider {#using-the-divider}

```svelte
<script>
	import { Divider } from 'mytril';
</script>

<Divider />
```

### Divider component properties {#divider-component-properties}

| Property  | Type             | Default   | Description                                                                                                                          |
| :-------- | :--------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string           | div       | Specify a custom tag used on the root element.                                                                                       |
| dark      | boolean          | false     | Force color theme on **dark**                                                                                                        |
| light     | boolean          | false     | Force color theme on **light**                                                                                                       |
| inset     | boolean          | false     | Update size divider on inner area                                                                                                    |
| thickness | string or number | undefined | Add custom size                                                                                                                      |
| vertical  | boolean          | false     | Change orientation Divider                                                                                                           |
| opacity   | string           | undefined | Change opacity on Divider                                                                                                            |
| color     | string           | undefined | Sets the background color. Accepts **HEX**, **RGB**, **RGBA**, **X11**, or [Mytril themes](/mytril/docs/customization/themes) colors |

**Divider vertical**

```svelte
<script>
	import { Divider } from 'mytril';
</script>

<Divider vertical />
```
