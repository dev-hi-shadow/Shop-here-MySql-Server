const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Faqs extends Model {
  static associate(db) {
    Faqs.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    Faqs.belongsTo(db.Products, {
      foreignKey: "product_id",
    });
    Faqs.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    Faqs.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
  }
}
Faqs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "products",
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
    tableName: "faqs",
    modelName: "Faqs",
  }
);

module.exports = Faqs;
