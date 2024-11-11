---
title: Flexbox Layouts with Mytril’s CSS
description: Optimize your Svelte layouts with Mytril’s flex. Predefined CSS classes for fast, responsive design. Control flex direction, alignment, wrapping, and more, tailored for you building adaptable design for your users.
---

# Flex styles in Mytril: efficient layout management with flexbox {#flex-styles-in-mytril}

Mytril’s pre-defined Flexbox classes streamline responsive layout management, providing a robust set of tools to control layout direction, alignment, wrapping, and more. All with minimal code and full flexbox power.

## Flexbox layout control in Mytril {#flexbox-layout-control-in-mytril}

Each Mytril class directly maps to key Flexbox properties, allowing you to build structured, responsive layouts in Svelte. Below are the primary categories of flex classes and their effects:

### Flex basis {#flex-basis}

Control the base size and behavior of flex items within their container.

| Class          | Properties      |
| :------------- | :-------------- |
| .flex-1-1-auto | flex: 1 1 auto; |
| .flex-1-1-0    | flex: 1 1 0%;   |
| .flex-1-0-0    | flex: 1 0 0%;   |
| .flex-0-1-auto | flex: 0 1 auto; |
| .flex-0-0-auto | flex: 0 0 auto; |
| .flex-1-1-100  | flex: 1 1 100%; |
| .flex-1-0-100  | flex: 1 0 100%; |
| .flex-0-1-0    | flex: 0 1 0%;   |
| .flex-0-1-100  | flex: 0 1 100%; |
| .flex-0-0-0    | flex: 0 0 0%;   |
| .flex-0-0-100  | flex: 0 0 100%; |

### Flex direction {#flex-direction}

Set item layout direction within a container for rows, columns, and reverse orders.

| Class                | Properties                      |
| :------------------- | :------------------------------ |
| .flex-row            | flex-direction: row;            |
| .flex-row-reverse    | flex-direction: row-reverse;    |
| .flex-column         | flex-direction: column;         |
| .flex-column-reverse | flex-direction: column-reverse; |

### Justify content {#justify-content}

Align flex items along the main axis for consistent positioning.

| Class                  | Properties                      |
| :--------------------- | :------------------------------ |
| .justify-start         | justify-content: flex-start;    |
| .justify-end           | justify-content: flex-end;      |
| .justify-center        | justify-content: center;        |
| .justify-space-between | justify-content: space-between; |
| .justify-space-around  | justify-content: space-around;  |
| .justify-space-evenly  | justify-content: space-evenly;  |

### Align items {#align-items}

Adjust vertical alignment within the flex container.

| Class           | Properties             |
| :-------------- | :--------------------- |
| .align-start    | align-items: start;    |
| .align-end      | align-items: end;      |
| .align-center   | align-items: center;   |
| .align-baseline | align-items: baseline; |
| .align-stretch  | align-items: stretch;  |

### Align self {#align-self}

Control individual item alignment within the container.

| Class                | Properties              |
| :------------------- | :---------------------- |
| .align-self-start    | align-self: flex-start; |
| .align-self-end      | align-self: flex-end;   |
| .align-self-center   | align-self: center;     |
| .align-self-stretch  | align-self: stretch;    |
| .align-self-baseline | align-self: baseline;   |
| .align-self-auto     | align-self: auto;       |

### Align content {#align-content}

Manage alignment of multiple flex lines.

| Class                   | Properties                 |
| :---------------------- | :------------------------- |
| .align-content-start    | align-content: flex-start; |
| .align-content-end      | align-content: flex-end;   |
| .align-content-center   | align-content: center;     |
| .align-content-stretch  | align-content: stretch;    |
| .align-content-baseline | align-content: baseline;   |
| .align-content-auto     | align-content: auto;       |

### Flex wrap {#flex-wrap}

Set the wrapping behavior of items in the flex container.

| Class              | Properties               |
| :----------------- | :----------------------- |
| .flex-wrap         | flex-wrap: wrap;         |
| .flex-wrap-reverse | flex-wrap: wrap-reverse; |
| .flex-nowrap       | flex-wrap: nowrap;       |

### Offset and order {#offset-and-order}

**Offest**

Create spacing between items with offset classes, based on grid columns.

