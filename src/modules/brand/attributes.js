const { create } = require("./model");

module.exports = {
  searchAttributes: ["name", "created_at"],
  default: [
    "id",
    "name",
    "is_published",
    "created_at",
    "description",
    "image",
  ],
  productOverview: ["name", "image"],
  
};
