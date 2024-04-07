const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class OrItems extends Model {
  static associate(db) {
    OrItems.belongsTo(db.Users, {
      as: "order",
      foreignKey: "order_id",
    });
    OrItems.belongsTo(db.PrVariations, {
      as: "variation",
      foreignKey: "variation_id",
    });
    OrItems.belongsTo(db.Products, {
      as: "product",
      foreignKey: "product_id",
    });
  }
}

OrItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pr_variations",
        key: "id",
      },
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      allowNull: true,
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "or_items",
    modelName: "OrItems",
  }
);

module.exports = OrItems;