| Class      | Properties                                    |
| :--------- | :-------------------------------------------- |
| .offset-0  | margin-inline-start: calc((100% / 12) \* 0);  |
| .offset-1  | margin-inline-start: calc((100% / 12) \* 1);  |
| .offset-2  | margin-inline-start: calc((100% / 12) \* 2);  |
| .offset-3  | margin-inline-start: calc((100% / 12) \* 3);  |
| .offset-4  | margin-inline-start: calc((100% / 12) \* 4);  |
| .offset-5  | margin-inline-start: calc((100% / 12) \* 5);  |
| .offset-6  | margin-inline-start: calc((100% / 12) \* 6);  |
| .offset-7  | margin-inline-start: calc((100% / 12) \* 7);  |
| .offset-8  | margin-inline-start: calc((100% / 12) \* 8);  |
| .offset-9  | margin-inline-start: calc((100% / 12) \* 9);  |
| .offset-10 | margin-inline-start: calc((100% / 12) \* 10); |
| .offset-11 | margin-inline-start: calc((100% / 12) \* 11); |
| .offset-12 | margin-inline-start: calc((100% / 12) \* 12); |

**Order**

Set the display order of flex items to optimize layout sequencing.

| Class        | Properties |
| :----------- | :--------- |
| .order-first | order: -1; |
| .order-0     | order: 0;  |
| .order-1     | order: 1;  |
| .order-2     | order: 2;  |
| .order-3     | order: 3;  |
| .order-4     | order: 4;  |
| .order-5     | order: 5;  |
| .order-6     | order: 6;  |
| .order-7     | order: 7;  |
| .order-8     | order: 8;  |
| .order-9     | order: 9;  |
| .order-10    | order: 10; |
| .order-11    | order: 11; |
| .order-12    | order: 12; |
| .order-last  | order: 13; |

### Flex grow and shrink {#flex-grow-and-shrink}

Define how flex items expand or contract within the container.

**Grow**

| Class        | Properties    |
| :----------- | :------------ |
| .flex-grow-0 | flex-grow: 0; |
| .flex-grow-1 | flex-grow: 1; |

**Shrink**

| Class          | Properties      |
| :------------- | :-------------- |
| .flex-shrink-0 | flex-shrink: 0; |
| .flex-shrink-1 | flex-shrink: 1; |

## Practical example: creating responsive flexbox layouts with Mytril {#pratical-example}

As you can see, using Mytril's flex, you can quickly set up and control responsive layouts without having to write custom CSS style sheets. Each utility class represents essential flexbox properties, which you can apply directly to your Svelte components.

Here’s how to set up a responsive flex layout with Mytril in Svelte:

```html
<div class="flex-row justify-space-between align-items-center">
	<div class="flex-1-1-0">
		<!-- First Column -->
		<p>Column 1: Flexible width, wraps on smaller screens</p>
	</div>
	<div class="flex-1-1-0 order-1 md:order-0">
		<!-- Second Column with order -->
		<p>Column 2: Appears second on mobile, first on larger screens</p>
	</div>
	<div class="flex-0-1-auto offset-1">
		<!-- Third Column with offset -->
		<p>Column 3: Offset by 1 column width, flexible wrapping</p>
	</div>
</div>
```

### Explanation of key classes:

1. **`.flex-row`**: sets items in a horizontal row layout.
2. **`.justify-space-between`**: spreads items evenly across the row, with space between each.
3. **`.align-items-center`**: aligns items vertically centered within the row.
4. **`.flex-1-1-0`**: adjusts the width based on available space, ensuring responsive flexibility.
5. **`.order-1 md:order-0`**: alters the display order based on screen size, showing the second column first on larger screens.
6. **`.offset-1`**: adds spacing to the start of Column 3, creating a balanced layout.

This setup with Mytril’s flex styles allows you to manage complex, responsive layouts without additional custom CSS. You can quickly create a mobile-first, adaptable layout, using minimal code while maintaining a modular design.

## Why choose Mytril flex styles? {#why-choose-mytril-flex-styles}

Mytril’s flexbox utilities empower developers to quickly manage complex layouts, reduce custom CSS writing, and maintain responsive consistency across screen sizes. These classes simplify layout creation, providing a modular, flexible, and efficient setup for modern web applications.
