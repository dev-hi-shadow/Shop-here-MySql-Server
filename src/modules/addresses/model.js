const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");
const Roles = require("../roles/model");
const md5 = require("md5");

class Addresses extends Model {
  static associate(db) {
    Addresses.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    Addresses.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    Addresses.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
  }
}

Addresses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_pickup: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    tableName: "addresses",
    modelName: "Addresses",
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

module.exports = Addresses;
