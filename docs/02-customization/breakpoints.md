---
title: Display your content with responsive breakpoints
section: Breakpoints
head:
  title: Responsive breakpoints - Control layouts across
  description: Utilize Mytril's predefined breakpoints to effortlessly manage layouts across all screen sizes. Fine-tune or customize these breakpoints directly in your code for complete control over responsive design.
related:
  - /mytril/docs/components/responsive
  - /mytril/docs/components/dialog
features:
  github: 02-customization/breakpoints.md
---

<script>
    import ResponsiveExamples from "$components-docs/responsive-example.svelte"
    import Code from "$components-docs/code.svelte"
</script>

Mytril makes it easy to create responsive layouts with predefined **breakpoints** for different screen sizes. These breakpoints help you control how your content is displayed across devices, ensuring that your application is optimized for everything from small tablets to large desktop screens.

## Breakpoint key guide:

| Breakpoint prefix | Minimum with      | CSS                          |
| ----------------- | ----------------- | ---------------------------- |
| **xs**            | `28rem (448px)`   | **@media (width >= 28rem)**  |
| **sm**            | `40rem (640px)`   | **@media (width >= 40rem)**  |
| **md**            | `48rem (768px)`   | **@media (width >= 48rem)**  |
| **lg**            | `64rem (1024px)`  | **@media (width >= 64rem)**  |
| **xl**            | `80rem (1280px)`  | **@media (width >= 80rem)**  |
| **2xl**           | `96rem (1536px)`  | **@media (width >= 96rem)**  |
| **3xl**           | `112rem (1792px)` | **@media (width >= 112rem)** |

With these breakpoints, you can create responsive components that adjust seamlessly depending on the user's device. You can target these breakpoints in your CSS or JavaScript, or use them directly in your Mytril components to define how content is displayed at different sizes.

### Example usage with Mytril:

Mytril’s breakpoints can be used to easily define media queries or set conditional styles based on the screen size directly on your html.

<ResponsiveExamples/>

## Default breakpoint values:

Mytril provides the following default breakpoint values in the `mytril.config.js` file:

<Code>

```javascript
// mytril.config.js

/** @type {import('mytril').Config} */
export default {
	display: {
		thresholds: {
			none: 0, // 0px
			xs: '28rem', //448px
			sm: '40rem', //640px
			md: '48rem', //768px
			lg: '64rem', //1024px
			xl: '80rem', //1280px
			'2xl': '96rem', //1536px
			'3xl': '112rem' //1792px
		}
	}
};
```

</Code>

### Working mobile-first

Mytril uses a mobile-first breakpoint system, similar to that to which you may be accustomed in other frameworks such as Tailwind or Bootstrap.

This means that non-prefixed utilities (such as **uppercase**) take effect on all screen sizes, while prefixed utilities (such as **md:uppercase**) only take effect at the specified breakpoint and above.

## Customizing breakpoints:

You can also modify or add new breakpoints to suit the specific needs of your project. Simply update the `mytril.config.js` file with your preferred values:

<Code>

```javascript
// mytril.config.js

/** @type {import('mytril').Config} */
export default {
	display: {
		thresholds: {
			sm: 340, // replace default value to 340px
			xlg: 1920 // add new value (px)
			'4xl': '150rem' // add new value (rem)
		}
	}
};
```

</Code>

With this flexibility, Mytril allows you to fine-tune the responsiveness of your application to ensure a seamless experience on all screen sizes, from small mobile devices to extra-large desktops.

## Mobile breakpoint

Mytril directly proposes a breakpoint to predefine when you switch from a **mobile/laptop** interface. With certain Mytril components, such as BottomNavigation, this allows you to define a display state according to the mobile view and the classic view.

<Code>

```javascript
// mytril.config.js

/** @type {import('mytril').Config} */
export default {
	display: {
		mobileBreakpoint: 'sm' // default value
	}
};
```

</Code>

You can customize this parameter in the `mytril.config.js` file, allowing you to adapt it to your design system.
