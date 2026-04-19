const schema = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    properties: {
      price: { type: 'number' },
      amount: { type: 'number' },
    },
    required: ['price', 'amount'],
  },
};

export const schemaGoods = schema;
