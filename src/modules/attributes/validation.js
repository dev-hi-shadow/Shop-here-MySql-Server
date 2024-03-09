const Joi = require("joi");

module.exports = {
  CreateAttributeJoiValidation: Joi.object().keys({
    name: Joi.string().required().label("Name"),
  }),
  UpdateAttributeJoiValidation: Joi.object().keys({
    name: Joi.string().optional().label("Name"),
    attribute_id: Joi.number().optional().allow(0),
  }),
};