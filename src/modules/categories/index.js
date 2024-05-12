const { JoiValidator } = require("../../middlewares");
const upload = require("../../middlewares/multer");
const {
  createCategoryJoiValidation,
  updateCategoryJoiValidation,
} = require("../categories/validation");
const {
  CreateCategory,
  updateCategory,
  deleteCategory,
  getCategories,
} = require("./controller");

const router = require("express").Router();

router.route("/").get(getCategories);
router.route("/create").post(
  upload("categories", [
    { name: "image", limit: 1 },
    { name: "banner", lmit: 1 },
  ]),
  CreateCategory
);

router.route("/update/:id").put(
  upload("categories", [
    { name: "image", limit: 1 },
    { name: "banner", lmit: 1 },
  ]),
  updateCategory
);

router.route("/delete/:id").delete(deleteCategory);

module.exports = router;
