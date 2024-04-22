const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Orders extends Model {
  static associate(db) {
    Orders.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    Orders.belongsTo(db.Users, {
      foreignKey: "user_id",
      sourceKey: "id",
    });
    Orders.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    Orders.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    Orders.belongsTo(db.Addresses, {
      foreignKey: "shipping_address_id",
      as : "shipping_address",
      sourceKey: "id",
    });
    Orders.belongsTo(db.Addresses, {
      foreignKey: "billing_address_id",
      as : "billing_address",
      sourceKey: "id",
    });
    Orders.hasMany(db.OrItems, {
      foreignKey: "order_id",
      as : "items"
    });
  }
}
Orders.init(
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
    payment_status: {
      type: DataTypes.ENUM("PENDING", "SUCCESS", "FAILED", "PROCESSING"),
      allowNull: false,
      defaultValue: "PENDING",
    },
    payment_method: {
      type: DataTypes.ENUM("ONLINE", "CASH ON DELIVERY"),
      allowNull: false,
    },
    total_items: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tax_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    shipping_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    shipping_address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "addresses",
        key: "id",
      },
    },
    billing_address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "addresses",
        key: "id",
      },
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    shipped_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expected_delivery_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    delivered_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cancellation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    refund_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tracking_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    carrier_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gift_wrap: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    gift_message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    promo_code_used: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    review_requested: {
      type: DataTypes.BOOLEAN,
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
    tableName: "orders",
    modelName: "Orders",
  }
);

module.exports = Orders;
