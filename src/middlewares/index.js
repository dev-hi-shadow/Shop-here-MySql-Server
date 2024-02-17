const JWT = require("jsonwebtoken");
const Users = require("../modules/users/model");
const userAttributes = require("../modules/users/attributes");
const rolesAttributes = require("../modules/roles/attributes");
const Roles = require("../modules/roles/model");

exports.Auth = async (req, res, next) => {
  try {
    const token = req.headers["Authorization"].split(" ")[1];
    if (!token) {
      res.status(401).json({
        success: false,
        status: 401,
        message: "Please enter a token",
      });
    }
    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded.id) {
      return res.status(401).json({
        success: false,
        status: 401,
        message: "Unauthorized",
      });
    }
    const user = await Users.findByPk(decoded.id, {
      attributes: userAttributes.authAttributes,
      include: [
        {
          model: Roles,
          as: "role_id",
          attributes: rolesAttributes.defaultAttributes,
        },
      ],
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        status: 401,
        message: "!Unauthorized , Access Denied",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: "Your session has been expired  , Please login again ",
    });
  }
};

exports.restrictTo = (...roles) => {
  if (!roles.includes(req.user.role.name)) {
    return res.status(403).json({
      status: 403,
      success: false,
      message: "Unauthorized access",
      data: null,
    });
  }
  next();
};
