const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class PrStockIn extends Model {
  static associate(db) {
    PrStockIn.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    PrStockIn.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    PrStockIn.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    PrStockIn.belongsTo(db.Products, {
      foreignKey: "product_id",
      sourceKey: "id",
      as : "product"
    });
    PrStockIn.belongsTo(db.PrVariations, {
      foreignKey: "variation_id",
      sourceKey: "id",
      as : "variation"
    });
  }
}
PrStockIn.init(
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
    invoice_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    quality_check_passed: {
      type: DataTypes.BOOLEAN,
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
    tableName: "pr_stock_in",
    modelName: "PrStockIn",
  }
);

module.exports = PrStockIn;
