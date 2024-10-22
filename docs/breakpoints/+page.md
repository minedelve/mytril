---
title: Responsive Breakpoints - Control Layouts Across
description: Utilize Mytril's predefined breakpoints to effortlessly manage layouts across all screen sizes. Fine-tune or customize these breakpoints directly in your code for complete control over responsive design.
---

# Display Your Content with Responsive Breakpoints {#display-breakpoints}

Mytril makes it easy to create responsive layouts with predefined **breakpoints** for different screen sizes. These breakpoints help you control how your content is displayed across devices, ensuring that your application is optimized for everything from small tablets to large desktop screens.

## Breakpoint Key Guide: {#breakpoint-key-guide}

| Device Type       | Key     | Type                    | Value  |
| :---------------- | :------ | :---------------------- | :----- |
| Default           |         | All device              | 0px    |
| Small             | **sm**  | Phone                   | 640px  |
| Medium            | **md**  | Small Tablet            | 768px  |
| Large             | **lg**  | Large Tablet and laptop | 1024px |
| Extra large       | **xl**  | Laptop                  | 1280px |
| Extra extra large | **xxl** | Desktop                 | 1536px |

With these breakpoints, you can create responsive components that adjust seamlessly depending on the user's device. You can target these breakpoints in your CSS or JavaScript, or use them directly in your Mytril components to define how content is displayed at different sizes.

### Example Usage with Mytril: {#example-usage}

Mytril’s breakpoints can be used to easily define media queries or set conditional styles based on the screen size directly on your html.

```html
<div class="md:ma-3 lg:ma-10 pa-2">
	your content
</div>
```

## Default Breakpoint Values: {#default-breakpoint-values}

Mytril provides the following default breakpoint values in the mytril.config.js file:

```javascript
export default {
	assets: {
		thresholds: {
			default: 0,
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1536px'
		}
	}
};
```

## Customizing Breakpoints: {#customizing-breakpoints}

You can also modify or add new breakpoints to suit the specific needs of your project. Simply update the mytril.config.js file with your preferred values:

```javascript
export default {
	assets: {
		thresholds: {
			sm: '340px', // replace default value
			xlg: '1920px', // add new value
		}
	}
};
```

With this flexibility, Mytril allows you to fine-tune the responsiveness of your application to ensure a seamless experience on all screen sizes, from small mobile devices to extra-large desktops.
