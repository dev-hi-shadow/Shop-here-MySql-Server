const Joi = require("joi");

module.exports = {
  CreateAddressJoiValidation: Joi.object().keys({
    user_id: Joi.number().optional().label("User Id"),
    address: Joi.string().required().label("Address"),
    city: Joi.string().required().label("City"),
    state: Joi.string().required().label("State"),
    country: Joi.string().required().label("Country"),
    postal_code: Joi.string().required().label("Postal Code"),
    is_primary: Joi.boolean().required().allow(false),
  }),

  UpdateAddressJoiValidation: Joi.object().keys({
    address: Joi.string().optional().label("Address"),
    city: Joi.string().optional().label("City"),
    state: Joi.string().optional().label("State"),
    country: Joi.string().optional().label("Country"),
    postal_code: Joi.string().optional().label("Postal Code"),
    is_primary: Joi.boolean().optional().allow(false),
  }),
};
