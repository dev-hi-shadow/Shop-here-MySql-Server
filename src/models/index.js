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
const SubCategoryTax = require("../modules/sub-category-taxes/model");
const Products = require("../modules/products/model");
const PrVariationsAttributes = require("../modules/product_variation_attributes/model");
const PrVariations = require("../modules/product_variations/model");
const Faqs = require("../modules/faqs/model");
const PrStockIn = require("../modules/product_stock_in/model");
const PrStockOut = require("../modules/product_stock_out/model");
const Orders = require("../modules/orders/model");
const OrItems = require("../modules/order-items/model");
const QbConfig = require("../modules/quickbook-configuration/model");
const UserZipCodes = require("../modules/user_zip_codes/model");

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
  SubCategoryTax,
  Products,
  PrVariations,
  PrVariationsAttributes,
  PrStockIn,
  Faqs,
  PrStockOut,
  Orders,
  OrItems,
  QbConfig,
  UserZipCodes
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
