---
title: Prettier
---

```ts [prettier.config.js]
/** @type {import("prettier").Config} */
export default {
	plugins: [
		"prettier-plugin-tailwindcss",
	],
	tailwindStylesheet: "app/assets/css/main.css",
};
```
