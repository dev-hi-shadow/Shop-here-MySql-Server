const Joi = require("joi");

module.exports = {
  createBrandJoiValidation: Joi.object().keys({
    name: Joi.string().required().label("name"),
    description: Joi.string().optional().label("Description"),
    image: Joi.string().optional().allow(null).label("Image"),
  }),
  updateBrandJoiValidation: Joi.object().keys({
    name: Joi.string().optional().label("Name"),
    is_published: Joi.boolean().optional().label("Published"),
    image: Joi.string().optional().label("Image"),
    verified: Joi.boolean().optional().label("Verified"),
    description: Joi.string().optional().label("Description"),
  }),
};
