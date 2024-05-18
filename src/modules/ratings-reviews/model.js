const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class RatingReviews extends Model {
  static associate(db) {
    RatingReviews.belongsTo(db.Products, {
       foreignKey: "product_id",
    });
  }
}

RatingReviews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
    rating: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    comment: {
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
    tableName: "rating_reviews",
    modelName: "RatingReviews",
  }
);

module.exports = RatingReviews;
