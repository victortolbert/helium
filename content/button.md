---
title: Button
thumbnail:
url:
date: 2025-02-04
---

<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M216 116v36a80 80 0 0 1-80 80c-44.18 0-55.81-24-93.32-90a20 20 0 0 1 34.64-20L96 152V44a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0" opacity=".2"/><path d="M196 88a27.86 27.86 0 0 0-13.35 3.39A28 28 0 0 0 144 74.7V44a28 28 0 0 0-56 0v80l-3.82-6.13A28 28 0 0 0 35.73 146l4.67 8.23C74.81 214.89 89.05 240 136 240a88.1 88.1 0 0 0 88-88v-36a28 28 0 0 0-28-28m12 64a72.08 72.08 0 0 1-72 72c-37.63 0-47.84-18-81.68-77.68l-4.69-8.27V138A12 12 0 0 1 54 121.61a11.9 11.9 0 0 1 6-1.6a12 12 0 0 1 10.41 6a2 2 0 0 0 .14.23l18.67 30A8 8 0 0 0 104 152V44a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0v20a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0Z"/></g></svg>

## Usage

### Label

Use the default slot to set the label of the Button.

You can achieve the same result by using the `label` prop.

<div class="bg-[var(--ui-bg-elevated)] py-16 rounded-lg">
<div class="flex justify-center gap-4">

:u-button{label="Primary" color="primary"}

:u-button{label="Secondary" color="primary" variant="outline"}

</div>
</div>

::code-group

```html [button.html]
<button class="button is-primary">
  Button Label
</button>
```

```css [button.css]
.button {
  &.is-primary {}
  &.is-secondary {}
}

```

```ts [button.ts]
export function Button () {
  console.log('button')
}

```

::

## API

### Props

| Prop    | Description | Default | Type                     |
| ------- | ----------- | ------- | ------------------------ |
| `label` |             |         | `string`{lang="ts-type"} |

### Slots
