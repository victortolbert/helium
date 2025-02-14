---
title: Button
thumbnail:
url:
date: 2025-02-04
---


## Usage

### Label

Use the default slot to set the label of the Button.


You can achieve the same result by using the `label` prop.


<div class="bg-[var(--ui-bg-elevated)] py-16 rounded-lg">
<div class="flex gap-4">

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
