const Joi = require("joi");

module.exports = {
  createCategoryJoiValidation: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
  }),

  updateCategoryJoiValidation: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().optional().allow(null),
    is_published: Joi.boolean().required().allow(false),
    deleted_at: Joi.string().optional().allow(null),
    created_at: Joi.string().optional(),
    updated_at: Joi.string().optional(),
    published_at: Joi.string().optional(),
  }),
};
