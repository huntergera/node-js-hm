const schema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      minLength: 6,
      maxLength: 32,
      pattern: "\\S",
    },
    name: {
      type: "string",
      minLength: 3,
      maxLength: 255,
      pattern: "\\S",
    },
    brand: {
      type: "string",
      minLength: 1,
    },
    category: {
      type: "string",
      minLength: 3,
      pattern: "\\S",
    },
    gender: {
      type: "string",
      enum: ["Men", "Women", "Unisex"],
    },
    price: {
      type: "number",
      minimum: 0,
      multipleOf: 0.01,
    },
    currency: {
      type: "string",
      enum: ["UAH", "USD"],
    },
    colors: {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 1,
    },
    sizes: {
      type: "array",
      items: {
        type: "string",
        enum: ["XS", "S", "M", "L", "XL", "XXL"],
      },
    },
    material: {
      type: "object",
    },
    description: {
      type: "string",
    },
    care_instruction: {
      type: "array",
      items: {
        type: "string",
      },
    },
    stock: {
      type: "integer",
      minimum: 0,
    },
    rating: {
      type: "number",
      minimum: 0,
      maximum: 5,
    },
    reviews_count: {
      type: "integer",
      minimum: 0,
    },
    sku: {
      type: "string",
    },
    images: {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 1,
    },
  },
  required: [
    "id",
    "name",
    "brand",
    "category",
    "gender",
    "price",
    "currency",
    "colors",
    "sizes",
    "stock",
    "images",
  ],
  additionalProperties: true
}

export const schemaGoods = schema;