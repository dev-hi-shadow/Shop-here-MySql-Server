const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Categories extends Model {
  static associate(db) {
    Categories.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
  }
}
Categories.init(
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
    modelName: "Categories",
  }
);

module.exports = Categories;
