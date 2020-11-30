const Joi = require('@hapi/joi');

module.exports = {
  filter: Joi.object({
    brandsId: Joi
      .array().items(Joi
        .string()
        .regex(/^\d+$/))
      .required(),
  }),

  add: Joi.object({
    name: Joi
      .string()
      .required(),
    price: Joi
      .number()
      .required(),
    brandId: Joi
      .string()
      .regex(/^\d+$/)
      .required(),
    purchaseId: Joi
      .string()
      .regex(/^\d+$/)
      .required(),
    filename: Joi
      .required(),
  }),

  update: Joi.object({
    name: Joi
      .string()
      .required(),
    price: Joi
      .number()
      .required(),
    id: Joi
      .string()
      .regex(/^\d+$/)
      .required(),
  }),

  delete: Joi.object({
    id: Joi
      .string()
      .regex(/^\d+$/)
      .required(),
  }),
};
