const FormJsonValidator = () => {
  const radioSchema: any = {
    type: 'object',
    properties: {
      label: { type: 'string' },
      value: { type: 'string' },
    },
  };

  const itemSchema: any = {
    type: 'object',
    properties: {
      title: { type: 'string' },
      id: { type: 'string' },
      label: { type: 'string' },
      type: { type: 'string' },
      name: { type: 'string' },
      placeholder: { type: 'string' },
      value: { type: 'boolean' },
      defaultValue: { type: 'string' },
      defaultChecked: { type: 'boolean' },
      radioValues: { type: 'array', items: radioSchema },
      min: { type: 'integer' },
      max: { type: 'integer' },
    },
    required: ['id', 'name', 'type'],
  };

  const mainSchema: any = {
    type: 'object',
    properties: {
      title: { type: 'string' },
      items: {
        type: 'array',
        items: itemSchema,
      },
      buttons: { type: 'array' },
    },
    required: ['items'],
    additionalProperties: false,
  };

  console.log(mainSchema);
};

export default FormJsonValidator;
