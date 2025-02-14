---
title:
section:
head:
  title: Capitalize text with JavaScript
  description: Master text capitalization in JavaScript using Mytril's useCapitalize function. Simplify and enhance your content formatting with ease.
features:
  legacy: 0.4.14
---

# useCapitalize function in Mytril: Enhance text with proper capitalization {#capitalize}

The Capitalize function is a powerful JavaScript tool available in the Mytril. It allows you to easily manage capitalization in words, sentences, or even large blocks of text, ensuring your content looks polished and professional.

## Why use the capitalize function?

Proper capitalization is key to creating professional and easy-to-read content. Whether you're working on a blog post, a website, or an application, using the **useCapitalize** function ensures that your text adheres to standard capitalization rules with minimal effort.

## How to use the capitalize function

To get started, simply import the `useCapitalize` function from the **mytril** package:

```js
import { useCapitalize } from 'mytril/tools';

const sentence = "hello, i'm Gimli ! are you ready to use Mytril packages ?";

const content = useCapitalize(sentence);
console.log(content);
//Output:  Hello, i'm Gimli ! Are you ready to use Mytril packages ?
```

This example demonstrates how the Capitalize function can transform a basic sentence into properly capitalized text, enhancing readability and presentation.

### Params {#params}

The `useCapitalize` function accepts a single parameter:

- **string (required):** The text you want to capitalize.
