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
    Attributes.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
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
      allowNull: false,
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
      allowNull: false,
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
  }
);

module.exports = Attributes;
