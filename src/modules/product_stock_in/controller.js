const { Products, PrVariations } = require("../../models");
const PrStockIn = require("./model");

exports.AddStock = async (req, res, next) => {
  try {
    const stockin = await PrStockIn.create({
      ...req.body,
      created_by: req.user_id,
    });
    res.status(201).json({
      status: 201,
      success: true,
      message: "Stock added successfully",
    });
  } catch (error) {
    next(error);
  }
};
exports.GetStock = async (req, res, next) => {
  try {
    let query = {
      include: [
        {
          model: Products,
          as: "product",
        },
        {
          model: PrVariations,
          as: "variation",
        },
      ],
    };
    if (req.params.variation_id) {
      query.where = {
        variation_id: req.params.variation_id,
      };
    }
    let stockin = await PrStockIn.findAndCountAll(query);
    res.status(201).json({
      status: 201,
      success: true,
      data: stockin,
      message: "Stock fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};
