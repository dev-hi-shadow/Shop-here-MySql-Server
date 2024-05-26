const { sequelize } = require("../../config/mysql");
const { PrVariations, Products } = require("../../models");
const CartItems = require("./model");
const productAttributes = require("../products/attributes");
const prVariationsAttr = require("../product-variations/attributes");
const cartItemsAttributes = require("../cart-items/attributes");

exports.AddToCart = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const variation = (
      await PrVariations.findByPk(req.body.variation_id, {
        attributes: ["retail_price", "id"],
        transaction,
      })
    ).toJSON();

    const cart = await CartItems.create(
      {
        created_by: req.user_id,
        product_id: req.body.product_id,
        variation_id: variation.id,
        price_on_add: variation.retail_price,
        quantity: req.body.quantity || 1,
      },
      {
        transaction,
      }
    );

    await transaction.commit();
    res.status(201).json({
      status: 201,
      success: true,
      message: "Product added to cart successfully",
      data: cart,
    });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};

exports.GetCart = async (req, res, next) => {
  try {
    const { type = "cartList" } = req.query;
    const query = {
      where: {
        ...(req.isAdmin
          ? req.params.userId
            ? {
                created_by: req.params.userId,
              }
            : {}
          : {
              created_by: req.user_id,
            }),
      },
      include: [
        {
          model: PrVariations,
          as: "variation",
          attributes: prVariationsAttr[type],
        },
        {
          model: Products,
          as: "product",
          attributes: productAttributes[type],
        },
      ],
    };
    const cart = await CartItems.findAndCountAll(query);
    res.status(200).json({
      status: 200,
      success: true,
      message: "Cart fetched successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateCart = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    let item = await CartItems.findByPk(req.params.id);
    item = item.toJSON();
    if (
      (item.quantity === 1 && req.body.quantity === -1) ||
      item.quantity === -req.body.quantity
    ) {
      await CartItems.destroy({
        where: { id: req.params.id },
        individualHooks: true,
        deleted_by: req.user_id,
        transaction,
      });
    } else {
       await CartItems.update(
        {
          quantity: item.quantity + req.body.quantity,
          updated_by: req.user_id,
        },
        {
          where: { id: req.params.id },
          transaction,
        }
      );
    }
    await transaction.commit();
    res.status(200).json({
      status: 200,
      success: true,
      message: "Cart updated successfully",
    });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};
