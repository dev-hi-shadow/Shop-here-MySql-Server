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
const Addresses = require("../modules/addresses/model");
const Attributes = require("../modules/attributes/model");
const Brands = require("../modules/brand/model");
const Taxes = require("../modules/taxes/model");
const Units = require("../modules/units/model");

const db = {
  Roles,
  Users,
  Categories,
  SMSHISTORY,
  AdminNotify,
  SellerNotify,
  CustomerNotify,
  Addresses,
  Attributes,
  Brands,
  Taxes,
  Units,
  SubCategories,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
