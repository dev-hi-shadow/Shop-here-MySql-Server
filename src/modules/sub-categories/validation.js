const Joi = require("joi");

module.exports = {
  createSubCategoryJoiValidation: Joi.object().keys({
    name: Joi.string().required(),
    category_id: Joi.number().required(),
  }),

  updateSubCategoryJoiValidation: Joi.object().keys({
    name: Joi.string(),
    category_id: Joi.number(),
    is_published: Joi.boolean(),
    is_deleted: Joi.boolean(),
  }),
};
