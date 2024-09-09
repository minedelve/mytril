---
title: Capitalize Text with JavaScript
description: Master text capitalization in JavaScript using Mytril's Capitalize function. Simplify and enhance your content formatting with ease.
---

<script lang="ts">
    import PackageRequired from "$lib/components/package-required.svelte";
</script>

# Capitalize Function in Mytril: Enhance Text with Proper Capitalization {#capitalize}

The Capitalize function is a powerful JavaScript tool available in the Mytril tools. It allows you to easily manage capitalization in words, sentences, or even large blocks of text, ensuring your content looks polished and professional.

<PackageRequired/>

## Why Use the Capitalize Function?

Proper capitalization is key to creating professional and easy-to-read content. Whether you're working on a blog post, a website, or an application, using the **Capitalize** function ensures that your text adheres to standard capitalization rules with minimal effort.

## How to Use the Capitalize Function

To get started, simply import the `capitalize` function from the **mytril-tools** package:

```js
import { capitalize } from 'mytril-tools';

const sentence = "hello, i'm Gimli ! are you ready to use Mytril packages ?";

const content = capitalize(sentence);
console.log(content);
//Output:  Hello, i'm Gimli ! Are you ready to use Mytril packages ?
```

This example demonstrates how the Capitalize function can transform a basic sentence into properly capitalized text, enhancing readability and presentation.

### Params {#params}

The `capitalize` function accepts a single parameter:

- **string (required):** The text you want to capitalize.
