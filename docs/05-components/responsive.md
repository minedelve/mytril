---
title: Building Responsive Components with Mytril
description: Learn how to create adaptive, responsive components in Mytril using the Responsive component. Set aspect ratios, toggle inline display, and optimize your layout for all screens effortlessly.
---

# Responsive components with Mytril: building adaptive elements {#responsive-component-with-mytril}

Creating responsive components in Mytril is straightforward, thanks to the `Responsive` component. With built-in properties, this component lets you specify adaptable elements that automatically adjust to the viewport, delivering a dynamic user experience across devices.

## Using the responsive component {#using-the-responsive-component}

To create a responsive element, import the responsive component from Mytril, and use it with properties tailored to your display needs:

```svelte
<script>
	import { Responsive } from 'mytril';
</script>

<Responsive aspectRatio="16/9">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. To create a responsive element, import
	the responsive component from Mytril, and use it with properties tailored to your display needs:
</Responsive>
```

### Responsive component properties {#responsive-component-properties}

The `responsive` component provides several properties to control the display and responsiveness of elements. Here’s a breakdown of key properties:

| Property    | Type                | Default   | Description                                                                        |
| :---------- | :------------------ | :-------- | :--------------------------------------------------------------------------------- |
| aspectRatio | string or undefined | undefined | Specifies the aspect ratio as `width/height`. Automatically calculated if omitted. |
| inline      | boolean             | false     | Displays as an inline element rather than a block and disables `flex-grow`.        |

### Example: aspect ratio and inline display {#aspect-ratio-and-inline-display}

The `responsive` component makes it easy to create elements with specific aspect ratios. For instance, setting an `aspectRatio` of "16/9" will automatically scale the element to match this ratio, ensuring a consistent layout across screen sizes.

If you want the element to behave as an inline element (e.g., for inline media or images), set `inline` to `true`, which will adjust its behavior and disable `flex-grow` for better alignment with surrounding inline elements.

```svelte
<script>
	import { Responsive } from 'mytril';
</script>

<Responsive aspectRatio="4/3" inline={true}>
	<!-- Inline, 4:3 responsive content here -->
</Responsive>
```

## Why use Mytril’s responsive component? {#why-use-mytril-responsive-component}

1. **Automatic resizing:** set an aspect ratio once, and Mytril will handle resizing across different screens, saving time and reducing manual media queries.
2. **Inline flexibility:** toggle between inline and block-level displays for versatile layout control.
3. **Enhanced layout control:** designed to meet the dynamic needs of modern responsive web development, the `responsive` component simplifies adaptive content without additional CSS or scripts.

With Mytril’s `responsive` component, you can quickly build responsive, flexible layouts that enhance both usability and aesthetic appeal, helping to deliver a seamless experience across all devices.
