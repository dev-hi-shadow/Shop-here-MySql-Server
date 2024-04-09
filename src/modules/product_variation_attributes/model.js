const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class PrVariationsAttributes extends Model {
  static associate(db) {
    PrVariationsAttributes.belongsTo(db.Attributes, {
      as: "attribute",
      foreignKey: "attribute_id",
    });
    PrVariationsAttributes.belongsTo(db.PrVariations, {
      as: "variation",
      foreignKey: "variation_id",
    });
  }
}

PrVariationsAttributes.init(
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
        model: "pr_variations",
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
    tableName: "pr_variation_attributes",
    modelName: "PrVariationsAttributes",
  }
);

module.exports = PrVariationsAttributes;
