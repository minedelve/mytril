---
title: content
description: jsp
---

# Use prose class for your content {#content-styles}

To ensure that your content is rendered in perfect harmony with the rest of your design, Mytril offers display classes via `.prose`.

To take advantage of this, you need to apply the class to the parent html element of your content.

```html
<article class="prose">
	<h1>H1 use prose.css h1</h1>
</article>
```

## Code

By default, Mytril integrates full colorimetry for **code** and **pre** display in your content.

```css
.prose {
	--code--operator: #89ddff;
	--code--punctuation: #89ddff;
	--code--comment: #616161;
	--code--property: #80cbc4;
	--code--function: #c792ea;
	--code--boolean: #c792ea;
	--code--atrule: #c792ea;
	--code--tag: #f66;
	--code--keyword: #f66;
	--code--selector: #f66;
	--code--attr-name: #ffcb6b;
	--code--attr-value: #a5e844;
	--code--attribute: #a5e844;
}
```
