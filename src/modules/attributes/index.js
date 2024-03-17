const { JoiValidator } = require("../../middlewares");
const { AddAttribte, DeleteAttribute, GetAttribtes } = require("./controller");
const { CreateAttributeJoiValidation } = require("./validation");

const router = require("express").Router();

router
  .route("/create")
  .post(JoiValidator(CreateAttributeJoiValidation), AddAttribte);

router.route("/").get(GetAttribtes);
router
  .route("/update/:id")
  .put(JoiValidator(CreateAttributeJoiValidation), AddAttribte);

router.route("/delete/:id").delete(DeleteAttribute);

module.exports = router;
