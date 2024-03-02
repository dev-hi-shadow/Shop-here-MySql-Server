const { JoiValidator } = require("../../middlewares");
const { Register, login,  admins } = require("./controllers");
const { RegisterJoiSchema, loginJoiSchema } = require("./validation");

const router = require("express").Router();

router.route("/signup").post(JoiValidator(RegisterJoiSchema), Register);
router.route("/signin").post(JoiValidator(loginJoiSchema), login);
router.route("/admins").get(admins);

module.exports = router;
