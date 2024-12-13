---
title: Bottom navigation Component
description: jsp
---

# Bottom Navigation Component a comprehensive guide {#bottom-navigation-component-a-comprehensive-guide}

The **Bottom Navigation** component is an alternative to the sidebar. It is primarily used for mobile applications.

## Using the Bottom Navigation component {#using-the-bottom-navigation-component}

```svelte
<script>
	import { BottomNavigation, Btn, Icon } from 'mytril';
</script>

<BottomNavigation>
	<Btn on:click={() => (selected = 'Recent')} active={selected === 'Recent'}>
		<Icon icon="mdi:home" />
		<span>Recent</span>
	</Btn>
	<Btn on:click={() => (selected = 'Favorites')} active={selected === 'Favorites'}>
		<Icon icon="mdi:close" />
		<span>Favorites</span>
	</Btn>
	<Btn on:click={() => (selected = 'Nearby')} active={selected === 'Nearby'}>
		<Icon icon="mdi:home" />
		<span>Nearby</span>
	</Btn>
</BottomNavigation>
```

> **Btn** component is adapted with css BottomNavigation

## Bottom Navigation component properties {#bottom-navigation-component-properties}

| Property  | Type             | Default   | Description                                                                                                                                        |
| :-------- | :--------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string           | div       | Specify a custom tag for the root element                                                                                                          |
| dark      | boolean          | false     | Force a **dark** theme                                                                                                                             |
| light     | boolean          | false     | Force a **light** theme                                                                                                                            |
| grow      | boolean          | false     | Force all **Btn** component to use all available horizontal space                                                                                  |
| shift     | boolean          | false     | display none **span** element on **Btn** component and display block if **Btn** is selected                                                        |
| height    | string or number | 56px      | Adapte height BottomNavigation                                                                                                                     |
| absolute  | boolean          | false     | Add absolute position                                                                                                                              |
| active    | boolean          | false     | If scroll down bottom navigation hidden and if scroll up bottom navigation is visible                                                              |
| rounded   | string           | undefined | Add [border radius](/mytril/docs/styles/border-radius) on Alert                                                                                    |
| color     | string           | undefined | Add color scheme on your bottom navigation, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string           | undefined | If properties outline or text is activate, this propertie is disabled                                                                              |
