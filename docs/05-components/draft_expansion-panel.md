---
title: Expansion Panels Component
description: jsp
---

# Expansion Panels Component a comprehensive guide {#expansion-panels-component-a-comprehensive-guide}

The **Expansion Panels** component is useful for reducing vertical space with large amounts of information.

## Using the Expansion Panels component {#using-the-expansion-panels-component}

Implementing the Expansion Panels in your project:

```svelte
<script>
	import { ExpansionPanels, ExpansionPanel } from 'mytril';

	let items = [
		{ title: 'Panel 1', content: 'Contents of the first panel.' },
		{ title: 'Panel 2', content: 'Contents of the second panel.' },
		{ title: 'Panel 3', content: 'Contents of the third panel.' }
	];
</script>

<ExpansionPanels
	multiple={false}
	let:openIndexes
	let:toggle
	on:change={(e) => console.log('open:', e.detail.openIndexes)}
>
	{#each items as { title, content }, index}
		<ExpansionPanel {index} open={openIndexes.includes(index)} {toggle}>
			<svelte:fragment slot="title">{title}</svelte:fragment>
			{content}
		</ExpansionPanel>
	{/each}
</ExpansionPanels>
```

## Core Expansion Panels subcomponents {#core-expansion-panels-subcomponents}

Mytril’s Expansion Panels includes subcomponents

| Component       | Description                                  |
| :-------------- | :------------------------------------------- |
| ExpansionPanels | The main container for your expansion panels |
| ExpansionPanel  | Displays content on expansion panel          |

## Expansion Panels component properties {#expansion-panels-component-properties}

| Property  | Type    | Default   | Description                                                                                 |
| :-------- | :------ | :-------- | :------------------------------------------------------------------------------------------ |
| tag       | string  | div       | Specify a custom tag for the root element                                                   |
| density   | string  | default   | Resize padding on Alert component with 3 options, **compact**, **comfortable**, **default** |
| dark      | boolean | false     | Force a **dark** theme                                                                      |
| light     | boolean | false     | Force a **light** theme                                                                     |
| multiple  | boolean | false     | Open multiple ExpansionPanel component                                                      |
| expansion | boolean | false     | Add margin on all expansion panel component                                                 |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Alert                             |
| spacer    | boolean | false     |                                                                                             |
| readonly  | boolean | false     | Disable action , no open and close Expansion Panel child                                    |
| hideIcon  | boolean | false     | Hide icon on right Expansion Panel child                                                    |

## Expansion Panel subcomponent {#expansion-panel-subcomponent}

| Property  | Type             | Default   | Description                                                                                                                            |
| :-------- | :--------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string           | div       | Specify a custom tag for the root element                                                                                              |
| density   | string           | default   | Resize padding on Alert component with 3 options, **compact**, **comfortable**, **default**                                            |
| dark      | boolean          | false     | Force a **dark** theme                                                                                                                 |
| light     | boolean          | false     | Force a **light** theme                                                                                                                |
| index     | number or string | -         | Add index                                                                                                                              |
| open      | boolean          | -         | Open ExpansionPanel component                                                                                                          |
| rounded   | string           | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Alert                                                                        |
| color     | string           | undefined | Add color scheme on your Alert, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string           | undefined | If properties outline or text is activate, this propertie is disabled                                                                  |
| disabled  | boolean          | false     | Disable expansion panel action                                                                                                         |
