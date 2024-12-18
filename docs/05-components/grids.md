---
title: Responsive Grid Layouts with Mytril
description: Master the 12-point grid system for creating responsive layouts. Learn to use container, row and col components with custom breakpoints for adaptive web design.
---

# Building layouts with grid components with Mytril {#building-layouts-with-grid-components-with-mytril}

The Mytril grid system uses a flexible 12-column layout powered by flexbox, allowing developers to create responsive and customized designs with ease. With adaptable breakpoints and a range of components, Mytril’s grid enables tailored, device-friendly layouts.

## Core grid sub components {#core-grid-sub-components}

| Component | Description                                |
| :-------- | :----------------------------------------- |
| Grid      | The main element to house grid layouts.    |
| GridRow   | Used to define horizontal rows of columns. |
| GridCol   | Specifies individual columns within a row. |
| Spacer    | Adds adjustable spacing between columns.   |

```svelte
<script>
	import { Grid, GridRow, GridCol } from 'mytril';
</script>

<Grid>
	<GridRow>
		<GridCol>1</GridCol>
		<GridCol>2</GridCol>
		<GridCol>3</GridCol>
		<!-- Add more columns as needed -->
	</GridRow>
</Grid>
```

### Responsive breakpoints grid system {#responsive-breakpoints-grid-system}

Mytril’s grid system includes seven default breakpoints (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`, and `default` ) designed to match specific screen sizes. Each breakpoint allows you to target particular devices or orientations, ensuring flexibility across viewports.

These breakpoints are defined within Mytril’s configuration and can be customized to fit specific project needs. To modify breakpoints, you can adjust the settings in `plugins/mytril.(js|ts)`, tailoring your grid to accommodate different design preferences and responsive requirements.

## Customizing grid layouts {#customizing-grid-layouts}

With the `GridCol` component, you can define custom spans and adjust layouts for different breakpoints. The following example adapts column widths based on screen size:

```svelte
<script>
	import { Grid, GridRow, GridCol } from 'mytril';
</script>

<Grid>
	<GridRow dense>
		<GridCol cols="12" lg="4">1</GridCol>
		<GridCol cols="12" md="6" lg="2">2</GridCol>
		<GridCol cols="12" md="6" lg="2">3</GridCol>
		<GridCol cols="12" lg="4">4</GridCol>
	</GridRow>
</Grid>
```

### Properties of each grid component {#properties-of-each-grid-component}

Each component in the grid system has properties that allow for precise layout control:

**Grid**

```svelte
<script>
	import { Grid } from 'mytril';
</script>

<Grid>// your content</Grid>
```

| Property   | Type    | Default | Description                                               |
| :--------- | :------ | :------ | :-------------------------------------------------------- |
| tag        | string  | div     | Specify a custom tag used on the root element.            |
| fluid      | boolean | false   | Removes maximum-width size breakpoints.                   |
| fillHeight | boolean | false   | The class fill-height applies height: 100% to an element. |

**GridRow**

```svelte
<script>
	import { Grid, GridRow } from 'mytril';
</script>

<Grid>
	<GridRow>// your content</GridRow>
</Grid>
```

| Property                       | Type    | Default   | Description                                                                            |
| :----------------------------- | :------ | :-------- | :------------------------------------------------------------------------------------- |
| tag                            | string  | div       | Specify a custom tag used on the root element.                                         |
| dense                          | boolean | false     | Reduces the gutter between `GridCol`.                                                  |
| noGutters                      | boolean | false     | Removes the gutter between `GridCol`.                                                  |
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

**GridCol**

```svelte
<script>
	import { Grid, GridRow, GridCol } from 'mytril';
</script>

<Grid>
	<GridRow>
		<GridCol>// your content</GridCol>
	</GridRow>
</Grid>
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
	import { Grid, GridRow, GridCol, Spacer } from 'mytril';
</script>

<Grid>
	<GridRow>
		<GridCol>// your content 1</GridCol>
		<Spacer />
		<GridCol>// your content 2</GridCol>
	</GridRow>
</Grid>
```

| Property | Type   | Default | Description                                    |
| :------- | :----- | :------ | :--------------------------------------------- |
| tag      | string | div     | Specify a custom tag used on the root element. |

### Key benefits of this grid system {#key-benefits-of-this-grid-system}

1. **Effortless responsiveness**: pre-defined breakpoints make adapting layouts to various screen sizes easy.
2. **Fine-grained control**: alignment, spacing, and ordering can be customized without additional CSS.
3. **Developer-focused design**: each component integrates smoothly, saving time and simplifying layout management.

Using Mytril’s grid components, developers can build professional-grade, responsive layouts that are efficient and easy to manage.
