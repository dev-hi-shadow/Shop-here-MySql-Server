const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class SubCategoryTax extends Model {
  static associate(db) {
    SubCategoryTax.belongsTo(db.Users, {
      foreignKey: "updated_by",
    });
    SubCategoryTax.belongsTo(db.Users, {
      foreignKey: "deleted_by",
    });
    SubCategoryTax.belongsTo(db.Users, {
      foreignKey: "created_by",
    });
    SubCategoryTax.belongsTo(db.Taxes, {
      as: "tax",
      foreignKey: "tax_id",
    });
    SubCategoryTax.belongsTo(db.SubCategories, {
      as: "sub_category",
      foreignKey: "sub_category_id",
    });
  }
}
SubCategoryTax.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    sub_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "sub_categories",
        key: "id",
      },
    },
    tax_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "taxes",
        key: "id",
      },
    },
    percentage: {
      type: DataTypes.FLOAT,
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
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },

  {
    sequelize,
    tableName: "sub_category_tax",
    modelName: "SubCategoryTax",
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
module.exports = SubCategoryTax;
