const Joi = require("joi");

module.exports = {
  RegisterJoiSchema: Joi.object().keys({
    fullname: Joi.string().required().label("fullname"),
    email: Joi.string().email().required().label("email"),
    password: Joi.string().min(8).required().label("password"),
    confirm_password: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .label("confirm_password"),
    phone: Joi.number().required().label("phone"),
    role_id: Joi.number().required().label("role_id"),
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
