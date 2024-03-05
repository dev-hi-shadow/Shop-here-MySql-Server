const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class SubCategories extends Model {
  static associate(db) {
    SubCategories.belongsTo(db.Categories, {
      as: "category",
      foreignKey: "category_id",
      targetKey: "id",
    }),
      SubCategories.belongsTo(db.Users, {
        as: "creator",
        foreignKey: "created_by",
        targetKey: "id",
      });
  }
}
SubCategories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_by: {
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
    tableName: "categories",
    modelName: "SubCategories",
  }
);

module.exports = SubCategories;
