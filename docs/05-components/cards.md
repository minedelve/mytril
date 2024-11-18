---
title: Cards with Mytril
description: jsp
---

# Card components with Mytril {#card-components-with-mytril}

The Card component that provides a simple interface for headings, text, images, icons, and more.

## Core Cards sub components {#core-cards-sub-components}

| Component    | Description                                                                        |
| :----------- | :--------------------------------------------------------------------------------- |
| Card         | The main element to house card sub components.                                     |
| CardItem     | Used to defined, area for display content on card with **margin** and **padding**. |
| CardTitle    | Add title on your card.                                                            |
| CardSubtitle | Add subtitle on your card.                                                         |
| CardText     | Add text and content on your card.                                                 |
| CardActions  | Add area for display actions ( Btn for example) on your card.                      |

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

### Properties of each cards component {#properties-of-each-cards-component}

Each card component has properties that allow precise control of the layout:

**Card**

```svelte
<script>
	import { Card } from 'mytril';
</script>

<Card>// your content</Card>
```

| Property  | Type    | Default   | Description                                                                                                                                                                                                                    |
| :-------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string  | div       | Specify a custom tag used on the root element.                                                                                                                                                                                 |
| dark      | boolean | false     | Force color theme on **dark**.                                                                                                                                                                                                 |
| light     | boolean | false     | Force color theme on **light**.                                                                                                                                                                                                |
| active    | boolean | false     | Add effect hover/active on this card.                                                                                                                                                                                          |
| href      | string  | undefined | Add anchor on your Card.                                                                                                                                                                                                       |
| outlined  | boolean | false     | Add border on your Card and delete background.                                                                                                                                                                                 |
| text      | boolean | false     | Remove background and border on your Card.                                                                                                                                                                                     |
| disabled  | boolean | false     | Disabled button and anchor card and style disabled.                                                                                                                                                                            |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Card                                                                                                                                                                 |
| color     | string  | undefined | Add color scheme on your card, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes). If properties outline or text is activate, color is property used border and text color |
| colorText | string  | undefined | Add color scheme on your content, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes). If properties outline or text is activate, this propertie is disabled                |

**CardItem**

```svelte
<script>
	import { Card, CardItem } from 'mytril';
</script>

<Card>
	<CardItem>// your content</CardItem>
</Card>
```

CardItem has **3** slots for display your content

| Slot    | Description                         |
| :------ | :---------------------------------- |
| default | Is default slot for display content |
| prepend | Add content on start                |
| append  | Add content on end                  |

**CardTitle**

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

**CardSubtitle**

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

**CardText**

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

**CardActions**

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
