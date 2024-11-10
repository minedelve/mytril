---
title: Responsive Component
description: jsp
---

# Responsive component with Mytril {#responsive-component-with-mytril}

## Using the responsive component {#using-the-responsive-component}

```svelte
<script>
	import { Responsive } from 'mytril';
</script>

<Responsive aspectRatio="16/9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Responsive>
```

| Property    | Type                | Default   | Description                                                                |
| :---------- | :------------------ | :-------- | :------------------------------------------------------------------------- |
| aspectRatio | string or undefined | undefined | Calculated as `width/height`. Will be calculated automatically if omitted. |
| inline      | boolean             | false     | Display as an inline element instead of a block, also disables flex-grow.  |
