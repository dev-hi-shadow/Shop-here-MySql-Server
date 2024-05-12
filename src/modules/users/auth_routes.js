const { JoiValidator } = require("../../middlewares");
const upload = require("../../middlewares/multer");
const { Register, login } = require("./controller");
const { RegisterJoiSchema, loginJoiSchema } = require("./validation");

const router = require("express").Router();

router
  .route("/signup")
  .post(upload("profile_pictures", ["profile_picture"]), Register);
router.route("/signin").post(JoiValidator(loginJoiSchema), login);
module.exports = router;
