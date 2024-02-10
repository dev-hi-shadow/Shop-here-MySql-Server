const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/mysql");

class Roles extends Model {}

Roles.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "roles",
    modelName: "Roles",
  }
);

module.exports = Roles;
