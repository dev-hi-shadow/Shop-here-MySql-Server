const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Attributes extends Model {
  static associate(db) {
    Attributes.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    Attributes.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    Attributes.belongsTo(db.Attributes, {
      foreignKey: "attribute_id",
      as: "attribute",
    });
    Attributes.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    Attributes.hasMany(db.PrVariationsAttributes, {
      foreignKey: "attribute_id",
      as: "attributes",
    });
  }
}
Attributes.init(
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
    attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "attributes",
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
    tableName: "attributes",
    modelName: "Attributes",
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

module.exports = Attributes;
