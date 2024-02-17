const { Register, login } = require("./controllers");

const router = require("express").Router();

router.route("/signup").post(Register);
router.route("/signin").post(login);

module.exports = router;
