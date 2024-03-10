const { SubCategories, Categories } = require("../../models");
const { Op } = require("sequelize");
const { defaultAttributes } = require("./attributes");

exports.CreateSubCategory = async (req, res, next) => {
  try {
    const subcategory = await SubCategories.create({
      ...req.body,
      updated_by: req.user_id,
      created_by: req.user_id,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Sub Category Created successfully",
      data: subcategory,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSubCategories = async (req, res, next) => {
  try {
    const categories = await SubCategories.findAll({
      attributes: defaultAttributes,
      include: [
        {
          model: Categories,
          as: "category",
        },
      ],
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
    if (req.body.verified === true) req.body.published_at = new Date();
    if (req.body.is_published === false) req.body.published_at = null;
    const category = await SubCategories.update(
      { ...req.body, updated_by: req.user_id },
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
      message: "Sub Category Deleted successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
