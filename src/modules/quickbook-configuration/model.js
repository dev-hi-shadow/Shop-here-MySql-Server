const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class QbConfig extends Model {}

QbConfig.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    qb_access_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qb_refresh_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    qb_access_token_expires_in: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    qb_refresh_token_expires_in: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "qb_config",
    modelName: "QbConfig",
  }
);

module.exports = QbConfig;
