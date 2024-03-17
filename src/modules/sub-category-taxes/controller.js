const { SubCategoryTax, SubCategories, Taxes } = require("../../models");
const { defaultAttributes } = require("./attributes");
const {
  defaultAttributes: SubCategoryAttributes,
} = require("../sub-categories/attributes");
const { defaultAttributes: TaxAttributes } = require("../taxes/attributes");

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
    const subcategory_tax = await SubCategoryTax.findAndCountAll({
      attributes: defaultAttributes,
      include: [
        {
          model: SubCategories,
          as: "sub_category",
          attributes: SubCategoryAttributes,
        },
        {
          model: Taxes,
          as: "tax",
          attributes: TaxAttributes,
        },
      ],
    });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Fetched Sub Category Taxes",
      data: subcategory_tax,
    });
  } catch (error) {
    next(error);
  }
};
