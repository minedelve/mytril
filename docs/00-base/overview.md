---
title: What is Mytril ?
section: Introduction
head:
  title: Introduction
  description: Mytril is a Svelte library component for rapidly building modern websites based on Svelte and Sveltekit
related:
  - /colors/material
  - /colors/tailwind
  - /mytril/docs
features:
  legacy: 0.4.8
  github: 00-base/overview.md
  bug: introduction
  feature: add on introduction
---

<script>
    import Code from "$lib/components/code.svelte";

    //sample
      import ButtonSimple from "$content/mytril/examples/button.svelte";
</script>

Mytril is a Svelte library designed to help you build user interfaces with ease. It leverages the power of HTML, CSS, and JavaScript standards, providing lightweight, framework-based components that allow you to develop user interfaces of any complexity.

Here’s a simple example:

<Code file={ButtonSimple}>

```svelte
<script>
	import { Btn } from 'mytril/components';
</script>

<Btn onclick={() => alert('Welcome to the Moria !')}>Click on me</Btn>
```

</Code>

## Ready to Get Started? {#ready-to-start}

Mytril is currently under development, and while you can install it now, please be aware that functions, components, and styles may evolve rapidly in the coming weeks.

If you encounter any bugs, have suggestions, or simply have questions, feel free to reach out to us at [contact@minedelve.com](mailto:contact@minedelve.com) or on our [GitHub](https://github.com/minedelve) page.

### Installation (basic) {#installation-basic}

To install Mytril, ensure your environment is set up with Node.js (version 18 or LTS+), and you're using Svelte or SvelteKit. For guidance on setting up Svelte or SvelteKit, we recommend referring to the official documentation:

![](/images/mytril/example-img.png)

- [Svelte Documentation](https://svelte.dev/)
- [Sveltekit Documentation](https://kit.svelte.dev/)

At the root of your project, run the following command:

<Code>

```command
npm install -D mytril
```

</Code>

### Documentation {#documentation}

As Mytril is still in development, documentation will be continually added and updated until we reach Stable v1. Some parts of the documentation might be incomplete or partial at this stage. If you notice any missing information, please let us know.

## Btn component properties {#btn-component-properties}

| Property  | Type    | Default   | Description                                                                                                                          |
| :-------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string  | div       | Specify a custom tag for the root element                                                                                            |
| dark      | boolean | false     | Force a **dark** theme                                                                                                               |
| light     | boolean | false     | Force a **light** theme                                                                                                              |
| density   | string  | default   | Resize padding on Btn component with 3 options, **compact**, **comfortable**, **default**                                            |
| block     | boolean | false     | Add class _block_ on Btn component for use all space                                                                                 |
| disabled  | boolean | false     | Disable chip action                                                                                                                  |
| active    | boolean | false     | Add class active on Btn                                                                                                              |
| square    | boolean | false     | add small radius on icon Btn                                                                                                         |
| outlined  | boolean | false     | Add border on Btn and disabled background                                                                                            |
| circle    | boolean | false     | Add rounded-full on icon                                                                                                             |
| text      | boolean | false     | disabled background and border on Btn                                                                                                |
| error     | boolean | false     | Add color error on Btn                                                                                                               |
| warning   | boolean | false     | Add color warning on Btn                                                                                                             |
| info      | boolean | false     | Add color info on Btn                                                                                                                |
| success   | boolean | false     | Add color success on Btn                                                                                                             |
| icon      | boolean | false     | Btn style for display icon only, It's recomanded to use [Icon component](/mytril/docs/components/icons)                              |
| wide      | boolean | false     | Display fixed width 16rem on Btn                                                                                                     |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Btn                                                                        |
| link      | boolean | undefined | Add class link on Btn                                                                                                                |
| color     | string  | undefined | Add color scheme on your Btn, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string  | undefined | If properties outline or text is activate, this propertie is disabled                                                                |
| size      | string  | md        | Add size Btn for **all** breakpoints, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                  |
| sizeXs    | string  | -         | Add size Btn for **xs** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeSm    | string  | -         | Add size Btn for **sm** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeMd    | string  | -         | Add size Btn for **md** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeLg    | string  | -         | Add size Btn for **lg** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeXs    | string  | -         | Add size Btn for **xl** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |

### Documentation {#documentation}

As Mytril is still in development, documentation will be continually added and updated until we reach Stable v1. Some parts of the documentation might be incomplete or partial at this stage. If you notice any missing information, please let us know.

{#snippet properties()}

As Mytril is still in development, documentation will be continually added and updated until we reach Stable v1. Some parts of the documentation might be incomplete or partial at this stage. If you notice any missing information, please let us know.

## Btn component properties {#btn-component-properties}

| Property  | Type    | Default   | Description                                                                                                                          |
| :-------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string  | div       | Specify a custom tag for the root element                                                                                            |
| dark      | boolean | false     | Force a **dark** theme                                                                                                               |
| light     | boolean | false     | Force a **light** theme                                                                                                              |
| density   | string  | default   | Resize padding on Btn component with 3 options, **compact**, **comfortable**, **default**                                            |
| block     | boolean | false     | Add class _block_ on Btn component for use all space                                                                                 |
| disabled  | boolean | false     | Disable chip action                                                                                                                  |
| active    | boolean | false     | Add class active on Btn                                                                                                              |
| square    | boolean | false     | add small radius on icon Btn                                                                                                         |
| outlined  | boolean | false     | Add border on Btn and disabled background                                                                                            |
| circle    | boolean | false     | Add rounded-full on icon                                                                                                             |
| text      | boolean | false     | disabled background and border on Btn                                                                                                |
| error     | boolean | false     | Add color error on Btn                                                                                                               |
| warning   | boolean | false     | Add color warning on Btn                                                                                                             |
| info      | boolean | false     | Add color info on Btn                                                                                                                |
| success   | boolean | false     | Add color success on Btn                                                                                                             |
| icon      | boolean | false     | Btn style for display icon only, It's recomanded to use [Icon component](/mytril/docs/components/icons)                              |
| wide      | boolean | false     | Display fixed width 16rem on Btn                                                                                                     |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Btn                                                                        |
| link      | boolean | undefined | Add class link on Btn                                                                                                                |
| color     | string  | undefined | Add color scheme on your Btn, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string  | undefined | If properties outline or text is activate, this propertie is disabled                                                                |
| size      | string  | md        | Add size Btn for **all** breakpoints, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                  |
| sizeXs    | string  | -         | Add size Btn for **xs** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeSm    | string  | -         | Add size Btn for **sm** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeMd    | string  | -         | Add size Btn for **md** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeLg    | string  | -         | Add size Btn for **lg** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |
| sizeXs    | string  | -         | Add size Btn for **xl** breakpoint, Btn use this key 'xs', 'sm', 'md', 'lg', 'xl'                                                    |

{/snippet}
