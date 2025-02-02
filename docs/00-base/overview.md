---
title: Introduction
description: Mytril is a Svelte library component for rapidly building modern websites based on Svelte and Sveltekit
related:
  - /colors/material
  - /colors/tailwind
  - /mytril/docs
features:
  label: 'introduction'
  github: 00-base/overview.md
---

<script>
    import PreviewCode from "$lib/components/preview-code.svelte";

    //sample
    import ButtonSimple from "./files/button.svelte";
</script>

# What is Mytril ? {#what-is-mytril}

Mytril is a Svelte library designed to help you build user interfaces with ease. It leverages the power of HTML, CSS, and JavaScript standards, providing lightweight, framework-based components that allow you to develop user interfaces of any complexity.

Here’s a simple example:

<PreviewCode file={ButtonSimple}>

```svelte
<script>
	import { Btn } from 'mytril/components';
</script>

<Btn onclick={() => alert('Welcome to the Moria !')}>Click on me</Btn>
```

</PreviewCode>

## Ready to Get Started? {#ready-to-start}

Mytril is currently under development, and while you can install it now, please be aware that functions, components, and styles may evolve rapidly in the coming weeks.

If you encounter any bugs, have suggestions, or simply have questions, feel free to reach out to us at [contact@minedelve.com](mailto:contact@minedelve.com) or on our [GitHub](https://github.com/minedelve) page.

### Installation (basic) {#installation-basic}

To install Mytril, ensure your environment is set up with Node.js (version 18 or LTS+), and you're using Svelte or SvelteKit. For guidance on setting up Svelte or SvelteKit, we recommend referring to the official documentation:

- [Svelte Documentation](https://svelte.dev/)
- [Sveltekit Documentation](https://kit.svelte.dev/)

At the root of your project, run the following command:

<PreviewCode>

```command
npm install -D mytril
```

</PreviewCode>

### Documentation {#documentation}

As Mytril is still in development, documentation will be continually added and updated until we reach Stable v1. Some parts of the documentation might be incomplete or partial at this stage. If you notice any missing information, please let us know.
