const Joi = require("joi");

module.exports = {
  RegisterJoiSchema: Joi.object().keys({
    address: Joi.string().required().label("Address"),
    city: Joi.string().required().label("City"),
    state: Joi.string().required().label("State"),
    country: Joi.string().required().label("Country"),
    is_primary: Joi.boolean().required().label("Is Primary"),
    postal_code: Joi.number().required().label("Postal Code"),
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().optional().label("Last Name"),
    phone: Joi.number().required().label("phone"),
    date_of_birth: Joi.date().required().label("Date Of Birth"),
    email: Joi.string().email().required().label("email"),
    password: Joi.string().min(8).required().label("password"),
    confirm_password: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .label("confirm_password"),
    username: Joi.string().required().label("username"),
  }),

  loginJoiSchema: Joi.object().keys({
    credential: Joi.string().label("credential"),
    password: Joi.string().min(8).required().label("password"),
  }),

  updateUserJoiSchema: Joi.object().keys({
    name: Joi.string().label("Name"),
    email: Joi.string().email().label("email"),
    phone: Joi.string().label("phone"),
    role_id: Joi.number().label("role_id"),
    username: Joi.string().label("username"),
  }),

  deleteUserJoiSchema: Joi.object().keys({
    id: Joi.number().required(),
  }),

  ChangePasswordJoiSchema: Joi.object().keys({
    old_password: Joi.string().required(),
    password: Joi.string().required().min(8),
    confirm_password: Joi.string().required().valid(Joi.ref("password")),
  }),

  ForgotPasswordJoiSchema: Joi.object().keys({
    email: Joi.string().email().required(),
  }),

  ResetPasswordJoiSchema: Joi.object().keys({
    password: Joi.string().required().min(8),
    confirm_password: Joi.string().required().valid(Joi.ref("password")),
  }),
};
