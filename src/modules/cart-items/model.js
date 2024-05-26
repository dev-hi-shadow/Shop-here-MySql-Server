const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class CartItems extends Model {
  static associate(db) {
    CartItems.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    CartItems.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    CartItems.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    CartItems.belongsTo(db.Products, {
      foreignKey: "product_id",
      as  : "product",
      sourceKey: "id",
    });
    CartItems.belongsTo(db.PrVariations, {
      foreignKey: "variation_id",
      as  : "variation",
      sourceKey: "id",
    });
  }
}
CartItems.init(
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price_on_add: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
  },

  {
    sequelize,
    tableName: "cart_items",
    modelName: "CartItems",    
    hooks: {
      afterDestroy: async (instance, options) => {
        if (options?.deleted_by) {
          instance.setDataValue("deleted_by", options?.deleted_by);
          await instance.save();
        }
      },
    },
  }
);

module.exports = CartItems;
