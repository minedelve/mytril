---
title: Lists  component Mytril
description: jsp
---

# Lists components with Mytril {#lists-components-with-mytril}

The List component is used to display information. It can contain an content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection. They provide a consistent styling for organizing groups of text and images.

## Core Lists sub components {#core-lists-sub-components}

| Component        | Description                                                          |
| :--------------- | :------------------------------------------------------------------- |
| List             | The main element to house list sub components.                       |
| ListGroup        | Sub-component used to display or hide groups of items                |
| ListSubheader    | Sub-component used to separate groups of items                       |
| ListItem         | Sub-component used to display a single item or modify the list state |
| ListItemTitle    | Sub-component used to display the title of a list item               |
| ListItemSubtitle | Sub-component used to display the subtitle of a list item.           |

```svelte
<script>
	import { List, Icon, ListSubheader, ListItem } from 'mytril';
</script>

<List style="width: 320px" threeline>
	<ListSubheader>Group 1</ListSubheader>
	<ListItem>
		<svelte:fragment slot="prepend">
			<Icon icon="mdi:account" />
		</svelte:fragment>
		Item 1
		<svelte:fragment slot="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem 2 ipsum dolor sit amet
			consectetur adipisicing elit. Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.
		</svelte:fragment>
	</ListItem>
	<ListItem>
		<svelte:fragment slot="prepend">
			<Icon icon="mdi:home" />
		</svelte:fragment>
		Item 2
		<svelte:fragment slot="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem 2 ipsum dolor sit amet
			consectetur adipisicing elit. Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.
		</svelte:fragment>
	</ListItem>
	<ListItem>
		<svelte:fragment slot="prepend">
			<Icon icon="mdi:close" />
		</svelte:fragment>
		Item 3
		<svelte:fragment slot="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem 2 ipsum dolor sit amet
			consectetur adipisicing elit. Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.
		</svelte:fragment>
	</ListItem>
</List>
```

### Properties of each items component {#properties-of-each-items-component}

## List {#list}

```svelte
<script>
	import { List } from 'mytril';
</script>

<List>// your content</List>
```

| Property    | Type                   | Default   | Description                                                                                                                           |
| :---------- | :--------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| tag         | string                 | div       | Specify a custom tag used on the root element.                                                                                        |
| dark        | boolean                | false     | Force color theme on **dark**.                                                                                                        |
| light       | boolean                | false     | Force color theme on **light**.                                                                                                       |
| towline     | boolean                | boolean   | Display on ListItemSubtile tow line                                                                                                   |
| threeline   | boolean                | boolean   | Display on ListItemSubtitle three line.                                                                                               |
| dense       | boolean                | false     | Reduces margins on all child component List.                                                                                          |
| disabled    | boolean                | false     | Disabled button and anchor list and style disabled.                                                                                   |
| rounded     | string                 | undefined | Add [border radius](/mytril/docs/styles/border-radius) on List                                                                        |
| nav         | boolean                | false     | Adds margins and spaces to enhance the edge list                                                                                      |
| openIndexes | Array string or number | []        | List for open or close ListGroup child                                                                                                |
| toggle      | string or number       | -         | function Event for open or close ListGroup                                                                                            |
| color       | string                 | undefined | Add color scheme on your list, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText   | string                 | undefined | If properties outline or text is activate, this propertie is disabled                                                                 |

## ListSubheader {#list-sub-header}

```svelte
<script>
	import { List, ListSubheader } from 'mytril';
</script>

<List let:openIndexes let:toggle>
	<ListSubheader>Group</ListSubheader>
	<!-- content -->
</List>
```

| Property | Type    | Default | Description                                     |
| :------- | :------ | :------ | :---------------------------------------------- |
| tag      | string  | div     | Specify a custom tag used on the root element.  |
| dark     | boolean | false   | Force color theme on **dark**.                  |
| light    | boolean | false   | Force color theme on **light**.                 |
| inset    | boolean | false   | Add spacing in position subheader               |
| sticky   | boolean | false   | Fixe position subheader to head List in scroll. |

## ListGroup {#list-group}

