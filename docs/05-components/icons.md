---
title: Icons Component
description: Mytril's Icon component makes it simple to integrate icons from various sources. The component seamlessly handles icons from Font Awesome, Iconify, Material Design Icons, custom fonts, and SVGs, providing both compatibility and ease of use.
---

# Icon Component with Mytril: Versatile and Flexible {#icon-component-with-mytril}

Mytril's **Icon** component makes it simple to integrate icons from various sources. The component seamlessly handles icons from Font Awesome, Iconify, Material Design Icons, custom fonts, and SVGs, providing both compatibility and ease of use.

## Using Icons in your application {#using-icons-in-your-application}

Adding icons is straightforward with Mytril’s `Icon` component:

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="mdi:home" />
```

## Supported Icon libraries {#support-library-icons-list}

Mytril supports a range of popular icon libraries and custom sources:

| Support              | Tag           | Documentation                                                  |
| :------------------- | :------------ | :------------------------------------------------------------- |
| Iconify              | None required | [Browse Iconify libraries](https://icon-sets.iconify.design/)  |
| Font Awesome         | `fa:`         | [Learn more about Font Awesome](https://fontawesome.com/icons) |
| Material Design Icon | None required | [Explore MDI](https://pictogrammers.com/library/mdi/)          |
| Custom Font          | `font:`       | Import custom font icons into your CSS                         |
| SVG                  | `svg:`        | Use custom SVG files for icons                                 |

## Icon library integration examples {#icon-library-integration-examples}

### 1. Iconify {#iconify}

No additional setup is required if your project includes the `@iconify/svelte` package. Install it by following the [Iconify Svelte Documentation](https://iconify.design/docs/icon-components/svelte/).

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="material-symbols:10k-rounded" />
```

### 2. Font Awesome {#font-awesome}

Install the necessary Font Awesome dependencies to start using its icons. Use the `fa:` prefix to specify icons.

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="fa:fa-solid fa-house" />
```

### 3. Material Design Icons (MDI) {#material-design-icons}

For MDI, install the `@mdi/js` package. Mytril’s Icon component handles these icons effortlessly.

```svelte
<script>
	import { Icon } from 'mytril';
	import { mdiAccount } from '@mdi/js';
</script>

<Icon icon={mdiAccount} />
```

### 4. Custom Fonts {#custom-fonts}

Add your custom fonts to your project’s CSS and reference them using the font: prefix.

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="font:demo-pacman" />
```

### 5. SVG {#svg}

Add your svg file icons and import directly into Mytril's Icon component with the `svg:` prefix

```svelte
<script>
	import { Icon } from 'mytril';
	import iconSVG from '$lib/icons/3d-rotation.svg';
</script>

<Icon icon={`svg:${iconSVG}`} />
```

## Icon component properties {#icon-component-properties}

The `Icon` component comes with several customizable properties, ensuring flexibility for developers:

| Property | Type    | Default   | Description                                                                                        |
| :------- | :------ | :-------- | :------------------------------------------------------------------------------------------------- |
| tag      | string  | i         | Specifies the icon to display (with prefix for type)                                               |
| dark     | boolean | false     | Force color theme on **dark**.                                                                     |
| light    | boolean | false     | Force color theme on **light**.                                                                    |
| disabled | boolean | false     | Disabled icon and style disabled.                                                                  |
| start    | boolean | false     | Add `margin-inline-end` on your icon                                                               |
| end      | boolean | false     | Add `margin-inline-start` on your icon                                                             |
| icon     | string  | -         | Add path, IconElement or class for display icon                                                    |
| size     | string  | 'default' | Adjusts the icon size `xs`, `sm`, `md`, `lg`, `xl`,                                                |
| color    | string  | undefined | Defines the icon color (accepts HEX, RGB, or [theme variables](/mytril/docs/customization/themes)) |

### Customizing Icon appearance {#customzing-icon-appearance}

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="mdi:home" size="lg" color="primary" class="custom-icon" />
```

## Why choose Mytril's Icon component? {#why-choose-mytril-icon-component}

1. **Extensive compatibility:** supports multiple icon libraries and formats, from standard libraries to custom fonts and SVGs
2. **Ease of use:** simple, intuitive syntax that requires minimal setup
3. **Customization:** flexible properties for adjusting size, color, and style to match your design
4. **Performance optimized:** built with Svelte's framework for lightweight, reactive performance
5. **Accessibility:** built-in ARIA roles ensure proper screen reader support
