const { Products, PrVariations, Faqs } = require("../../models");
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
    let products = null;
    if (req.param.id)
      products = await Products.findOne({ where: { id: req.param.id } });
    else products = await Products.findAndCountAll();
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
