const { JoiValidator } = require("../../middlewares");
const { AddAttribte, DeleteAttribute } = require("./controller");
const { getAttributes } = require("./model");
const { CreateAttributeJoiValidation } = require("./validation");

const router = require("express").Router();

router
  .route("/create")
  .get(JoiValidator(CreateAttributeJoiValidation), AddAttribte);

router.route("/").get(getAttributes);
router
  .route("/update/:id")
  .get(JoiValidator(CreateAttributeJoiValidation), AddAttribte);

router.route("/delete/:id").delete(DeleteAttribute);

module.exports = router;
