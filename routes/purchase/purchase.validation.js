const Joi = require('@hapi/joi');

module.exports = {
  add: Joi.object({
    category: Joi
      .string()
      .required(),
    amount: Joi
      .number()
      .required(),
    userId: Joi
      .string()
      .regex(/^\d+$/)
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
