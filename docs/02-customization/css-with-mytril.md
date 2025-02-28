---
title: Style libraries CSS compatible with Mytril
section: Customization
head:
  title: Best CSS libraries for Mytril
  description: Looking for the best CSS framework for Svelte? Mytril works seamlessly with Tailwind, Bootstrap, UnoCSS, and more. Fast, scalable, and easy to use.
related:
  - /mytril/docs
  - /mytril/docs/customization/themes
  - /mytril/docs/customization/breakpoints
features:
  github: 02-customization/css-with-mytril.md
---

<script>
    import Code from "$lib/components/code.svelte";
</script>

## Mytril and your favorite CSS framework

Mytril is CSS agnostic: it doesn't impose any CSS framework on you, so you can easily integrate it with your preferred style. Whether you're using Tailwind CSS, UnoCSS, Bootstrap, or vanilla CSS, Mytril's components work very well together.

## Quick installation of the most commonly used CSS libraries

Below you'll find the **most common CSS styles** used with Mytril, along with installation steps to get you started quickly.

### 1. Tailwind CSS: utility-first styling

**Why use it?** Customizable, lightweight and very popular with users.

Installation:

<Code>

```bash
npm install tailwindcss @tailwindcss/vite
```

</Code>

### 2. Vanilla CSS / SCSS / LESS / Postcss: custom styles

**Why use it?** Full control over design without dependencies.

Installation & Usage:

- Use a global **style.css**, **SCSS** or **LESS** file.
- Apply styles directly or use CSS variables.

<Code>

```css
:root {
	--color-primary: #ff3e00;
}
```

</Code>

Beyond Tailwind, Vanilla CSS, SASS and LESS, here are other popular CSS & UI frameworks that can be integrated with Mytril easily:

### 3. UnoCSS: next-gen Atomic CSS

**Why use it?** Faster alternative to Tailwind, on-demand, tree-shakable styles, supports variants, presets, and shortcuts.

Installation & Setup:

<Code>

```bash
npm install -D unocss
```

</Code>

### 4. Bootstrap: classic, responsive design system

**Why use it?** Pre-styled components and responsive grid system.

Installation & Usage:

<Code>

```bash
npm install bootstrap
```

</Code>

## Which library should you choose?

- Want the best setup? use Tailwind CSS.
- Want full control? use Vanilla CSS, SASS or LESS.
- Want utility-first styling? use Tailwind or UnoCSS.

**Recommandation:** For a good approche on your project with mytril, we recommand to use Tailwind CSS or preprocessor SASS or LESS.

## Choose your styling, keep Mytril’s power

With Mytril, **you’re not locked into any styling system:** just pick the one that fits your project and start building!

Need more help? [Read the Docs](/mytril/docs) or [Join Our Community](https://discord.gg/fwyaGUhbav).
