const router = require("express").Router();
const { TestQuickBook } = require("./controller");

router.route("/").get(TestQuickBook);

module.exports = router;
