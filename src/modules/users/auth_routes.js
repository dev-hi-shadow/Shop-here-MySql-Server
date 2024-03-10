const { JoiValidator } = require("../../middlewares");
const { Register, login } = require("./controllers");
const { RegisterJoiSchema, loginJoiSchema } = require("./validation");

const router = require("express").Router();

router.route("/signup").post(Register);
router.route("/signin").post(JoiValidator(loginJoiSchema), login);
module.exports = router;
