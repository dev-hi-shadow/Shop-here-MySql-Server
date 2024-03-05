const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class sms_history extends Model {
  static associate(db) {}
}

sms_history.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateSent: { type: DataTypes.DATE, allowNull: true },
    dateCreated: { type: DataTypes.DATE, allowNull: false },

    to: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    order_id: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    sequelize,
    tableName: "sms_history",
    modelName: "SMSHISTORY",
  }
);

module.exports = sms_history;
