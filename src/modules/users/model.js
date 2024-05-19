const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");
const Roles = require("../roles/model");
const md5 = require("md5");

class Users extends Model {
  static associate(db) {
    Users.belongsTo(db.Users, {
      foreignKey: "created_by",
      sourceKey: "id",
    });
    Users.belongsTo(db.Users, {
      foreignKey: "updated_by",
      sourceKey: "id",
    });
    Users.belongsTo(db.Users, {
      foreignKey: "deleted_by",
      sourceKey: "id",
    });
    Users.belongsTo(db.Roles, {
      as: "role",
      foreignKey: "role_id",
      targetKey: "id",
    });
    Users.hasMany(db.Addresses, {
      as: "user_addresses",
      foreignKey: "user_id",
      sourceKey: "id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  }
  isValidPassword = (password) => {
    return md5(password) === this.getDataValue("password");
  };
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    display_name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.getDataValue("first_name") || ""} ${
          this.getDataValue("last_name") || ""
        }`;
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue("password", md5(value));
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    account_status: {
      type: DataTypes.ENUM("verified", "unverified", "blacklisted"),
      allowNull: false,
      defaultValue: "unverified",
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferred_currency: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "USD",
    },
    created_by: {
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
    deleted_by: {
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
    tableName: "users",
    modelName: "Users",
  }
);

module.exports = Users;
