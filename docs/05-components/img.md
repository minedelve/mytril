---
title:
section:
head:
  title: Optimize Image with Mytril's Img Component
  description: Active the Mytril's responsive Img component for Svelte, featuring lazy loading, responsive design, and accessibility options for enhanced performance and layout flexibility in web development.
features:
  legacy: 0.4.14
---

# Mytril image component {#mytril-image-component}

Responsive and accessible images for any layout

The `Img` component in Mytril offers responsive, accessible image rendering with advanced layout options. It’s ideal for you aiming to manage image properties, loading behaviors, and responsive adjustments directly in their Svelte components.

## Implementing the Mytril img component {#implementing-the-mytril-img-component}

To use the `Img` component:

```svelte
<script>
	import { Img } from 'mytril';
</script>

<Img src="https://fastly.picsum.photos/id/28/4928/3264.jpg" contain alt="A scenic view" />
```

## Properties of the Img component {#properties-of-the-img-component}

| Property       | Type                                                                                                                                                                             | Default   | Description                                                                                                                                     |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| src            | string                                                                                                                                                                           | ''        | The image URL. This prop is mandatory.                                                                                                          |
| absolute       | boolean                                                                                                                                                                          | false     | Applies absolute positioning to the image container.                                                                                            |
| alt            | string or undefined                                                                                                                                                              | undefined | Alt text for accessibility. Essential for screen readers.                                                                                       |
| aspectRatio    | string or undefined                                                                                                                                                              | undefined | Sets aspect ratio (width/height) for image scaling. Optional but recommended for lazy-loaded images.                                            |
| contentClass   | string or undefined                                                                                                                                                              | undefined | Adds a custom CSS class to the image.                                                                                                           |
| contain        | boolean                                                                                                                                                                          | false     | Resizes the image to fit entirely within the container’s dimensions.                                                                            |
| cover          | boolean                                                                                                                                                                          | false     | Ensures the image covers the container while maintaining aspect ratio                                                                           |
| crossorigin    | '' or 'anonymous' or 'use-credentials'                                                                                                                                           | undefined | Enables CORS for images sourced cross-origin. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#crossorigin)              |
| draggable      | boolean or 'true' or 'false'                                                                                                                                                     | false     | Controls image drag behavior. See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable)                 |
| inline         | boolean                                                                                                                                                                          | false     | Display as an inline element instead of a block, also disables flex-grow.                                                                       |
| lazySrc        | string                                                                                                                                                                           | undefined | Placeholder image while the main image loads; often a low-res thumbnail.                                                                        |
| options        | IntersectionObserverInit                                                                                                                                                         | undefined | Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor. |
| referrerpolicy | 'origin' or 'no-referrer' or 'no-referrer-when-downgrade' or 'origin-when-cross-origin' or 'same-origin' or 'strict-origin' or 'strict-origin-when-cross-origin' or 'unsafe-url' | undefined | Sets referrer policy for image requests. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy)                |

### Example: lazy loading and responsive behavior {#example-lazy-loading-and-responsive-behavior}

The `Img` component supports lazy loading via the `lazySrc` property, making it easy to provide a placeholder while the main image loads. Combined with `aspectRatio`, this approach helps improve page performance by ensuring images load as users scroll.

```svelte
<script>
	import { Img } from 'mytril';
</script>

<Img
	src="https://fastly.picsum.photos/id/28/4928/3264.jpg"
	lazySrc="https://via.placeholder.com/100"
	aspectRatio="16/9"
	alt="Scenic view"
/>
```

## Customizable properties for flexibility {#customizable-properties-for-flexibility}

The component is designed to give you control over display modes, alignment, loading behavior, and security settings:

- **`cover` vs. `contain`**: use `cover` to fill the entire container or `contain` to ensure the whole image is visible.
- **Inline display**: switch to inline layout with the `inline` property, which can also disable `flex-grow` for simpler layouts.
- **Draggable & CORS control**: customize image interactivity with `draggable`, and enable cross-origin resource sharing when needed.
