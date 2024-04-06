"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      payment_status: {
        type: Sequelize.ENUM("PENDING", "SUCCESS", "FAILED", "PROCESSING"),
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.ENUM("ONLINE", "CASH ON DELIVERY"),
        allowNull: false,
      },
      total_items: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subtotal_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      tax_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      shipping_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      discount_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      shipping_address_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "addresses",
          key: "id",
        },
      },
      billing_address_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "addresses",
          key: "id",
        },
      },
      payment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      shipped_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expected_delivery_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      delivered_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cancellation_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      refund_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      tracking_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      carrier_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      gift_wrap: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      gift_message: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      promo_code_used: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transaction_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      review_requested: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};
