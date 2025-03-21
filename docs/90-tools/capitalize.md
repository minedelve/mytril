---
title: Enhance text with proper capitalization
section: Capitalize
head:
  title: Capitalize text with JavaScript
  description: Master text capitalization in JavaScript using Mytril's Capitalize function. Simplify and enhance your content formatting with ease.
related:
  - /mytril/docs/getting-started/toolbar
  - /mytril/docs/components/cards
features:
  github: 90-tools/capitalize.md
  bug: 'Capitalize Tools'
  feature: 'Capitalize Tools'
---

<script>
  import Code from "$components-docs/code.svelte"
</script>

The Capitalize function is a powerful JavaScript tool available in the Mytril. It allows you to easily manage capitalization in words, sentences, or even large blocks of text, ensuring your content looks polished and professional.

## Why use the capitalize function?

Proper capitalization is key to creating professional and easy-to-read content. Whether you're working on a blog post, a website, or an application, using the **capitalize** function ensures that your text adheres to standard capitalization rules with minimal effort.

## How to use the capitalize function

To get started, simply import the `capitalize` function from the **mytril** package:

<Code>

```js
import { capitalize } from 'mytril/actions';

const sentence = "hello, i'm Gimli ! are you ready to use Mytril packages ?";

const content = capitalize(sentence);
console.log(content);
//Output:  Hello, i'm Gimli ! Are you ready to use Mytril packages ?
```

</Code>

This example demonstrates how the capitalize function can transform a basic sentence into properly capitalized text, enhancing readability and presentation.

### Params

The `capitalize` function accepts a single parameter:

- **string (required):** The text you want to capitalize.
