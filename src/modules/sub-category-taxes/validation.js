const Joi = require("joi");

module.exports = {
  CreateSubCategoryTaxesJoiValidation: Joi.object().keys({
    sub_category_id: Joi.number().required().label("Sub Category ID"),
    tax_id: Joi.number().required().label("Tax ID"),
    percentage: Joi.number().required().label("Percentage"),
  }),
};
