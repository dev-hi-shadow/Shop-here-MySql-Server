const Joi = require("joi");

module.exports = {
  TaxJoiValidation: Joi.object().keys({
    name: Joi.string().required().label("Name"),
  }),
};
