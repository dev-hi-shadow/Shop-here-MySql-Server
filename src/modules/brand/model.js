const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Brands extends Model {
  static associate(db) {
    Brands.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
  }
}
Brands.init(
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
    tableName: "brands",
    modelName: "Brands",
  }
);

module.exports = Brands;
