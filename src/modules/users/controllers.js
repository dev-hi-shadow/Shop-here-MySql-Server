const Users = require("./model");
const JWT = require("jsonwebtoken");
 const { Op } = require("sequelize");
const md5 = require("md5");

const Register = async (req, res, next) => {
  let { fullname, username, email, password, phone, role_id } = req.body;
  if (!fullname || !username || !email || !password || !role_id) {
    return res.status(400).json({
      status: false,
      message: "Please fill all the fields",
    });
  }
  if (username || email || phone) {
    const exists = await Users.findOne({
      where: {
        [Op.or]: [{ username }, { email }, { phone }],
      },
    });
    if (exists) {
      console.log(exists);
      return res.status(400).json({
        status: false,
        message: "Username already exists , please enter a different username",
        hint_message: "You can change your username after registration.",
      });
    }
  }
  if (password) {
    password = await md5(password);
  }
  const user = await Users.create({
    fullname,
    email,
    password,
    phone,
    role_id,
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
  const isMatch = md5(password) === user.password;
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
