const { verifyAuthToken } = require("../middlewares");

const router = require("express").Router();

router.use("/auth", require("../modules/users/auth_routes"));

router.use(verifyAuthToken);
router.use("/roles", require("../modules/roles/"));
router.use("/users", require("../modules/users/"));

module.exports = router;
