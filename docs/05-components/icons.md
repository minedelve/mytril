---
title: Icons with Mytril
description: jsp
---

# Icon components with Mytril {#icon-components-with-mytril}

The Icon component offers great flexibility in the use of icon libraries. We ensure compatibility with Font Awesome, Iconify, Material Design Icons, custom fonts and SVGs.

## Use Icon on your app {#use-icon-on-your-app}

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="mdi:home" />
```

### Support library icons list {#support-library-icons-list}

| Support              | Tag     | Documentation                                            |
| :------------------- | :------ | :------------------------------------------------------- |
| Iconify              | -       | [visit iconify libs](https://icon-sets.iconify.design/)  |
| Font Awesome         | `fa:`   | [visit font awesome libs](https://fontawesome.com/icons) |
| Material Design Icon | -       | [visit MDI libs](https://pictogrammers.com/library/mdi/) |
| Custom Font          | `font:` | Import your custom font icon                             |
| SVG                  | `svg:`  | Use standard svg icon                                    |

**Iconify**

Iconify requires the @iconify/svelte package to be installed on your project. Please consult their [documentation](https://iconify.design/docs/icon-components/svelte/) to ensure proper installation of the package.

Then you don't need to import iconify into your project, as Mytril provides the link and works seamlessly.

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="material-symbols:10k-rounded" />
```

**Font Awesome**

You do need to install [Font Awesome](https://fontawesome.com/start) dependencies to import the icons into your application, but Mytril ensures compatibility and option support directly via the Icon component.

Use the `fa:` prefix to display your icons correctly

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="fa:fa-solid fa-house" />
```

**Material Design Icon**

You do need to install [Material Design Icon](https://pictogrammers.com/docs/library/mdi/getting-started/svelte/) dependencies to import the icons into your application, but Mytril ensures compatibility and option support directly via the Icon component.

You install `@mdi/js` only,

```svelte
<script>
	import { Icon } from 'mytril';
	import { mdiAccount } from '@mdi/js';
</script>

<Icon icon={mdiAccount} />
```

**Custom Fonts**

Import your icon fonts into your CSS and call your icons directly into Mytril's Icon component with the `font:` prefix

```svelte
<script>
	import { Icon } from 'mytril';
</script>

<Icon icon="font:demo-pacman" />
```

**SVG**

Add your svg file icons and import directly into Mytril's Icon component with the `svg:` prefix

```svelte
<script>
	import { Icon } from 'mytril';
	import iconSVG from '$lib/icons/3d-rotation.svg';
</script>

<Icon icon={`svg:${iconSVG}`} />
```

### Properties of Icon component {#properties-of-icon-component}

| Property | Type    | Default   | Description                                                                                                                                                                                                                    |
| :------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tag      | string  | i         | Specify a custom tag used on the root element.                                                                                                                                                                                 |
| dark     | boolean | false     | Force color theme on **dark**.                                                                                                                                                                                                 |
| light    | boolean | false     | Force color theme on **light**.                                                                                                                                                                                                |
| disabled | boolean | false     | Disabled icon and style disabled.                                                                                                                                                                                              |
| start    | boolean | false     | Add `margin-inline-end` on your icon                                                                                                                                                                                           |
| end      | boolean | false     | Add `margin-inline-start` on your icon                                                                                                                                                                                         |
| icon     | string  | -         | Add path, IconElement or class for display icon                                                                                                                                                                                |
| size     | string  | 'default' | Add size on icon with properties `xs`, `sm`, `md`, `lg`, `xl`,                                                                                                                                                                 |
| color    | string  | undefined | Add color scheme on your card, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes). If properties outline or text is activate, color is property used border and text color |
