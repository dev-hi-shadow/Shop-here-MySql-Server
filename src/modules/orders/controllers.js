const { sequelize } = require("../../config/mysql");
const {
  Orders,
  OrItems,
  PrStockOut,
  Addresses,
  PrVariations,
  Products,
  PrStockIn,
} = require("../../models");
const _ = require("lodash");

exports.CreateOrder = async (req, res, next) => {
  const transaction = await sequelize.transaction(); // Start a transaction
  try {
    let isAvailableStock = await Promise.all(
      req.body.order_items.map(async (item) => {
        try {
           let query = {
            where: {
              product_id: item.product_id,
              variation_id: item.variation_id,
            },
          };
          let StockIn = await PrStockIn.findOne(query);
          console.log("🚀  StockIn:", StockIn);
          let StockOut = await PrStockOut.findOne(query);
          console.log("🚀  StockOut:", StockOut);
          let availableStock =
            StockIn.toJSON().quantity - StockOut.toJSON().quantity;
          return {
            variation_id: item.variation_id,
            availableStock: availableStock,
          };
        } catch (error) {
          console.error("Error fetching stock:", error);
          throw error; // Rethrow the error to be caught later
        }
      })
    );

    console.log("Available stock for each item:", isAvailableStock);

    // let user_id = req.isAdmin ? req.body.user_id : req.user_id;
    // const Order = await Orders.create(
    //   {
    //     user_id: user_id,
    //     created_by: req.user_id,
    //     ...req.body,
    //   },
    //   { transaction }
    // );
    // await OrItems.bulkCreate(
    //   req.body.order_items.map((item) => ({
    //     ...item,
    //     created_by: req.user_id,
    //     order_id: Order.id,
    //   })),
    //   { transaction }
    // );
    // await PrStockOut.bulkCreate(
    //   req.body.order_items.map((item) => ({
    //     ...item,
    //     created_by: req.user_id,
    //     order_id: Order.id,
    //     destination: item.destination || "ORDER_FROM_CUSTOMER",
    //     created_by: req.user_id,
    //     updated_by: req.user_id,
    //   })),
    //   { transaction }
    // );

    await transaction.commit();

    res.status(201).json({
      status: 201,
      success: true,
      message: "Order created successfully",
    });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};

exports.GetOrders = async (req, res, next) => {
  try {
    let query = {
      include: [
        {
          model: Addresses,
          as: "billing_address",
        },
        {
          model: Addresses,
          as: "shipping_address",
        },
        {
          model: OrItems,
          as: "items",
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
        },
      ],
    };

    if (!req.isAdmin) query.where = { created_by: req.user_id };
    let Order = null;
    if (req.params.id) {
      Order = await Orders.findByPk(req.params.id, query);
    } else {
      Order = await Orders.findAndCountAll(query);
    }
    res.status(200).json({
      status: 200,
      success: true,
      message: "Order fetched successfully",
      Order,
    });
  } catch (error) {
    next(error);
  }
};
