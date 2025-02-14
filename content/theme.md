---
title: Theme
thumbnail:
url:
date: 2025-02-04
---

Theming takes a CSS-first configuration approach, you now customize your theme with CSS variables inside a `@theme` directive to define your project's custom design tokens, like fonts, colors, and breakpoints:

```css [main.css]
@import "tailwindcss";
@import "@nuxt/ui-pro";

@theme {
  --font-sans: 'Avenir Condensed', sans-serif;

  --color-skyrizi-dark-blue: #0e1d34;
  --color-skyrizi-blue: #00a3df;
  --color-skyrizi-blue-60: #66c8ec;
  --color-skyrizi-blue-30: #b2e3f5;
  --color-skyrizi-plum: #b41955;
  --color-skyrizi-slate-gray: #50535a;
  --color-skyrizi-slate-gray-55: #9fa0a4;
  --color-skyrizi-slate-gray-25: #d3d4d5;
  --color-skyrizi-gray: #e9eae8;
  --color-skyrizi-royal-blue: #004c97;
  --color-skyrizi-dark-navy-blue: #0e1d34;
  --color-skyrizi-mint-green: #6abc8d;
  --color-skyrizi-pine-green: #248a6b;
  --color-skyrizi-sandy-yellow: #f39200;
  --color-skyrizi-vermillion: #e84127;
  --color-skyrizi-fortify-green: #4dabb0;
  --color-skyrizi-motivate-blue: #0074bb;
  --color-skyrizi-advance-purple: #5f6dd1;
}
```

## Colors

| Color       | Default | Description                                                 |
| ----------- | ------- | ----------------------------------------------------------- |
| `primary`   | green   | Main brand color, used as the default color for components. |
| `secondary` | blue    | Secondary color to complement the primary color.            |
| `success`   | green   | Used for success states.                                    |
| `info`      | blue    | Used for informational states.                              |
| `warning`   | yellow  | Used for warning states.                                    |
| `error`     | red     | Used for form error validation states.                      |
| `neutral`   | slate   | Neutral color for backgrounds, text, etc.                   |

## Color Shades

```css
:root {
  --ui-primary: var(--ui-color-primary-500);
  --ui-secondary: var(--ui-color-secondary-500);
  --ui-success: var(--ui-color-success-500);
  --ui-info: var(--ui-color-info-500);
  --ui-warning: var(--ui-color-warning-500);
  --ui-error: var(--ui-color-error-500);
}
```

```css
.dark {
  --ui-primary: var(--ui-color-primary-400);
  --ui-secondary: var(--ui-color-secondary-400);
  --ui-success: var(--ui-color-success-400);
  --ui-info: var(--ui-color-info-400);
  --ui-warning: var(--ui-color-warning-400);
  --ui-error: var(--ui-color-error-400);
}

```

## Light Mode

```css
:root {
  /* Least prominent text */
  --ui-text-dimmed: var(--ui-color-neutral-400);
  /* Slightly muted text */
  --ui-text-muted: var(--ui-color-neutral-500);
  /* Moderately prominent text */
  --ui-text-toned: var(--ui-color-neutral-600);
  /* Default text color */
  --ui-text: var(--ui-color-neutral-700);
  /* Most prominent text */
  --ui-text-highlighted: var(--ui-color-neutral-900);

  /* Main background color */
  --ui-bg: var(--color-white);
  /* Subtle background */
  --ui-bg-muted: var(--ui-color-neutral-50);
  /* Slightly elevated background */
  --ui-bg-elevated: var(--ui-color-neutral-100);
  /* More prominent background */
  --ui-bg-accented: var(--ui-color-neutral-200);
  /* Inverted background color */
  --ui-bg-inverted: var(--ui-color-neutral-900);

  /* Default border color */
  --ui-border: var(--ui-color-neutral-200);
  /* Subtle border */
  --ui-border-muted: var(--ui-color-neutral-200);
  /* More prominent border */
  --ui-border-accented: var(--ui-color-neutral-300);
  /* Inverted border color */
  --ui-border-inverted: var(--ui-color-neutral-900);
}
```

## Dark Mode

```css
.dark {
  /* Least prominent text */
  --ui-text-dimmed: var(--ui-color-neutral-500);
  /* Slightly muted text */
  --ui-text-muted: var(--ui-color-neutral-400);
  /* Moderately prominent text */
  --ui-text-toned: var(--ui-color-neutral-300);
  /* Default text color */
  --ui-text: var(--ui-color-neutral-200);
  /* Most prominent text */
  --ui-text-highlighted: var(--color-white);

  /* Main background color */
  --ui-bg: var(--ui-color-neutral-900);
  /* Subtle background */
  --ui-bg-muted: var(--ui-color-neutral-800);
  /* Slightly elevated background */
  --ui-bg-elevated: var(--ui-color-neutral-800);
  /* More prominent background */
  --ui-bg-accented: var(--ui-color-neutral-700);
  /* Inverted background color */
  --ui-bg-inverted: var(--color-white);

  /* Default border color */
  --ui-border: var(--ui-color-neutral-800);
  /* Subtle border */
  --ui-border-muted: var(--ui-color-neutral-700);
  /* More prominent border */
  --ui-border-accented: var(--ui-color-neutral-700);
  /* Inverted border color */
  --ui-border-inverted: var(--color-white);
}
```
