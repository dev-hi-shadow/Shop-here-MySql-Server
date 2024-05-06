const { UpdateZipCodes } = require("./controller");

const router = require("express").Router();

router.route("/").post(UpdateZipCodes);

module.exports = router;
