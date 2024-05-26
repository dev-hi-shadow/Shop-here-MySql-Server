const { Op } = require("sequelize");
const {
  Categories,
  Products,
  PrVariations,
  SubCategories,
  Brands,
} = require("../../models");
const { getTableFilters } = require("../../helpers");
const categoryAttributes = require("../categories/attributes");
const subcategoryAttributes = require("../sub-categories/attributes");
const productsAttributes = require("../products/attributes");
const brandsAttribute = require("../brand/attributes");
const prVariationsAttributes = require("../product-variations/attributes");

exports.Search = async (req, res, next) => {
  try {
    const { keyword } = req.params;
    if (!keyword) {
      return;
    }
    let query = {
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      },
      ...getTableFilters(req),
      distinct: true,
    };

    const categories = await Categories.findAndCountAll({
      ...query,
      attributes: categoryAttributes.searchAttributes,
    });
    const sub_categories = await SubCategories.findAndCountAll({
      ...query,
      attributes: subcategoryAttributes.searchAttributes,
    });
    const brands = await Brands.findAndCountAll({
      ...query,
      attributes: brandsAttribute.searchAttributes,
    });

    // const offers = await Offers.findAndCountAll({
    //   ...query,
    //   attributes: brandsAttribute.searchAttributes,
    // });

    const products = await Products.findAndCountAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${keyword}%` } },
          { "$brand.name$": { [Op.like]: `%${keyword}%` } },
          { "$category.name$": { [Op.like]: `%${keyword}%` } },
          { "$variations.variation_name$": { [Op.like]: `%${keyword}%` } },
          { "$sub_category.name$": { [Op.like]: `%${keyword}%` } },
        ],
      },
      include: [
        {
          model: Categories,
          as: "category",
          attributes: categoryAttributes.searchAttributes,
          required: false,
        },
        {
          model: Brands,
          as: "brand",
          attributes: brandsAttribute.searchAttributes,
          required: false,
        },
        {
          model: SubCategories,
          as: "sub_category",
          attributes: subcategoryAttributes.searchAttributes,
          required: false,
        },
        {
          model: PrVariations,
          as: "variations",
          required: false,
          attributes: prVariationsAttributes.searchAttributes,
        },
      ],
      distinct: true,
      attributes: productsAttributes.searchAttributes,
    });

    res.status(200).json({
      status: 200,
      success: true,
      data: {
        brands,
        categories,
        sub_categories,
        products,
      },
    });
  } catch (error) {
    next(error);
  }
};
