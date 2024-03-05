const { JoiValidator } = require("../../middlewares");
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
router
  .route("/create")
  .post(JoiValidator(createCategoryJoiValidation), CreateCategory);
router
  .route("/update/:id")
  .put(JoiValidator(updateCategoryJoiValidation), updateCategory);

router.route("/delete/:id").delete(deleteCategory);

module.exports = router;
