const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class ProductVariationAttributes extends Model {
  static associate(db) {
    ProductVariationAttributes.hasMany(db.Attributes, {
      as: "attribute",
      foreignKey: "attribute_id",
     });
    ProductVariationAttributes.hasMany(db.ProductVariations, {
      as: "variation",
      foreignKey: "variation_id",
     });
  }
}

ProductVariationAttributes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product_variations",
        key: "id",
      },
    },
    attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "attributes",
        key: "id",
      },
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
      allowNull: true,
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
    tableName: "product_variation_attributes",
    modelName: "ProductVariationAttributes",
  }
);

module.exports = ProductVariationAttributes;
