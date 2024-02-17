const Roles = require("./model");

const GetAllRoles = async (req, res, next) => {
  try {
    const roles = await Roles.findAll({ plain: true, raw: true });
    res.status(200).json({
      status: true,
      message: "Roles fetched successfully",
      data: roles,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, status: 500, message: error.message });
  }
};
const CreateRole = async (req, res, next) => {
  try {
    const { name } = req.body;
    const roles = await Roles.create({ name });
    res.status(201).json({
      status: true,
      message: "Roles Created successfully",
      data: roles,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, status: 500, message: error.message });
  }
};

module.exports = {
  GetAllRoles,
  CreateRole,
};
