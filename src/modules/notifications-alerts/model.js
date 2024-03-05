const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");
const Roles = require("../roles/model");
const md5 = require("md5");

class NotificationsAlerts extends Model {
  static associate(db) {}
}

NotificationsAlerts.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    alert: { type: DataTypes.STRING, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    title_for_admin: { type: DataTypes.STRING, allowNull: true },
    title_for_seller: { type: DataTypes.STRING, allowNull: true },
    title_for_customer: { type: DataTypes.STRING, allowNull: true },
    seller_email: { type: DataTypes.BOOLEAN, allowNull: false },
    seller_notifications: { type: DataTypes.BOOLEAN, allowNull: false },
    seller_sms: { type: DataTypes.BOOLEAN, allowNull: false },
    admin_email: { type: DataTypes.BOOLEAN, allowNull: false },
    admin_notifications: { type: DataTypes.BOOLEAN, allowNull: false },
    admin_sms: { type: DataTypes.BOOLEAN, allowNull: false },
    customer_email: { type: DataTypes.BOOLEAN, allowNull: false },
    customer_notifications: { type: DataTypes.BOOLEAN, allowNull: false },
    customer_sms: { type: DataTypes.BOOLEAN, allowNull: false },
  },
  {
    sequelize,
    tableName: "notifications_alerts",
    modelName: "NotificationsAlerts",
  }
);

module.exports = NotificationsAlerts;
