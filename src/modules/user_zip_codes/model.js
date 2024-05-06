const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class UserZipCodes extends Model {
  static associate(db) {
    UserZipCodes.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    UserZipCodes.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    UserZipCodes.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
  }
}

UserZipCodes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    zip_code: {
      type: DataTypes.INTEGER,
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
    tableName: "user_zip_codes",
    modelName: "UserZipCodes",
  }
);

module.exports = UserZipCodes;
