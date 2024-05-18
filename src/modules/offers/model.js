const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Offers extends Model {
  static associate(db) {
    Offers.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    Offers.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    Offers.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
 
  }
}
Offers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terms_conditions: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    discount_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    min_cart_items: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    min_subtotal_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    min_total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_discount_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    usage_limit_per_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    usage_limit_per_product: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_usage_limit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    for_new_customers_only: {
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
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "offers",
    modelName: "Offers",
  }
);

module.exports = Offers;
