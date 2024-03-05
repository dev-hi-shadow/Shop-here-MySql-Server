const { Users, SMSHISTORY } = require("../../models");
const JWT = require("jsonwebtoken");
const { Op } = require("sequelize");
const md5 = require("md5");
const RoleAttributes = require("../roles/attributes");
const Roles = require("../roles/model");
const { asyncEmailQueue, asyncSMSQueue } = require("../../helpers/Queue");

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
    // asyncSMSQueue
    //   .createJob({
    //     type: "NEW_SELLER_REGISTERED",
    //     data: user,
    //   })
    //   .retries(3)
    //   .save();
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
  try {
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
    let token = JWT.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      status: 200,
      data: { user, token },
    });
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    const profile = await Users.findByPk(req.user_id);
    if (!profile || !profile.toJSON()) {
      return res.status(400).json({
        status: false,
        message: "Something went wrong! Please try after sometime.",
      });
    }
    res.status(200).json({
      status: 200,
      success: true,
      message: "Profile fetched",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

const admins = async (req, res, next) => {
  try {
    const user = await Users.findAll({
      include: {
        model: Roles,
        as: "role",
        where: {
          name: "ADMIN",
        },
      },
    });
    await sendToAdmins(null, "profile fetched");
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};
module.exports = {
  Register,
  getProfile,
  login,
  admins,
};
