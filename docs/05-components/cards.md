---
title:
section:
head:
  title: Card component
  description: Learn how to use Mytril's card component to create structured, responsive layouts with headings, text, images, and actions. Optimize your Svelte projects with ease.
features:
  legacy: 0.4.14
---

# Card components with Mytril {#card-components-with-mytril}

The **Card component** in Mytril offers a modular and flexible interface to structure and display headings, text, images, icons, and actions. It’s designed to streamline your layout while keeping your code maintainable and responsive.

## Core subcomponents {#core-subcomponents}

Mytril’s card system is built on reusable subcomponents, enabling granular control over layout and design.

| Component    | Description                                                            |
| :----------- | :--------------------------------------------------------------------- |
| Card         | The container that houses all card subcomponents                       |
| CardItem     | Defines sections within the card with customizable margins and padding |
| CardTitle    | Displays the card’s title                                              |
| CardSubtitle | Adds a subtitle below the title for additional context                 |
| CardText     | Embeds descriptive text or other content inside the card               |
| CardActions  | Creates an area for buttons or other actionable elements like links    |

### Example usage {#example-usage}

```svelte
<script>
	import {
		Card,
		CardItem,
		CardTitle,
		CardSubtitle,
		CardText,
		CardActions,
		Btn,
		Spacer
	} from 'mytril';
</script>

<Card>
	<CardItem>
		<CardTitle>Title</CardTitle>
		<CardSubtitle>Subtitle</CardSubtitle>
		<CardText>Lorem Ipsum</CardText>
		<CardActions>
			<Spacer />
			<Btn>Button</Btn>
		</CardActions>
	</CardItem>
</Card>
```

## Properties overview {#properties-overview}

### Card {#card}

```svelte
<script>
	import { Card } from 'mytril';
</script>

<Card>// your content</Card>
```

| Property  | Type    | Default   | Description                                                                                                                                 |
| :-------- | :------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| tag       | string  | div       | Custom tag for the root element                                                                                                             |
| dark      | boolean | false     | Force a **dark** theme                                                                                                                      |
| light     | boolean | false     | Force a **light** theme                                                                                                                     |
| active    | boolean | false     | Adds hover/active effects                                                                                                                   |
| href      | string  | undefined | Converts the card into an anchor element                                                                                                    |
| outlined  | boolean | false     | Adds a border and removes the background                                                                                                    |
| text      | boolean | false     | Removes both background and border styles                                                                                                   |
| disabled  | boolean | false     | Disables interaction styles for button or anchor cards                                                                                      |
| rounded   | string  | undefined | Adds [border radius](/mytril/docs/styles/border-radius) to the Card                                                                         |
| color     | string  | undefined | Sets the card’s background color. Accepts **HEX**, **RGB**, **RGBA**, **X11**, or [Mytril themes](/mytril/docs/customization/themes) colors |
| colorText | string  | undefined | Sets the text color. Ignored when `outline` or `text` is active                                                                             |

### CardItem {#card-item}

```svelte
<script>
	import { Card, CardItem } from 'mytril';
</script>

<Card>
	<CardItem>// your content</CardItem>
</Card>
```

CardItem has **3** slots for display your content

| Slot    | Description                     |
| :------ | :------------------------------ |
| default | Main content slot               |
| prepend | Content to display at the start |
| append  | Content to display at the end   |

### CardTitle {#card-title}

```svelte
<script>
	import { Card, CardItem, CardTitle } from 'mytril';
</script>

<Card>
	<CardItem>
		<CardTitle>Title</CardTitle>
	</CardItem>
</Card>
```

| Property | Type   | Default | Description                                    |
| :------- | :----- | :------ | :--------------------------------------------- |
| tag      | string | div     | Specify a custom tag used on the root element. |

### CardSubtitle {#card-subtitle}

```svelte
<script>
	import { Card, CardItem, CardTitle, CardSubtitle } from 'mytril';
</script>

<Card>
	<CardItem>
		<CardTitle>Title</CardTitle>
		<CardSubtitle>SubTitle</CardSubtitle>
	</CardItem>
</Card>
```

| Property | Type             | Default   | Description                                    |
| :------- | :--------------- | :-------- | :--------------------------------------------- |
| tag      | string           | div       | Specify a custom tag used on the root element. |
| opacity  | number or string | undefined | Add opacity on content.                        |

### CardText {#card-text}

```svelte
<script>
	import { Card, CardItem, CardTitle, CardSubtitle, CardText } from 'mytril';
</script>

<Card>
	<CardItem>
		<CardTitle>Title</CardTitle>
		<CardSubtitle>SubTitle</CardSubtitle>
		<CardText>// your content</CardText>
	</CardItem>
</Card>
```

| Property | Type             | Default   | Description                                    |
| :------- | :--------------- | :-------- | :--------------------------------------------- |
| tag      | string           | div       | Specify a custom tag used on the root element. |
| opacity  | number or string | undefined | Add opacity on content.                        |

### CardActions {#card-actions}

```svelte
<script>
	import { Card, CardItem, CardTitle, CardSubtitle, CardText, CardActions } from 'mytril';
</script>

<Card>
	<CardItem>
		<CardTitle>Title</CardTitle>
		<CardSubtitle>SubTitle</CardSubtitle>
		<CardText>// your content</CardText>
		<CardActions>// actions area</CardActions>
	</CardItem>
</Card>
```

### Why use Mytril’s card component? {#why-use-mytril-card-component}

- **Simplified development**: predefined components minimize custom CSS requirements, enabling rapid prototyping
- **Responsive design**: automatic adaptation to various screen sizes maintains UI consistency
- **Customizable**: rich properties and slots enable precise adjustments for specific needs
- **Accessibility**: semantic HTML foundation ensures strong accessibility and SEO performance

Mytril's card component delivers a clean, scalable foundation for modern web applications, elevating both development efficiency and user experience.
