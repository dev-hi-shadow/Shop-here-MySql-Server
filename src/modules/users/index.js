const { getProfile } = require("./controller");

const router = require("express").Router();

router.route("/profile").get(getProfile);

module.exports = router;
