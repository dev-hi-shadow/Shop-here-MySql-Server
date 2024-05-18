const { SubCategories, Categories, SubCategoryTax } = require("../../models");
const { Op } = require("sequelize");
const subCategoryAttributes = require("./attributes");
const { sequelize } = require("../../config/mysql");
const { shortCategoryAttr } = require("../categories/attributes");

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
    const subcategories = await SubCategories.findAndCountAll({
      include: [
        {
          model: Categories,
          as: "category",
          attributes: shortCategoryAttr,
        },
      ],
      attributes: subCategoryAttributes.default,
    });

    res.status(200).json({
      status: 200,
      success: true,
      message: "Fetched Sub Categories",
      data: subcategories,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateSubCategory = async (req, res, next) => {
  try {
    if (req.body.verified === true) req.body.published_at = new Date();
    if (req.body.is_published === false) req.body.published_at = null;
    const subcategories = await SubCategories.update(
      { ...req.body, updated_by: req.user_id },
      {
        where: req.params.id,
      }
    );
    res.status(200).json({
      status: 200,
      success: true,
      message: "Sub Category Updated Successfully",
      data: subcategories,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSubCategory = async (req, res, next) => {
  try {
    const subcategories = await SubCategories.destroy({
      where: req.params.id,
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Sub Category Deleted successfully",
      data: subcategories,
    });
  } catch (error) {
    next(error);
  }
};
