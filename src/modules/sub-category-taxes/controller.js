const { SubCategoryTax } = require("../../models");
const { defaultAttributes } = require("./attributes");

exports.AddSubCategoryTax = async (req, res, next) => {
  try {
    const subcategory_tax = await SubCategoryTax.create({
      ...req.body,
      updated_by: req.user_id,
      created_by: req.user_id,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Tax added in Sub Category",
      data: subcategory_tax,
    });
  } catch (error) {
    next(error);
  }
};

exports.GetSubCategoryTaxes = async (req, res, next) => {
  try {
    const subcategory_tax = await SubCategoryTax.findAll({
      attributes: defaultAttributes,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Tax added in Sub Category",
      data: subcategory_tax,
    });
  } catch (error) {
    next(error);
  }
};
