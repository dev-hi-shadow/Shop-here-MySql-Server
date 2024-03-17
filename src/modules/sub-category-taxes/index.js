const { JoiValidator } = require("../../middlewares");
const { AddSubCategoryTax, GetSubCategoryTaxes } = require("./controller");
const { CreateSubCategoryTaxesJoiValidation } = require("./validation.js");
const router = require("express").Router();

router
  .route("/create")
  .post(JoiValidator(CreateSubCategoryTaxesJoiValidation), AddSubCategoryTax)
router
  .route("/").get(GetSubCategoryTaxes)
 
module.exports = router;
