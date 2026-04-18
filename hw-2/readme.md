### Types

- type "string"
- type:  "number"
- type: "integer"
- type: "boolean"
- type: "array"
- type: "object"
- type: "null"

#### String
```js
{
  type: "string",
  minLength: 2,
  maxLength: 10,
  pattern: "^[A-Za-z]+$",
  default: "user"
}
```

#### Number
```js
{
  type: "number",
  minimum: 0,
  maximum: 100,
  multipleOf: 0.5
}
```

#### Number fraction case
```js
{
  type: "number",
  not: { type: "integer" },
  multipleOf: 0.0000001
}
```


#### Array
```js
{
  type: "array",
  items: { type: "string" },
  minItems: 1,
  uniqueItems: true
}
```

```js
{
  "type": "array",
  "items": {
    "anyOf": [
      { "type": "string" },
      { "type": "number" },
      { "type": "boolean" }
    ]
  }
}
```
```js
{
  "type": "array",
  "items": [
    { "type": "string" },
    { "type": "number" },
    { "type": "object" }
  ]
}
```

#### Include

```js
{
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        email: { type: "string" }
      }
    }
  }
}
```

#### Email and other formats

```js
npm install ajv-formats
```