const { JoiValidator } = require("../../middlewares");
const { AddSubCategoryTax } = require("./controller");
const { CreateSubCategoryTaxesJoiValidation } = require("./validation.js");
const router = require("express").Router();

router
  .route("/create")
  .post(JoiValidator(CreateSubCategoryTaxesJoiValidation), AddSubCategoryTax);

module.exports = router;
