```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": [
    "@tsconfig/node23/tsconfig.json",
    "@tsconfig/strictest/tsconfig.json"
  ]
}
```

----

```json
{
  "devDependencies": {
    "@tsconfig/node23": "^23.0.0",
    "@tsconfig/strictest": "^2.0.5",
    "@types/node": "^22.13.4",
    "tsx": "^4.19.2"
  }
}
```

----

```json
{
  // https://v3.nuxtjs.org/concepts/typescript
  "extends": "./.nuxt/tsconfig.json"
}
```
