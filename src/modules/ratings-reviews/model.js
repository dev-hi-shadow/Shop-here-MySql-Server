const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class RatingReviews extends Model {
  static associate(db) {
    RatingReviews.belongsTo(db.Products, {
      foreignKey: "product_id",
    });
    RatingReviews.belongsTo(db.Users, {
      foreignKey: "created_by",
      as : "rating_by"
    });
    RatingReviews.belongsTo(db.Users, {
      foreignKey: "updated_by",
    });
    RatingReviews.belongsTo(db.Users, {
      foreignKey: "deleted_by",
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

module.exports = RatingReviews;
