---
title: Capitalize toolkit
module:
    - tools
---

# Capitalize {#capitalize}

Capitalize is a javaScript function that allows you to manage capital letters in a word, a sentence or long content.

```js
import { capitalize } from 'mytril-tools';

const sentence = "hello, i'm Gimli ! are you ready to use Mytril packages ?"

const content = capitalize(sentence);
console.log(content)
// Hello, i'm Gimli ! Are you ready to use Mytril packages ?
```

## Params {#params}

1 params only, type string is required.