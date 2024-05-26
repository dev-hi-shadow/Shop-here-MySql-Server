const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class PrStockOut extends Model {
  static associate(db) {
    PrStockOut.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    PrStockOut.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    PrStockOut.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    PrStockOut.belongsTo(db.Products, {
      foreignKey: "product_id",
      sourceKey: "id",
    });
    PrStockOut.belongsTo(db.Orders, {
      foreignKey: "order_id",
      sourceKey: "id",
    });
    PrStockOut.belongsTo(db.PrVariations, {
      foreignKey: "variation_id",
      sourceKey: "id",
    });
  }
}
PrStockOut.init(
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
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
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
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
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
    notes: {
      type: DataTypes.STRING,
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
    tableName: "pr_stock_out",
    modelName: "PrStockOut",
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

module.exports = PrStockOut;
