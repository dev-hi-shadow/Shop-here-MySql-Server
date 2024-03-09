const Joi = require("joi");

module.exports = {
  createUnitJoiValidation: Joi.object().keys({
    name: Joi.string().required().label("Name"),
    short_form: Joi.string().required().label("Short Name"),
  }),
  UpdateUnitJoiValidation: Joi.object().keys({
    name: Joi.string().optional().label("Name"),
    short_form: Joi.string().optional().label("Short Name"),
  }),
  v,
};
