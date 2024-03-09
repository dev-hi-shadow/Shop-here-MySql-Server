const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class SubCategoryTaxes extends Model {
  static associate(db) {
    SubCategoryTaxes.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    SubCategoryTaxes.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    SubCategoryTaxes.belongsTo(db.Users, {
      as: "creator",
      foreignKey: "created_by",
      targetKey: "id",
    });
    SubCategoryTaxes.belongsTo(db.Taxes, {
      as: "tax",
      foreignKey: "tax_id",
      targetKey: "id",
    });
  }
}
SubCategoryTaxes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
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
    deleted_by: {
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
  },

  {
    sequelize,
    tableName: "sub_category_taxes",
    modelName: "SubCategoryTaxes",
  }
);
module.exports = SubCategoryTaxes;
