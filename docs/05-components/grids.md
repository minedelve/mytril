---
title: Grids
description: jsp
---

# Grids components with Mytril {#grids-components-with-mytril}

**Mytril comes with a 12 point grid system built using flexbox.**

The grid is used to create specific layouts within the content of your application. By default, it contains **7** types of breakpoints which are used to target specific screen sizes or orientations: **default**, **xs**, **sm**, **md**, **lg**, **xl** and **Xxl**. These breakpoints are defined below in the [Breakpoints](/mytril/docs/customization/breakpoints) table and can be modified by customizing it via `plugins/mytril.(js|ts)`.

## Sub components {#sub-components}

| Component | Description                               |
| :-------- | :---------------------------------------- |
| Container | The container component.                  |
| Row       | Sub-component used to create rows.        |
| Col       | Sub-component used to create columns.     |
| Spacer    | A component often used in grid scenarios. |

```svelte
<script>
	import { Container, Row, Col } from 'mytril';
</script>

<Container>
	<Row>
		<Col>1</Col>
		<Col>2</Col>
		<Col>3</Col>
		<Col>4</Col>
		<Col>5</Col>
		<Col>6</Col>
		<Col>7</Col>
		<Col>8</Col>
		<Col>9</Col>
		<Col>10</Col>
		<Col>11</Col>
		<Col>12</Col>
	</Row>
</Container>
```

## Custom grids {#custom-grids}

With `Col` de Mytril, you can customize your grid following the breakpoints.

```svelte
<script>
	import { Container, Row, Col } from 'mytril';
</script>

<Container>
	<Row dense>
		<Col cols="12" lg="4">1</Col>
		<Col cols="12" md="6" lg="2">2</Col>
		<Col cols="12" md="6" lg="2">3</Col>
		<Col cols="12" lg="4">4</Col>
	</Row>
</Container>
```

### Props {#props}

**Container**

```svelte
<script>
	import { Container } from 'mytril';
</script>

<Container>// your content</Container>
```

| Property   | Type    | Default | Description                                               |
| :--------- | :------ | :------ | :-------------------------------------------------------- |
| tag        | string  | div     | Specify a custom tag used on the root element.            |
| fluid      | boolean | false   | Removes maximum-width size breakpoints.                   |
| fillHeight | boolean | false   | The class fill-height applies height: 100% to an element. |

**Row**

```svelte
<script>
	import { Container, Row } from 'mytril';
</script>

<Container>
	<Row>// your content</Row>
</Container>
```

