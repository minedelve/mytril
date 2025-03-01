---
title:
section:
head:
  title: Dialog component
  description: Learn how to use the Dialog component in Mytril for Svelte apps. Create customizable modals, responsive modals with support for rich content, themes, and seamless integration.
features:
  legacy: 0.4.14
---

# Dialog components with Mytril {#dialog-components-with-mytril}

Mytril's Dialog component lets you present task-specific details or essential information to users. Flexible and feature-rich, the Dialog component is an essential tool for creating intuitive, responsive web applications and customizable modals for Svelte apps.

## Using the dialog component: simplified interaction design {#using-the-dialog-component}

Integrating a Dialog in your application is straightforward. The `bind:open` property enables you to control its visibility reactively:

```svelte
<script>
	import { Dialog } from 'mytril';

	const open = true;
</script>

<Dialog bind:open>
	<!-- content -->
</Dialog>
```

## Dialog component properties {#dialog-component-properties}

Mytril’s Dialog component includes various properties for customization:

| Property     | Type    | Default   | Description                                                                                                             |
| :----------- | :------ | :-------- | :---------------------------------------------------------------------------------------------------------------------- |
| open         | boolean | false     | Controls whether the dialog is open or closed. Can be bound to a variable                                               |
| classContent | string  | -         | Adds a custom class to the dialog container for advanced styling                                                        |
| dark         | boolean | false     | Forces the dialog to use the dark theme                                                                                 |
| light        | boolean | false     | Forces the dialog to use the light theme                                                                                |
| position     | string  | `center`  | Positions the dialog `top`, `center`, `bottom`.                                                                         |
| fullscreen   | boolean | false     | Displays the dialog in full-screen mode                                                                                 |
| persistent   | boolean | false     | Prevents the dialog from closing when clicking outside of it                                                            |
| size         | string  | 'default' | Sets the dialog size `xs`, `sm`, `md`, `lg`, `xl`,                                                                      |
| color        | string  | undefined | Defines the dialog's color using HEX, RGB, RGBA, X11, or [Mytril themes](/mytril/docs/customization/themes).            |
| colorText    | string  | undefined | Sets the text color within the dialog using HEX, RGB, RGBA, X11, or [Mytril themes](/mytril/docs/customization/themes). |

### Customizing Dialog appearance {#customizing-dialog-appearance}

```svelte
<script>
	import { Dialog } from 'mytril';

	const open = true;
</script>

<Dialog bind:open color="primary" position="top" size="lg">
	<!-- Dialog content -->
</Dialog>
```

## Combining dialog with other components {#combining-dialog-with-other-components}

Mytril’s modular approach allows components to work seamlessly together. For instance, you can use the Card component within a Dialog to display rich, structured content.

### Example: dialog with a card {#example-dialog-with-a-card}

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

This approach provides a clear and visually appealing way to present information or capture user input.

## Why use Mytril’s dialog component? {#why-use-mytril-dialog-component}

1. **Customizable Design:** Adjust size, color, position, and theme to match your app’s aesthetics.
2. **Flexible Positioning:** Display dialogs at the top, center, or bottom of the screen.
3. **Persistent Mode:** Prevent accidental closures for critical dialogs.
4. **Seamless Integration:** Combine with other components like **Cards** for rich content presentation.
5. **Accessibility:** Built with ARIA roles and keyboard navigation support for inclusivity.
6. **Lightweight and Performant:** Optimized for Svelte’s reactive framework, ensuring smooth interactions.
