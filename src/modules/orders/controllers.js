const { sequelize } = require("../../config/mysql");
const { Orders, OrItems } = require("../../models");

exports.CreateOrder = async (req, res, next) => {
  try {
    let user_id = req.isAdmin ? req.body.user_id : req.user_id;
    const Order = await Orders.create({
      user_id: user_id,
      created_by: req.user_id,
      ...req.body,
    });
    if (!Order) {
      return res.status(401).json({
        status: 403,
        success: false,
        message: "Something went wrong! Order not created",
      });
    }
    const OrderItems = OrItems.bulkCreate(
      _.map(req.body.order_items, (item) => ({
        ...item,
        created_by: req.user_id,
        order_id: Order.id,
      }))
    );
    if (!OrderItems) {
      return res.status(401).json({
        status: 403,
        success: false,
        message: "Something went wrong! Order Items not created",
      });
    }

    res.status(201).json({
      status: 201,
      success: true,
      data: Order,
      message: "Order created successfully",
    });
  } catch (error) {
    next(error);
  }
};
