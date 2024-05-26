const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Files extends Model {
  static associate(db) {
    Files.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    Files.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    Files.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    Files.belongsTo(db.PrVariations, {
      foreignKey: "variation_id",
       sourceKey: "id",
    });
  }
}
Files.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "variation",
        key: "id",
      },
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
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
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "files",
    modelName: "Files",
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

module.exports = Files;