| Property                       | Type    | Default   | Description                                                                            |
| :----------------------------- | :------ | :-------- | :------------------------------------------------------------------------------------- |
| tag                            | string  | div       | Specify a custom tag used on the root element.                                         |
| dense                          | boolean | false     | Reduces the gutter between `Col`.                                                      |
| noGutters                      | boolean | false     | Removes the gutter between `Col`.                                                      |
| align                          | string  | undefined | Applies the [align-items](/mytril/docs/styles/flex#align-items) css property.          |
| alignXs                        | string  | undefined | Changes the **align-items** property on extra small and greater breakpoints.           |
| alignSm                        | string  | undefined | Changes the **align-items** property on small large and greater breakpoints.           |
| alignMd                        | string  | undefined | Changes the **align-items** property on medium and greater breakpoints.                |
| alignLg                        | string  | undefined | Changes the **align-items** property on large and greater breakpoints.                 |
| alignXl                        | string  | undefined | Changes the **align-items** property on extra large and greater breakpoints.           |
| alignXxl                       | string  | undefined | Changes the **align-items** property on extra extra large and greater breakpoints.     |
| alignContent                   | string  | undefined | Applies the [align-content](/mytril/docs/styles/flex#align-content) css property.      |
| alignContentXs                 | string  | undefined | Changes the **align-content** property on extra small and greater breakpoints.         |
| alignContentSm                 | string  | undefined | Changes the **align-content** property on small and greater breakpoints.               |
| alignContentMd                 | string  | undefined | Changes the **align-content** property on medium and greater breakpoints.              |
| alignContentLg                 | string  | undefined | Changes the **align-content** property on large and greater breakpoints.               |
| alignContentXl                 | string  | undefined | Changes the **align-content** property on extra large and greater breakpoints.         |
| alignContentXxl                | string  | undefined | Changes the **align-content** property on extra extra large and greater breakpoints.   |
| justify                        | string  | undefined | Applies the [justify-content](/mytril/docs/styles/flex#justify-content) css property.  |
| justifyXs                      | string  | undefined | Changes the **justify-content** property on extra small and greater breakpoints.       |
| justifySm                      | string  | undefined | Changes the **justify-content** property on small and greater breakpoints.             |
| justifyMd                      | string  | undefined | Changes the **justify-content** property on medium and greater breakpoints.            |
| justifyLg                      | string  | undefined | Changes the **justify-content** property on                                            |
| large and greater breakpoints. |
| justifyXl                      | string  | undefined | Changes the **justify-content** property on extra large and greater breakpoints.       |
| justifyXxl                     | string  | undefined | Changes the **justify-content** property on extra extra large and greater breakpoints. |

**Col**

```svelte
<script>
	import { Container, Row, Col } from 'mytril';
</script>

<Container>
	<Row>
		<Col>// your content</Col>
	</Row>
</Container>
```

| Property      | Type          | Default   | Description                                                                                        |
| :------------ | :------------ | :-------- | :------------------------------------------------------------------------------------------------- |
| tag           | string        | div       | Specify a custom tag used on the root element.                                                     |
| alignSelf     | string        | undefined | Applies the [align-self](/mytril/docs/styles/flex#align-self)                                      |
| css property. |
| cols          | string number | undefined | Sets the default number of columns the component extends. Available options are: 1 -> 12 and auto. |
| xs            | string number | undefined | Changes the number of columns on **extra small** and greater breakpoints.                          |
| sm            | string number | undefined | Changes the number of columns on **small** and greater breakpoints.                                |
| md            | string number | undefined | Changes the number of columns on **medium** and greater breakpoints.                               |
| lg            | string number | undefined | Changes the number of columns on **large** and greater breakpoints.                                |
| xl            | string number | undefined | Changes the number of columns on **extra large** and greater breakpoints.                          |
| xxl           | string number | undefined | Changes the number of columns on **extra extra large** and greater breakpoints.                    |
| offset        | string        | undefined | Applies the [offset](/mytril/docs/styles/flex#offset) css property.                                |
| offsetXs      | string        | undefined | Changes the **offset** property on extra small and greater breakpoints.                            |
| offsetSm      | string        | undefined | Changes the **offset** property on small and greater breakpoints.                                  |
| offsetMd      | string        | undefined | Changes the **offset** property on medium and greater breakpoints.                                 |
| offsetLg      | string        | undefined | Changes the **offset** property on large and greater breakpoints.                                  |
| offsetXl      | string        | undefined | Changes the **offset** property on extra large and greater breakpoints.                            |
| offsetXxl     | string        | undefined | Changes the **offset** property on extra extra large and greater breakpoints.                      |
| order         | string        | undefined | Sets the default [order](/mytril/docs/styles/flex#order) for the column.                           |
| orderXs       | string        | undefined | Changes the **order** property on extra small and greater breakpoints.                             |
| orderSm       | string        | undefined | Changes the **order** property on small and greater breakpoints.                                   |
| orderMd       | string        | undefined | Changes the **order** property on medium and greater breakpoints.                                  |
| orderLg       | string        | undefined | Changes the **order** property on large and greater breakpoints.                                   |
| orderXl       | string        | undefined | Changes the **order** property on extra large and greater breakpoints.                             |
| orderXxl      | string        | undefined | Changes the **order** property on extra extra large and greater breakpoints.                       |

**Spacer**

```svelte
<script>
	import { Container, Row, Col, Spacer } from 'mytril';
</script>

<Container>
	<Row>
		<Col>// your content</Col>
		<Spacer />
		<Col>// your content</Col>
	</Row>
</Container>
```

| Property | Type   | Default | Description                                    |
| :------- | :----- | :------ | :--------------------------------------------- |
| tag      | string | div     | Specify a custom tag used on the root element. |
