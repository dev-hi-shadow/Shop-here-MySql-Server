const { SubCategories } = require("../../models");
const { Op } = require("sequelize");
const { defaultAttributes } = require("./attributes");

exports.CreateSubCategory = async (req, res, next) => {
  try {
    const exists = await SubCategories.create({
      created_by: req.user_id,
      ...req.body,
    });
    res.status(201).json({
      status: true,
      message: "SubCategory Created successfully",
      data: exists,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSubCategories = async (req, res, next) => {
  try {
    const categories = await SubCategories.findAll({
      attributes: defaultAttributes,
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Sub Category fetched",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateSubCategory = async (req, res, next) => {
  try {
    const category = await SubCategories.update(
      { ...req.body },
      {
        where: req.params.id,
      }
    );
    res.status(200).json({
      status: 200,
      success: true,
      message: "Sub Category Updated Successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSubCategory = async (req, res, next) => {
  try {
    const category = await SubCategories.destroy({
      where: req.params.id,
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "SubCategory Deleted successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
