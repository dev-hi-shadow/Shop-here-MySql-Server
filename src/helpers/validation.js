const Joi = require("joi");

module.exports = {
  SendEmailValidation: Joi.object().keys({
    template_name: Joi.string().required("please enter a valid template name"),
    params: Joi.object().required(),
    subject: Joi.string().required("please enter a valid subject"),
  }),
  SendSMSValidation: Joi.object().keys({
    to: Joi.string().required("please enter valid phone number"),
    message: Joi.string().required("please enter valid message"),
  }),
};
