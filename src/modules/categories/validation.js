const Joi = require("joi");

module.exports = {
  createCategoryJoiValidation: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
  }),

  updateCategoryJoiValidation: Joi.object().keys({
    name: Joi.string().optional().label("Name"),
    description: Joi.string().optional().label("Description"),
    is_published: Joi.boolean().required().allow(false).label("Published"),
  }),
};
