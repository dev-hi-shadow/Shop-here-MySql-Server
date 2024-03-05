const { getProfile } = require("./controllers");

const router = require("express").Router();

router.route("/profile").get(getProfile);

module.exports = router
