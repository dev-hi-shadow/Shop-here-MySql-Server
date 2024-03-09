const { JoiValidator } = require("../../middlewares");
const { CreateUnit, GetUnits, UpdateUnit } = require("./controller");
const {
  createUnitJoiValidation,
  UpdateUnitJoiValidation,
} = require("./validation");

const router = require("express").Router();

router.route("/").get(GetUnits);
router.route("/create").post(JoiValidator(createUnitJoiValidation), CreateUnit);
router
  .route("/update/:id")
  .put(JoiValidator(UpdateUnitJoiValidation), UpdateUnit);

module.exports = router;
