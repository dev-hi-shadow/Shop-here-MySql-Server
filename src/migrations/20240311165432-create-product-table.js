"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      short_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      product_type: {
        type: Sequelize.ENUM("Physical", "Digital"),
        allowNull: false,
      },
      made_in: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      assembled_in: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      max_order_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      min_order_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantity_step_size: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      warranty_period: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      guaranty_period: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      is_tax_included: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      main_image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_cod_available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
      main_video: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "brands",
          key: "id",
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
      sub_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sub_categories",
          key: "id",
        },
      },
      unit_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "units",
          key: "id",
        },
      },
      tax_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "taxes",
          key: "id",
        },
      },
      is_published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      expiry_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      product_system_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Pending",
      },
      cancellable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
      cancellable_till: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      replaceable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
      replaceable_till: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      returnable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
      returnable_till: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      refundable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
      refundable_till: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
