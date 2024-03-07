const { verifyAuthToken } = require("../middlewares");

const router = require("express").Router();

router.use("/auth", require("../modules/users/auth_routes"));

router.use(verifyAuthToken);
router.use("/roles", require("../modules/roles/"));
router.use("/categories", require("../modules/categories"));
router.use("/sub-categories", require("../modules/sub-categories/"));
router.use("/users", require("../modules/users/"));
router.use("/alerts", require("../modules/notify"));

module.exports = router;
