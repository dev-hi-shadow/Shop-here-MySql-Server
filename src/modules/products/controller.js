const {
  Products,
  PrVariations,
  Faqs,
  Brands,
  SubCategories,
  Categories,
  Units,
} = require("../../models");
const _ = require("lodash");
exports.AddProduct = async (req, res, next) => {
  try {
    const product = await Products.create({
      ...req.body,
      created_by: req.user_id,
    });
    if (!product) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Something went wrong",
        data: null,
      });
    }
    const product_variation = _.map(req.body.variations, (item) => ({
      ...item,
      created_by: req.user_id,
      updated_by: req.user_id,
      product_id: product.id,
    }));
    const ProductVariations = await PrVariations.bulkCreate(product_variation);
    let faqs = null;
    if (req.body.faqs) {
      faqs = _.map(req.body.faqs, (item) => ({
        ...item,
        created_by: req.user_id,
        updated_by: req.user_id,
        product_id: product.id,
      }));
      faqs = await Faqs.bulkCreate(faqs);
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: "Product added successfully",
      data: {
        product,
        ProductVariations,
        faqs,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.GetProducts = async (req, res, next) => {
  try {
    const query = {
      include: [
        {
          model: PrVariations,
        },
        {
          model: Brands,
          as : "brand"
        },
        {
          model: Categories,
          as : "category"
        },
        {
          model: SubCategories,
          as : "sub_category"
        },
        {
          model: Units,
          as : "unit"
        },
      ],
    };
    let products = null;
    if (req.params.id) products = await Products.findByPk(req.params.id, query);
    else products = await Products.findAndCountAll(query);
    res.status(200).json({
      status: 200,
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};
