module.exports = {
  searchAttributes: ["id", "variation_name", "product_id", "created_at"],
  default: ["id", "variation_name", "product_id", "created_at"],
  productOverview: [
    "id",
    "variation_name",
    "product_id",
    "retail_price",
    "special_price",
    "weight",
    "height",
    "length",
    "depth",
  ],
  cartList: ["variation_name", "retail_price"],
};
