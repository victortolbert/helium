---
title: Color
---

```css
@theme {
  --color-neutral-50: var(--ui-color-neutral-50);
  --color-neutral-100: var(--ui-color-neutral-100);
  --color-neutral-200: var(--ui-color-neutral-200);
  --color-neutral-300: var(--ui-color-neutral-300);
  --color-neutral-400: var(--ui-color-neutral-400);
  --color-neutral-500: var(--ui-color-neutral-500);
  --color-neutral-600: var(--ui-color-neutral-600);
  --color-neutral-700: var(--ui-color-neutral-700);
  --color-neutral-800: var(--ui-color-neutral-800);
  --color-neutral-900: var(--ui-color-neutral-900);
  --color-neutral-950: var(--ui-color-neutral-950);

  --color-primary-50: var(--ui-color-primary-50);
  --color-primary-100: var(--ui-color-primary-100);
  --color-primary-200: var(--ui-color-primary-200);
  --color-primary-300: var(--ui-color-primary-300);
  --color-primary-400: var(--ui-color-primary-400);
  --color-primary-500: var(--ui-color-primary-500);
  --color-primary-600: var(--ui-color-primary-600);
  --color-primary-700: var(--ui-color-primary-700);
  --color-primary-800: var(--ui-color-primary-800);
  --color-primary-900: var(--ui-color-primary-900);
  --color-primary-950: var(--ui-color-primary-950);

  --color-secondary-50: var(--ui-color-secondary-50);
  --color-secondary-100: var(--ui-color-secondary-100);
  --color-secondary-200: var(--ui-color-secondary-200);
  --color-secondary-300: var(--ui-color-secondary-300);
  --color-secondary-400: var(--ui-color-secondary-400);
  --color-secondary-500: var(--ui-color-secondary-500);
  --color-secondary-600: var(--ui-color-secondary-600);
  --color-secondary-700: var(--ui-color-secondary-700);
  --color-secondary-800: var(--ui-color-secondary-800);
  --color-secondary-900: var(--ui-color-secondary-900);
  --color-secondary-950: var(--ui-color-secondary-950);

  --color-tertiary-50: var(--ui-color-tertiary-50);
  --color-tertiary-100: var(--ui-color-tertiary-100);
  --color-tertiary-200: var(--ui-color-tertiary-200);
  --color-tertiary-300: var(--ui-color-tertiary-300);
  --color-tertiary-400: var(--ui-color-tertiary-400);
  --color-tertiary-500: var(--ui-color-tertiary-500);
  --color-tertiary-600: var(--ui-color-tertiary-600);
  --color-tertiary-700: var(--ui-color-tertiary-700);
  --color-tertiary-800: var(--ui-color-tertiary-800);
  --color-tertiary-900: var(--ui-color-tertiary-900);
  --color-tertiary-950: var(--ui-color-tertiary-950);

  --color-remarkable-light: #f7634f;
  --color-remarkable-dark: #cf451c;
  --color-curious-light: #479ff8;
  --color-curious-dark: #0066f5;
  --color-purposeful-light: #a86bde;
  --color-purposeful-dark: #8a2ecc;
  --color-abbvie-extra-light: #fafbff;
  --color-abbvie-light: #f1f3ff;
  --color-abbvie-medium: #a6b5e0;
  --color-abbvie-dark: #071d49;
  --color-abbvie-medium-gray: #b9b4b4;

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


  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --color-avocado-400: oklch(0.92 0.19 114.08);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);

  --color-green-50: #effdf5;
  --color-green-100: #d9fbe8;
  --color-green-200: #b3f5d1;
  --color-green-300: #75edae;
  --color-green-400: #00dc82;
  --color-green-500: #00c16a;
  --color-green-600: #00a155;
  --color-green-700: #007f45;
  --color-green-800: #016538;
  --color-green-900: #0a5331;
  --color-green-950: #052e16;

  --color-skyrizi: #00a3df;
  --color-humira: #95004d;
  --color-stelara: #663490;
  --color-otezla: #013a5d;
  --color-tremfya: #00bacc;
  --color-enbrel: #0f9898;
  --color-taltz: #69aa67;
  --color-cosentyx: #df6ca9;
  --color-sotyktu: #492bdd;
  --color-cimzia: #22834b;

  --color-critical: #cf451c;
  --color-high-risk: #ff971e;
  --color-at-risk: #faee02;
  --color-low-risk: #81e0a9;
  --color-on-track: #338700;

  --color-primary: var(--ui-primary);
  --color-secondary: var(--ui-secondary);
  --color-error: var(--ui-error);
  --color-warning: var(--ui-warning);
  --color-success: var(--ui-success);
  --color-info: var(--ui-info);
}
```
