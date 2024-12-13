---
title: Alerts Component
description: jsp
---

# Alerts Component a comprehensive guide {#alert-component-a-comprehensive-guide}

The **Alert** component is used to convey important information to the user through the use of contextual types, icons, and colors.

## Using the Alert component {#using-the-alert-component}

Implementing the Alert in your project:

```svelte
<script>
	import { Alert } from 'mytril';
</script>

<Alert>
	<!-- your content -->
</Alert>
```

## Core Alert subcomponents {#core-alert-subcomponents}

Mytril’s Alert includes subcomponents

| Component  | Description                       |
| :--------- | :-------------------------------- |
| Alert      | The main container for your alert |
| AlertTitle | Displays the title in the Alert   |

Here’s an example of a fully implemented AppBar with a title:

```svelte
<script>
	import { Alert, AlertTitle } from 'mytril';
</script>

<Alert>
	<AlertTitle>Hello World</AlertTitle>

	Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
</Alert>
```

## Alert component properties {#alert-component-properties}

| Property  | Type    | Default   | Description                                                                                                                            |
| :-------- | :------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string  | div       | Specify a custom tag for the root element                                                                                              |
| density   | string  | default   | Resize padding on Alert component with 3 options, **compact**, **comfortable**, **default**                                            |
| dark      | boolean | false     | Force a **dark** theme                                                                                                                 |
| light     | boolean | false     | Force a **light** theme                                                                                                                |
| outlined  | boolean | false     | Add border on Alert and disabled background                                                                                            |
| closable  | boolean | false     | Add close button on Alert                                                                                                              |
| error     | boolean | false     | Add color error on Alert                                                                                                               |
| warning   | boolean | false     | Add color warning on Alert                                                                                                             |
| info      | boolean | false     | Add color info on Alert                                                                                                                |
| success   | boolean | false     | Add color success on Alert                                                                                                             |
| tonal     | boolean | false     | Variant style, add border left and background opacity                                                                                  |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Alert                                                                        |
| color     | string  | undefined | Add color scheme on your Alert, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string  | undefined | If properties outline or text is activate, this propertie is disabled                                                                  |

## AlertTitle subcomponent {#alert-subcomponent}

```svelte
<script>
	import { Alert, AlertTitle } from 'mytril';
</script>

<Alert>
	<AlertTitle>Hello World</AlertTitle>
</Alert>
```

| Property | Type   | Default | Description                               |
| :------- | :----- | :------ | :---------------------------------------- |
| tag      | string | div     | Specify a custom tag for the root element |
