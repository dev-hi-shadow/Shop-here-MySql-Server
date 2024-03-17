const { SubCategoryTax, SubCategories, Taxes } = require("../../models");
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
      include: [
        {
          model: SubCategories,
        },
        {
          model: Taxes,
        },
      ],
      attributes: defaultAttributes,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Fetched in Sub Category Taxes",
      data: subcategory_tax,
    });
  } catch (error) {
    next(error);
  }
};
