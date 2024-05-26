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
const PrVariationsAttributes = require("../modules/product-variation-attributes/model");
const PrVariations = require("../modules/product-variations/model");
const Faqs = require("../modules/faqs/model");
const PrStockIn = require("../modules/product-stock-in/model");
const PrStockOut = require("../modules/product-stock-out/model");
const Orders = require("../modules/orders/model");
const OrItems = require("../modules/order-items/model");
const QbConfig = require("../modules/quickbook-configuration/model");
const UserZipCodes = require("../modules/user-zip-codes/model");
const Files = require("../modules/files/model");
const RatingReviews = require("../modules/ratings-reviews/model");
const Offers = require("../modules/offers/model");
const CartItems = require("../modules/cart-items/model");

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
  UserZipCodes,
  Files,
  RatingReviews,
  Offers,
  CartItems,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
