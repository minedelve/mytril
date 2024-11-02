---
title: Flexbox Layouts with Mytril’s CSS
description: Optimize your Svelte layouts with Mytril’s flex. Predefined CSS classes for fast, responsive design. Control flex direction, alignment, wrapping, and more, tailored for you building adaptable design for your users.
---

# Flex styles with Mytril {#flex-styles-with-mytril}

Harness of CSS Flexbox with Mytril’s pre-defined classes for easy, responsive layout management. With Mytril, you get a comprehensive set of flex styles that simplify controlling layout direction, alignment, wrapping, and more, all with minimal code.

## Flexbox layout control {#flexbox-layout-control}

Each class in Mytril corresponds to essential Flexbox properties, allowing for clear, structured layouts in your Svelte projects.

### Flex basis {#flex-basis}

Control how your flex items behave within a container:

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

## Flex direction {#flex-direction}

Set the layout direction of items in a container for rows, columns, and reversed order:

| Class                | Properties                      |
| :------------------- | :------------------------------ |
| .flex-row            | flex-direction: row;            |
| .flex-row-reverse    | flex-direction: row-reverse;    |
| .flex-column         | flex-direction: column;         |
| .flex-column-reverse | flex-direction: column-reverse; |

## Justify content {#justify-content}

Align flex items along the main axis:

| Class                  | Properties                      |
| :--------------------- | :------------------------------ |
| .justify-start         | justify-content: flex-start;    |
| .justify-end           | justify-content: flex-end;      |
| .justify-center        | justify-content: center;        |
| .justify-space-between | justify-content: space-between; |
| .justify-space-around  | justify-content: space-around;  |
| .justify-space-evenly  | justify-content: space-evenly;  |

## Align items {#align-items}

Control vertical alignment for flex items:

| Class           | Properties             |
| :-------------- | :--------------------- |
| .align-start    | align-items: start;    |
| .align-end      | align-items: end;      |
| .align-center   | align-items: center;   |
| .align-baseline | align-items: baseline; |
| .align-stretch  | align-items: stretch;  |

## Align self {#align-self}

Manage alignment of individual items within a flex container:

| Class                | Properties              |
| :------------------- | :---------------------- |
| .align-self-start    | align-self: flex-start; |
| .align-self-end      | align-self: flex-end;   |
| .align-self-center   | align-self: center;     |
| .align-self-stretch  | align-self: stretch;    |
| .align-self-baseline | align-self: baseline;   |
| .align-self-auto     | align-self: auto;       |

## Align content {#align-content}

Align flex lines within a container:

| Class                   | Properties                 |
| :---------------------- | :------------------------- |
| .align-content-start    | align-content: flex-start; |
| .align-content-end      | align-content: flex-end;   |
| .align-content-center   | align-content: center;     |
| .align-content-stretch  | align-content: stretch;    |
| .align-content-baseline | align-content: baseline;   |
| .align-content-auto     | align-content: auto;       |

## Flex wrap {#flex-wrap}

Control wrapping behavior in the flex container:

| Class              | Properties               |
| :----------------- | :----------------------- |
| .flex-wrap         | flex-wrap: wrap;         |
| .flex-wrap-reverse | flex-wrap: wrap-reverse; |
| .flex-nowrap       | flex-wrap: nowrap;       |

## Order {#order}

Set the display order of items within a flex container:

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

## Flex grow and shrink {#flex-grow-and-shrink}

Define how items grow or shrink within a container:

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

### Why use Mytril flex styles?

With Mytril’s flexbox styles, managing complex layouts becomes straightforward. By using these flex classes, you can reduce CSS writing time, maintain responsive design consistency, and adapt to different screen sizes seamlessly.

This setup streamlines layout development, focusing on modular, flexible, and responsive code for modern web applications.
