const { Products } = require("../../models");

exports.AddProduct = async (req, res, next) => {
  try {
     // const product = await Products.create(req.body);
    res.status(200).json({
      status: 200,
      success: true,
      message: "Product added successfully",
      data: req.body,
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
    else products = await Products.findAll();
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

