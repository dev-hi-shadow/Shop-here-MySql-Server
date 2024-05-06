const { create } = require("./model");

module.exports = {
  searchAttributes: ["name", "created_at"],
  defaultAttributes: [
    "id",
    "name",
    "is_published",
    "created_at",
    "description",
    "image",
  ],
};
