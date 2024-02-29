const Users = require("./model");
const JWT = require("jsonwebtoken");
const { Op } = require("sequelize");
const md5 = require("md5");

const Register = async (req, res, next) => {
  console.log("req.body", req.body);
  const user = await Users.create({
    ...req.body,
    password: md5(req.body.password),
  });
  if (!user) {
    return res.status(400).json({
      status: false,
      message: "Something went wrong! Please try after sometime.",
    });
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

module.exports = {
  Register,
  login,
};
