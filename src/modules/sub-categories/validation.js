const Joi = require("joi");

module.exports = {
  createSubCategoryJoiValidation: Joi.object().keys({
    name: Joi.string().required().label("Name"),
    category_id: Joi.number().required().label("Category"),
    image: Joi.string().optional().allow(null).label("Image"),
    description: Joi.string().optional().allow(null).label("Description"),
  }),
  updateSubCategoryJoiValidation: Joi.object().keys({
    name: Joi.string().optional().label("Name"),
    category_id: Joi.number().optional().label("Category"),
    is_published: Joi.boolean().optional().allow(false).label("Published"),
    image: Joi.string().optional().allow(null).label("Image"),
    description: Joi.string().optional().allow(null).label("Description"),
  }),
};
