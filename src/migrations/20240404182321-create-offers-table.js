"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("offers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      banner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      discount_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      min_cart_items: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      min_subtotal_amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      min_total: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      max_discount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      max_discount_amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_published: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      usage_limit_per_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      usage_limit_per_product: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total_usage_limit: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
       for_new_customers_only: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable("offers");
  },
};
