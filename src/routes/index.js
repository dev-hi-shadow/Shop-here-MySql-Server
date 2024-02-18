const router = require("express").Router();

router.use("/roles", require("../modules/roles/"));
router.use("/user", require("../modules/users/"));

module.exports = router;
