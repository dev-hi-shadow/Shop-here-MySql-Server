const Users = require("./model");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Roles = require("../roles/model");

const Register = async (req, res, next) => {
  let { name, email, password, phone, role_id } = req.body;
  if (!name || !email || !password || !role_id) {
    return res.status(400).json({
      status: false,
      message: "Please fill all the fields",
    });
  }
  if (password) {
    password = await bcrypt.hash(password, 12);
  }
  const user = await Users.create({ name, email, password, phone, role_id });
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
    data: user,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Please fill all the fields",
    });
  }
  let user = await Users.findOne({
    where: { email },
  });
   if (!user) {
    return res.status(400).json({
      status: false,
      message: "Invalid email ",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      status: false,
      message: "Invalid password",
    });
  }
  let token = await JWT.sign(user.id, process.env.JWT_SECRET_KEY);
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
