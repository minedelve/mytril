---
title: Dialog with Mytril
description: jsp
---

# Dialog components with Mytril {#dialog-components-with-mytril}

The Dialog component informs a user about a specific task and may contain critical information

## Use Dialog on your app {#use-dialog-on-your-app}

```svelte
<script>
	import { Dialog } from 'mytril';

	const open = true;
</script>

<Dialog bind:open>
	<!-- content -->
</Dialog>
```

### Properties of Dialog component {#properties-of-dialog-component}

| Property     | Type    | Default   | Description                                                                                                                               |
| :----------- | :------ | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| open         | boolean | false     | Open or Close dialog with binding value.                                                                                                  |
| classContent | string  | -         | Add custom class on Dialog container                                                                                                      |
| dark         | boolean | false     | Force color theme on **dark**.                                                                                                            |
| light        | boolean | false     | Force color theme on **light**.                                                                                                           |
| position     | string  | `center`  | Change position Dialog on `top`, `center`, `bottom`.                                                                                      |
| fullscreen   | boolean | false     | Dialog display full screen on your app                                                                                                    |
| persistent   | boolean | false     | Block click outside Dialog                                                                                                                |
| size         | string  | 'default' | Add size on Dialog with properties `xs`, `sm`, `md`, `lg`, `xl`,                                                                          |
| color        | string  | undefined | Add color scheme on your card, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes).    |
| colorText    | string  | undefined | Add color scheme on your content, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes). |

### Combine Dialog with Card component Mytril {#combine-dialog-with-card-component-mytril}

With Mytril, you can use composents to integrate them as children of a larger component. In this example, we combine Dialog and Card to create a dialog that displays a message on your screen. Take advantage of Dialog's functionality and Cards' component options

```svelte
<script>
	import { Dialog, Card, CardItem, CardTitle, CardSubtitle, CardText, CardActions } from 'mytril';

	const open = true;
</script>

<Dialog bind:open>
	<Card>
		<CardItem>
			<CardTitle>Title</CardTitle>
			<CardSubtitle>SubTitle</CardSubtitle>
			<CardText>// your content</CardText>
			<CardActions>// actions area</CardActions>
		</CardItem>
	</Card>
</Dialog>
```
