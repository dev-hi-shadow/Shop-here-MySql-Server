const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class PrVariations extends Model {
  static associate(db) {
    PrVariations.belongsTo(db.Products, {
      as: "product",
      foreignKey: "product_id",
    });
    PrVariations.belongsTo(db.Users, {
      foreignKey: "created_by",
    });
    PrVariations.belongsTo(db.Users, {
      foreignKey: "updated_by",
    });
    PrVariations.belongsTo(db.Users, {
      foreignKey: "deleted_by",
    });
    PrVariations.hasMany(db.PrVariationsAttributes, {
       foreignKey: "variation_id",
       as : "variation_attributes"
    });
    PrVariations.hasMany(db.OrItems, {
      foreignKey: "variation_id",
    });
  }
}

PrVariations.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    variation_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    manufecture_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    retail_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    special_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    length: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    depth: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    is_publish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    updated_by: {
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
  },
  {
    sequelize,
    tableName: "pr_variations",
    modelName: "PrVariations",
  }
);

module.exports = PrVariations;
