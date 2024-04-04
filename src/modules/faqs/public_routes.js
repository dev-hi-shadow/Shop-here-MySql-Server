const { GetFaqs } = require("./controller");

const router = require("express").Router();

router.route("/").get(GetFaqs);
router.route("/:pid").get(GetFaqs);


module.exports = router;
