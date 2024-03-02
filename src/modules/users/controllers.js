const { Users } = require("../../models");
const JWT = require("jsonwebtoken");
const { Op } = require("sequelize");
const md5 = require("md5");
const RoleAttributes = require("../roles/attributes");
const Roles = require("../roles/model");
const { asyncEmailQueue } = require("../../helpers/Queue");
const { sendEmail } = require("../../services/nodemailer");

const Register = async (req, res, next) => {
  const user = await Users.create({
    ...req.body,
  });
  if (!user) {
    return res.status(400).json({
      status: false,
      message: "Something went wrong! Please try after sometime.",
    });
  }
  let role = await Roles.findByPk(user.role_id, {
    attributes: RoleAttributes.default,
  });

  if (!role || role.toJSON().name === "SELLER") {
    asyncEmailQueue
      .createJob({
        type: "NEW_SELLER_REGISTERED",
        data: user,
      })
      .retries(3)
      .save();
  }
  user.token = JWT.sign(user.id, process.env.JWT_SECRET_KEY);

  return res.status(200).json({
    success: true,
    status: 200,
    message: "Signup successfully",
    data: req.body,
  });
};

const login = async (req, res, next) => {
  const { credential, password } = req.body;

  let user = await Users.findOne({
    where: {
      [Op.or]: [
        {
          email: credential,
        },
        {
          phone: credential,
        },
      ],
    },
  });
  if (!user) {
    return res.status(400).json({
      status: false,
      message: "Invalid email ",
    });
  }
  const isMatch = md5(password) === user.password;
  if (!isMatch) {
    return res.status(400).json({
      status: false,
      message: "Invalid password",
    });
  }
  let token = JWT.sign(user.id, process.env.JWT_SECRET_KEY);
  return res.status(200).json({
    success: true,
    message: "Login successful",
    status: 200,
    data: { user, token },
  });
};

const admins = async (req, res, next) => {
  try {
    const data = {
      email: "gautamvajaseller@yopmail.com",
      password: "user@123",
      confirm_password: "user@123",
      fullname: "Seller Gautam Vaja",
      phone: 8876543210,
      role_id: 3,
      username: "seller_gautam",
    };
    const adminss = await Users.findAll({
      include: {
        model: Roles,
        as: "role",
        attributes: RoleAttributes.default,
        where: {
          name: "ADMIN",
        },
        required: true,
      },
    });
    for (let admin of adminss) {
      admin = admin.toJSON();
      await sendEmail(
        "new_seller_registered_admin_alert.ejs",
        {
          seller: data,
          user_data: admin
        },
        "New Seller Registered in Shop-Here.com",
        null,
        null
      );
    }
    res.status(200).send(adminss);
  } catch (error) {
    console.log("🚀  error:", error)
    return res
      .status(500)
      .json({ success: false, status: 500, message: error });
  }
};
module.exports = {
  Register,
  login,
  admins,
};
