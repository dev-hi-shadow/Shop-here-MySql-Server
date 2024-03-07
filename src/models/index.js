const Roles = require("../modules/roles/model");
const Users = require("../modules/users/model");
const SMSHISTORY = require("../modules/history-sms/model");
const Categories = require("../modules/categories/model");
const SubCategories = require("../modules/sub-categories/model");
const {
  AdminNotify,
  CustomerNotify,
  SellerNotify,
} = require("../modules/notify/model");

const db = {
  Roles,
  Users,
  Categories,
  SMSHISTORY,
  AdminNotify,
  SellerNotify,
  CustomerNotify,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
