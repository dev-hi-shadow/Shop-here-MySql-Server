const router = require("express").Router();

router.use("/roles", require("../modules/roles/routes"));
router.use("/user", require("../modules/users/routes"));

module.exports = router;