```svelte
<script>
	import { List, ListSubheader, ListGroup } from 'mytril';
</script>

<List let:openIndexes let:toggle>
	<ListSubheader>Group</ListSubheader>
	<ListGroup value={'group-1'} {toggle} open={openIndexes.includes('group-1')}>
		<svelte:fragment slot="activator">Admin</svelte:fragment>
		<!-- content -->
	</ListGroup>
</List>
```

ListGroup has **4** slots for display your content

| Slot              | Description                                                       |
| :---------------- | :---------------------------------------------------------------- |
| default           | Is default slot for display content                               |
| activator         | Add content on button action for toggle display group             |
| prepend-activator | Add content on start activator, is based to prepend ListItem slot |
| append-activator  | Add content on end activator, is based to append ListItem slot    |

And props

| Property | Type             | Default   | Description                                          |
| :------- | :--------------- | :-------- | :--------------------------------------------------- |
| tag      | string           | div       | Specify a custom tag used on the root element.       |
| dark     | boolean          | false     | Force color theme on **dark**.                       |
| light    | boolean          | false     | Force color theme on **light**.                      |
| value    | number or string | undefined | Is key for group list used for List parent component |
| open     | boolean          | false     | Display ListItem Child                               |
| toggle   | function         | void      | call function List                                   |
| color    | string           | undefined | Add color scheme on your group list                  |

## ListItem {#list-item}

```svelte
<script>
	import { List, Icon, ListItem } from 'mytril';
</script>

<List style="width: 320px">
	<ListItem>
		<svelte:fragment slot="prepend">
			<Icon icon="mdi:account" />
		</svelte:fragment>
		Item 1
		<svelte:fragment slot="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem 2 ipsum dolor sit amet
			consectetur adipisicing elit. Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.
		</svelte:fragment>
	</ListItem>
</List>
```

| Property  | Type    | Default   | Description                                                                                                                                |
| :-------- | :------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| tag       | string  | div       | Specify a custom tag used on the root element.                                                                                             |
| dark      | boolean | false     | Force color theme on **dark**.                                                                                                             |
| light     | boolean | false     | Force color theme on **light**.                                                                                                            |
| text      | string  | -         | Add content directly on content area if you not use slot                                                                                   |
| link      | boolean | false     | Action on list for clickable and router with sveltekit                                                                                     |
| active    | boolean | false     | Add class _active_ on ListItem element                                                                                                     |
| color     | string  | undefined | Add color scheme on your list item, you can use **hex**, **rgb**, **rgba**, **x11** and Mytril [themes](/mytril/docs/customization/themes) |
| colorText | string  | undefined | Add color on text                                                                                                                          |
| rounded   | string  | undefined | Add [border radius](/mytril/docs/styles/border-radius) on ListItem                                                                         |

**ListItemTitle**

```svelte
<script>
	import { List, Icon, ListItem, ListItemTitle } from 'mytril';
</script>

<List style="width: 320px">
	<ListItem>
		<svelte:fragment slot="prepend">
			<Icon icon="mdi:account" />
		</svelte:fragment>

		<ListItemTitle>Title</ListItemTitle>
		<svelte:fragment slot="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem 2 ipsum dolor sit amet
			consectetur adipisicing elit. Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.
		</svelte:fragment>
	</ListItem>
</List>
```

| Property | Type   | Default | Description                                    |
| :------- | :----- | :------ | :--------------------------------------------- |
| tag      | string | div     | Specify a custom tag used on the root element. |

**ListItemSubtitle**

```svelte
<script>
	import { List, Icon, ListItem, ListItemTitle, ListItemSubtitle } from 'mytril';
</script>

<List style="width: 320px">
	<ListItem>
		<svelte:fragment slot="prepend">
			<Icon icon="mdi:account" />
		</svelte:fragment>

		<ListItemTitle>Title</ListItemTitle>
		<ListItemSubtitle>SubTitle</ListItemSubtitle>
		<svelte:fragment slot="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem 2 ipsum dolor sit amet
			consectetur adipisicing elit. Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.
		</svelte:fragment>
	</ListItem>
</List>
```

| Property | Type   | Default | Description                                    |
| :------- | :----- | :------ | :--------------------------------------------- |
| tag      | string | div     | Specify a custom tag used on the root element. |
