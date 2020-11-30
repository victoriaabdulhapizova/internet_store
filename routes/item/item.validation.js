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
    itemId: Joi
      .string()
      .regex(/^\d+$/)
      .required(),
  }),

  id: Joi.object({
    itemId: Joi
      .string()
      .regex(/^\d+$/)
      .required(),
  }),
};
