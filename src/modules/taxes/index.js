const { JoiValidator } = require("../../middlewares");
const { TaxJoiValidation } = require("./validation");
const { CreateTax, UpdateTax, GetTaxes } = require("./controller");

const router = require("express").Router();

router.route("/").get(GetTaxes);    
router.route("/create").post(JoiValidator(TaxJoiValidation), CreateTax);
router.route("/update/:id").put(JoiValidator(TaxJoiValidation), UpdateTax);

module.exports = router;
