const { GetProducts } = require("./controller");

const router = require("express").Router();

router.route("/").get(GetProducts);
router.route("/:id").get(GetProducts);

module.exports = router;
