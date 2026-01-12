# 📘 Handling DOM Elements in TypeScript

When working with the DOM in TypeScript, things are stricter than JavaScript.
This is a good thing—it helps prevent runtime errors—but it requires understanding DOM types and null safety.

#### 🚨 Key Difference Between JavaScript & TypeScript

```js
const h2 = document.querySelector("h2");
h2.innerText = "Hello";
```

In TypeScript:

```ts
const h2 = document.querySelector("h2");
// ❌ Error: Object is possibly 'null'
```

Why?

querySelector might return null

TypeScript forces you to handle that case

```sql

| HTML Element | TypeScript Type      |
| ------------ | -------------------- |
| `<h1>–<h6>`  | `HTMLHeadingElement` |
| `<button>`   | `HTMLButtonElement`  |
| `<input>`    | `HTMLInputElement`   |
| `<form>`     | `HTMLFormElement`    |
| `<div>`      | `HTMLDivElement`     |
| `<span>`     | `HTMLSpanElement`    |


```

### Best Ways to Select DOM Elements

1️⃣ Using Generics (Recommended)

```js
const h2 = document.querySelector < HTMLHeadingElement > "h2";
const btn = document.querySelector < HTMLButtonElement > ".btn";
```

2️⃣ Using Type Assertions

Use this only when you are 100% sure the element exists.

```js
const h2 = document.querySelector("h2") as HTMLHeadingElement;

```

### 2: Always Handle null

Since elements might not exist, check before using:

```js
if (h2) {
  h2.innerText = "Hello";
}

or

h2?.innerText = "Hello";


```

### 3: Numbers Must Be Converted to Strings

DOM text properties accept strings only.

```js
h2.innerText = count.toString();
```

```bash
| Mistake                          | Why It’s Wrong                            |
| -------------------------------- | ----------------------------------------- |
| `Number`, `String`, `Boolean`    | These are object wrappers, not primitives |
| Ignoring `null`                  | Causes runtime crashes                    |
| Assigning numbers to `innerText` | DOM expects strings                       |

```
