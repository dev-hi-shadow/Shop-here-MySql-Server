const Joi = require("joi");

module.exports = {
  createBrandJoiValidation: Joi.object().keys({
    name: Joi.string().required(),
    is_published: Joi.boolean().optional().allow(false),
    image: Joi.string().optional().allow(null),
    published_at: Joi.string().optional(),
  }),
  updateBrandJoiValidation: Joi.object().keys({
    name: Joi.string().optional(),
    is_published: Joi.boolean().optional(),
    image: Joi.string().optional(),
    published_at: Joi.string().optional(),
  }),
};
