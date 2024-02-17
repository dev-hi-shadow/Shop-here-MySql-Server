const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Roles extends Model {
  static associate(db) {
    Roles.hasMany(db.users, {
      as: "users",
      foreignKey: "role_id",
      sourceKey: "id",
    });
  }
}

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
