const { Categories } = require("../../models");
const { Op } = require("sequelize");
const { defaultAttributes } = require("./attributes");

exports.CreateCategory = async (req, res, next) => {
  try {
    const exists = await Categories.create({
      created_by: req.user_id,
      ...req.body,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Category Created successfully",
      data: exists,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll({
      attributes: defaultAttributes,
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Categories fetched",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Categories.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Category Updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Categories.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Category Deleted successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
