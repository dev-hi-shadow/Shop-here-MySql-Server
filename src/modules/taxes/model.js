const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");
const Roles = require("../roles/model");
const md5 = require("md5");

class Taxes extends Model {
  static associate(db) {
    Taxes.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    Taxes.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    Taxes.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    Taxes.hasMany(db.Products, {
      foreignKey: "tax_id",
      as: "tax",
     });
  }
}

Taxes.init(
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
    tableName: "taxes",
    modelName: "Taxes",
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

module.exports = Taxes;
