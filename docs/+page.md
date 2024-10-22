---
title: Introduction
---

# What is Mytril ? {#what-is-mytril}

Mytril is a Svelte library designed to help you build user interfaces with ease. It leverages the power of HTML, CSS, and JavaScript standards, providing lightweight, framework-based components that allow you to develop user interfaces of any complexity.

Here’s a simple example:

```svelte
<script>
    import { Btn } from 'mytril';
</script>

<Btn>Click on me</Btn>
```

Rendered output:

<button on:click={() => alert('Welcome to the Moria !')}>Click on me</button>

## Ready to Get Started? {#ready-to-start}

Mytril is currently under development, and while you can install it now, please be aware that functions, components, and styles may evolve rapidly in the coming weeks.

If you encounter any bugs, have suggestions, or simply have questions, feel free to reach out to us at [contact@minedelve.com](mailto:contact@minedelve.com) or on our [GitHub](https://github.com/minedelve) page.

### Installation (basic) {#installation-basic}

To install Mytril, ensure your environment is set up with Node.js (version 18 or LTS+), and you're using Svelte or SvelteKit. For guidance on setting up Svelte or SvelteKit, we recommend referring to the official documentation:

- [Svelte Documentation](https://svelte.dev/)
- [Sveltekit Documentation](https://kit.svelte.dev/)

At the root of your project, run the following command:

```command
npm install -D mytril
```

### Documentation {#documentation}

As Mytril is still in development, documentation will be continually added and updated until we reach Stable v1. Some parts of the documentation might be incomplete or partial at this stage. If you notice any missing information, please let us know.
